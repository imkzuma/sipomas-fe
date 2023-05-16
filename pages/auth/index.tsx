import dynamic from "next/dynamic";
import Head from "next/head";
import Link from "next/link";

import { Container, Stack } from "react-bootstrap";
import Loading from "@/components/loading";

const ButtonOutline = dynamic(() => import("@/components/button").then(mod => mod.ButtonOutline), { loading: () => <Loading />});
const ButtonPrimary = dynamic(() => import("@/components/button").then(mod => mod.ButtonPrimary), { loading: () => <Loading />});

export default function Index(){
    return(
        <>
            <Head>
                <title> SIPOMAS | Auth </title>
            </Head>

            <Container 
                fluid
                className = "d-flex justify-content-center align-items-center"
                style = {{ minHeight: "100vh" }}
            >
                <div className="text-center">
                    <h4 className = 'fw-bold text-dark pb-3'>
                        <span className = 'bg-primary text-white px-2 rounded' style = {{ marginRight: "-0.2rem" }}>SI</span> POMAS
                    </h4>
                    <h6>
                        Welcome to SIPOMAS
                    </h6>
                    <p className = 'text-muted'>
                        Please login to continue to the main page
                    </p>

                    <Stack 
                        direction = "horizontal" 
                        gap = {3} 
                        className = 'justify-content-center'
                    >
                        <Link href = "/auth/login">
                            <ButtonPrimary>
                                Login
                            </ButtonPrimary>
                        </Link>
                        <Link href = "/auth/register">
                            <ButtonOutline variant = "primary">
                                Register
                            </ButtonOutline>
                        </Link>
                    </Stack>
                </div>
            </Container>
        </>
    )
}