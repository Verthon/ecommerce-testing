import Head from "next/head";

import { CoreValues } from "../components/core-values/core-values";
import { MainLayout } from "app/shared/components/main-layout/main-layout";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About us</title>
        <meta name="description" content="About Brand Eyewear" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <CoreValues />
      </MainLayout>
    </>
  );
}
