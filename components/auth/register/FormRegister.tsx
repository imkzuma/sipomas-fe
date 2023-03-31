import { useContext } from 'react';
import { Button, Form, Stack } from "react-bootstrap";

import { FormTextInput, FormTextPassword } from "@/components/form";
import { PasswordContext } from "@/components/form/FormContext";
import Link from 'next/link';

export default function FormRegister(){
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
                        controlId = "inputName"
                        label = "Username"
                    >
                        <Form.Control type = "text" placeholder = "Input your username" required />
                    </FormTextInput>

                    <FormTextInput
                        controlId = "inputEmail"
                        label = "Email Address"
                    >
                        <Form.Control type = "email" placeholder = "Input your email" required />
                    </FormTextInput>

                    <FormTextPassword
                        controlId = "inputPassword"
                        label = "Password"
                    >
                        <Form.Control type = { showPassword? "password" : "text" } placeholder = "Input your password" required />
                    </FormTextPassword>

                </Stack>

                <Stack direction = "vertical" className = 'text-center' gap = {3}>
                    <Button
                        variant="primary"
                        className = "p-3 fs-5"
                    >
                        Register
                    </Button>
                    
                    <p className = 'ny-auto text-muted9o'>
                        Already have an account ? 
                        <Link href = "/auth/login" className = 'ps-1 text-decoration-none text-primary'>
                            Login
                        </Link>
                    </p>
                </Stack>
            </Stack>
        </Form>
    )
}