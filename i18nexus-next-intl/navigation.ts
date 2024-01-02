import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from "next-intl/navigation";

export const locales = ["en", "ko", "ja"] as const;

export const pathnames = {
  "/": "/",
  "/signin": {
    en: "/en/signin",
    ko: "/signin",
    ja: "/ja/signin",
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
  });
