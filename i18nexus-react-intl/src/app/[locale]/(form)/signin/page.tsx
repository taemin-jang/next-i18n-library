import SigninForm from "@/app/[locale]/(form)/signin/signinForm";

export default async function Signin({
  params: { locale },
}: {
  params: { locale: any };
}) {
  return <SigninForm locale={locale} />;
}
