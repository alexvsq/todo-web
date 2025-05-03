import type { NextAuthConfig } from "next-auth";

const PROTECTED_ROUTES = ["/dashboard"];

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = auth?.user;
      const isInProtectedRoutes = PROTECTED_ROUTES.includes(nextUrl.pathname);

      if (isInProtectedRoutes) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
