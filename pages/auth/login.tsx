import Head from "next/head";
import LoginComponents from "@/components/auth/login";

export default function Login(){
    return(
        <>
            <Head>
                <title> SIPOMAS | Login </title>
            </Head>

            <section>
                <LoginComponents />
            </section>
        </>
    )
}