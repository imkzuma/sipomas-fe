import Head from "next/head";

import LandingPageLayout from "@/layouts/landing";
import LandingPage from "@/components/landing";

export default function Index(){
  return(
    <>
      <Head>
        <title>SIPOMAS | Landing Page</title>
      </Head>

      <LandingPageLayout>
        <LandingPage />
      </LandingPageLayout>
    </>

  )
}