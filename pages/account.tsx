import { useLocale } from "app/localization/hooks/useLocale";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/navigation";

import { MainLayout } from "app/shared/components/main-layout/main-layout";

export default function AccountPage() {
  const { t } = useLocale();
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/login");
    return;
  }

  return (
    <>
      <Head>
        <title>{t("account.pageTitle")}</title>
        <meta name="description" content="About Brand Eyewear" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <h1>Account</h1>
      </MainLayout>
    </>
  );
}
