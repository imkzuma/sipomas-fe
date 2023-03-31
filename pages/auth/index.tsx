import Head from "next/head";
import Link from "next/link";

import { Button, Container, Stack } from "react-bootstrap";

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
                            <Button variant = "primary" className = "px-4">
                                Login
                            </Button>
                        </Link>
                        <Link href = "/auth/register">
                            <Button variant = "outline-primary" className = "px-4">
                                Register
                            </Button>
                        </Link>
                    </Stack>
                </div>
            </Container>
        </>
    )
}