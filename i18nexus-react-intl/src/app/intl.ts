"server-only";

import { createIntl } from "@formatjs/intl";
import { currentLocale } from "next-i18n-router";

export default async function getIntl(namespace: any, locale: string) {
  return createIntl({
    locale: locale as string,
    messages: (await import(`/messages/${locale}/${namespace}.json`)).default,
  });
}
