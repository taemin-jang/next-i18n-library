import initTranslations from "@/app/i18n";
import SigninForm from "@/app/[locale]/(form)/signin/signinForm";
import TranslationsProvider from "@/app/[locale]/(form)/translationsProvider";

export default async function Signin({
  params: { locale },
}: {
  params: { locale: any };
}) {
  return <SigninForm locale={locale} />;
}
