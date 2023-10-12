import Link from "next/link";
import getIntl from "@/app/intl";
import TranslationsProvider from "@/app/[locale]/(form)/translationsProvider";
export default async function Container({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: any;
}) {
  const intl = await getIntl("signin", locale);
  return (
    <TranslationsProvider messages={intl.messages} locale={intl.locale}>
      <main className="flex h-screen justify-center items-center p-6">
        <div className="border-2 border-gray-200 rounded-md form-layout bg-white  w-[400px]">
          <div className="relative p-5">
            <div className="flex flex-col items-center">
              <Link href={"/"} className="font-bold font- text-3xl pt-10 mb-4">
                wanted
              </Link>
              <h2 className="text-center font-semibold text-2xl my-4">
                {intl.formatMessage({ id: "title" })}
              </h2>
              <p className="text-gray-500 text-center text-sm mb-8">
                {intl.formatMessage({ id: "subTitle" })}
              </p>
            </div>
            {children}
          </div>
        </div>
      </main>
    </TranslationsProvider>
  );
}
