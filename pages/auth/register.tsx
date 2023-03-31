import Head from "next/head";
import RegisterComponent from "@/components/auth/register";

export default function Register(){
    return(
        <>
            <Head>
                <title>SIPOMAS | Register</title>
            </Head>
            
            <section>
                <RegisterComponent />
            </section>
        </>
    )
}