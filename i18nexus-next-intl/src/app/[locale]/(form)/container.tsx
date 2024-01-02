import Link from "next/link";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../../navigation";
import { notFound } from "next/navigation";
export default function Container({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: any;
}) {
  const isValidLocale = locales.some((cur) => cur === locale);
  if (!isValidLocale) notFound();
  unstable_setRequestLocale(locale);
  const t = useTranslations("signin");
  return (
    <main className="flex h-screen justify-center items-center p-6">
      <div className="border-2 border-gray-200 rounded-md form-layout bg-white  w-[400px]">
        <div className="relative p-5">
          <div className="flex flex-col items-center">
            <Link href={"/"} className="font-bold font- text-3xl pt-10 mb-4">
              wanted
            </Link>
            <h2 className="text-center font-semibold text-2xl my-4">
              {t("title")}
            </h2>
            <p className="text-gray-500 text-center text-sm mb-8">
              {t("subTitle")}
            </p>
          </div>
          {children}
        </div>
      </div>
    </main>
  );
}
