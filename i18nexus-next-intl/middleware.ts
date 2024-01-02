import createMiddleware from "next-intl/middleware";
import { pathnames, locales } from "./navigation";
export default createMiddleware({
  locales,
  defaultLocale: "ko",
  pathnames,
});

// applies this middleware only to files in the app directory
export const config = {
  // matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
  matcher: ["/", "/(ko|en|ja)/:path*"],
};
