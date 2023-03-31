import Link from 'next/link';
import { useContext, useState } from 'react';
import { Button, Form, Stack } from "react-bootstrap";

import { FormTextInput, FormTextPassword } from "@/components/form";
import { PasswordContext } from "@/components/form/FormContext";

export default function FormRegister(){
    const { showPassword, showVerifyPassword } = useContext(PasswordContext);

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [verifyPassword, setVerifyPassword] = useState<string>("");

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(username, email, password, verifyPassword);
    }

    return(
        <Form onSubmit = { handleSubmit }>
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
                        <Form.Control 
                            type = "text" 
                            placeholder = "Input your username" 
                            onChange = {(e) => setUsername(e.target.value)}
                            required 
                        />
                    </FormTextInput>

                    <FormTextInput
                        controlId = "inputEmail"
                        label = "Email Address"
                    >
                        <Form.Control 
                            type = "email" 
                            placeholder = "Input your email" 
                            onChange = {(e) => setEmail(e.target.value)}
                            required 
                        />
                    </FormTextInput>

                    <FormTextPassword
                        controlId = "inputPassword"
                        label = "Password"
                    >
                        <Form.Control 
                            type = { showPassword? "text" : "password" } 
                            placeholder = "Input your password" 
                            onChange = {(e) => setPassword(e.target.value)}
                            required 
                        />
                    </FormTextPassword>

                    <FormTextPassword
                        controlId = "inputVerifyPassword"
                        label = "Re-Type Password"
                    >
                        <Form.Control 
                            type = { showVerifyPassword? "text" : "password" } 
                            placeholder = "Input your password" 
                            onChange = {(e) => setVerifyPassword(e.target.value)}
                            required 
                        />
                    </FormTextPassword>

                </Stack>

                <Stack direction = "vertical" className = 'text-center' gap = {3}>
                    <Button
                        variant="primary"
                        className = "p-3 fs-5"
                        type = "submit"
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