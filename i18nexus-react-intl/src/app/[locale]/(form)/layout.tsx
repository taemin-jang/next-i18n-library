import "@/app/globals.css";
import Container from "@/app/[locale]/(form)/container";
import type { Metadata } from "next";

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
  return (
    <html lang={locale} id="signup">
      <body>
        <Container locale={locale}>{children}</Container>
      </body>
    </html>
  );
}
