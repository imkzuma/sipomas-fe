import Loading from "@/components/loading";
import dynamic from "next/dynamic";
import Head from "next/head";

const LoginComponents = dynamic(() => import("@/components/auth/login"));

export default function Login(){
    return(
        <>
            <Head>
                <title> SIPOMAS | Login </title>
            </Head>

            <main>
                <LoginComponents />
            </main>
        </>
    )
}