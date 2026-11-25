import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { SUPABASE_URL, SUPABASE_ANON_KEY, isSupabaseConfigured } from "@/lib/env";

const PROTECTED = ["/dashboard"];
const GUEST_ONLY = ["/login", "/signup", "/forgot-password"];

export async function middleware(request: NextRequest) {
  if (!isSupabaseConfigured) return NextResponse.next();

  let response = NextResponse.next({ request });
  const supabase = createServerClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(list: { name: string; value: string; options: CookieOptions }[]) {
        list.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        list.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  // getUser() validates the JWT with Supabase; never trust getSession() here.
  const { data: { user } } = await supabase.auth.getUser();
  const path = request.nextUrl.pathname;

  const redirect = (to: string, search?: Record<string, string>) => {
    const url = request.nextUrl.clone();
    url.pathname = to;
    url.search = "";
    Object.entries(search ?? {}).forEach(([k, v]) => url.searchParams.set(k, v));
    const r = NextResponse.redirect(url);
    response.cookies.getAll().forEach((c) => r.cookies.set(c));
    return r;
  };

  if (!user && PROTECTED.some((p) => path.startsWith(p))) {
    return redirect("/login", { next: path });
  }
  if (user && GUEST_ONLY.includes(path)) return redirect("/dashboard");
  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|logo.jpg|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)"],
};
