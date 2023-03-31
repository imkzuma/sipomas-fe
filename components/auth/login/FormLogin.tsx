import Link from "next/link";
import { useContext } from 'react';
import { Button, Form, Stack } from "react-bootstrap";

import { FormTextInput, FormTextPassword } from "@/components/form/index";
import { PasswordContext } from "@/components/form/FormContext";

export default function FormLogin(){
    const { showPassword } = useContext(PasswordContext);

    return(
        <Form>
            <Stack
                direction = "vertical"
                gap = {5}
            >
                <Stack 
                    direction = "vertical"
                    gap = {3}
                >
                    <FormTextInput
                        controlId = "inputEmail"
                        label = "Email Address"
                    >
                        <Form.Control type = "email" placeholder = "youremail@email.com" required />
                    </FormTextInput>

                    <FormTextPassword
                        controlId="inputPassword"
                        label = "Password"
                    >
                        <Form.Control type = { showPassword? "text" : "password" } placeholder = "Input your password" required />
                    </FormTextPassword>

                    <Link href = "#" className = 'text-primary text-decoration-none'>
                        Forgot Password ?
                    </Link>
                </Stack>
                
                <Stack direction = "vertical" className = 'text-center' gap = {3}>
                    <Button
                        variant="primary"
                        className = "p-3 fs-5"
                    >
                        Login
                    </Button>
                    
                    <p className = 'ny-auto text-muted9o'>
                        Don&apos;t have an account ? 
                        <Link href = "/auth/register" className = 'ps-1 text-decoration-none text-primary'>
                            Sign Up
                        </Link>
                    </p>
                </Stack>
            </Stack>
        </Form>
    )
}