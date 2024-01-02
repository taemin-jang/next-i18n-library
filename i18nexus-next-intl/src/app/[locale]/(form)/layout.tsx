import "@/app/globals.css";
import Container from "@/app/[locale]/(form)/container";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Provider from '@/contexts/prtovider'
// import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/[locale]/(form)/translationsProvider";
import { notFound } from "next/navigation";
import { getTranslator, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "../../../../navigation";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: "로그인 및 회원가입",
  description: "로그인 및 회원가입 페이지",
};

export default async function FormRootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: any };
}) {
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);
  return (
    <html lang={locale} id="signup">
      <body>
        <Container locale={locale}>{children}</Container>
      </body>
    </html>
  );
}
