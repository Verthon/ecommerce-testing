import Head from "next/head";
import Link from "next/link";
import NextImage from "next/image";

import { useLocale } from "app/localization/hooks/useLocale";
import { MainLayout } from "app/shared/components/main-layout/main-layout";

export default function NotFoundPage() {
  const { t } = useLocale();

  return (
    <>
      <Head>
        <title>{t("notFoundPage.title")}</title>
        <meta name="description" content={t("notFoundPage.description")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <main className="relative isolate min-h-max flex-1">
          <NextImage
            src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
            width={350}
            height={750}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
          />
          <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
            <p className="text-base font-semibold leading-8 text-white">404</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {t("notFoundPage.title")}
            </h1>
            <p className="mt-4 text-base text-white/70 sm:mt-6">
              {t("notFoundPage.description")}
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="/"
                className="text-sm font-semibold leading-7 text-white"
              >
                <span aria-hidden="true">&larr;</span>
                {t("notFoundPage.backToHome")}
              </Link>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
