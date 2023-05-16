import Head from "next/head";
import dynamic from "next/dynamic";

import Loading from "@/components/loading";

const RegisterComponent = dynamic(() => import('@/components/auth/register'), { loading: () => <Loading /> });

export default function Register(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Register</title>
            </Head>
            
            <main>
                <RegisterComponent />
            </main>
        </>
    )
}