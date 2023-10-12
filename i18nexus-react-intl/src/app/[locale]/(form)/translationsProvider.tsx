"use client";
import { IntlProvider } from "react-intl";

export default function TranslationsProvider({
  messages,
  locale,
  children,
}: {
  children: React.ReactNode;
  locale: any;
  messages: any;
}) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
