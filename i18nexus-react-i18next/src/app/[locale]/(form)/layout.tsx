import "@/app/globals.css";
import Container from "@/app/[locale]/(form)/container";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Provider from '@/contexts/prtovider'
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/app/[locale]/(form)/translationsProvider";
const inter = Inter({ subsets: ["latin"] });

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
  // return (
  // 	<div id='signup'>
  // 		<Container>{children}</Container>
  // 	</div>
  // )
  const { t, options } = await initTranslations(locale, ["signin"]);
  return (
    <html lang="en" id="signup">
      <body>
        <TranslationsProvider namespaces={options.ns} locale={locale}>
          <Container locale={locale}>{children}</Container>
        </TranslationsProvider>
      </body>
    </html>
  );
}
