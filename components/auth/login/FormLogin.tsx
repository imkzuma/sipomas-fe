import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useContext, useState, FormEvent, ChangeEvent } from 'react';
import { Button, Form, Stack } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

import { PasswordContext } from "@/components/form/FormContext";
import { isEmailValid, isPasswordValid } from "@/components/form/InputHandler";

const FormTextInput = dynamic(() => import('@/components/form').then(mod => mod.FormTextInput));
const FormTextPassword = dynamic(() => import('@/components/form').then(mod => mod.FormTextPassword));

export default function FormLogin(){
    const { showPassword } = useContext(PasswordContext);

    const [email, setEmail] = useState<string>("");
    const [emailStatus , setEmailStatus] = useState<boolean>(true);

    const [password, setPassword] = useState<string>("");
    const [passwordStatus, setPasswordStatus] = useState<boolean>(true);

    const handleSubmit = async(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(email,password);
    }

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === ""){
            setEmailStatus(true);
        }

        else{
            if (!isEmailValid(event.target.value)){
                setEmailStatus(false);
            }
            else{
                setEmailStatus(true);
                setEmail(event.target.value);
            }
        }
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === ""){
            setPasswordStatus(true);
        }

        else{
            if (!isPasswordValid(event.target.value)){
                setPasswordStatus(false);
            }
            else{
                setPasswordStatus(true);
                setPassword(event.target.value);
            }
        }
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
                        controlId = "inputEmail"
                        label = "Email Address"
                    >
                        <Form.Control 
                            type = "email" 
                            placeholder = "youremail@email.com" 
                            onChange = { handleEmailInput }
                            required 
                            className = {`${!emailStatus? "border-danger" : ""}`}
                        />
                        <AnimatePresence>
                            {
                                !emailStatus&&
                                <motion.div
                                    initial = {{opacity: 0}}
                                    animate = {{opacity: 1}}
                                    exit = {{opacity: 0}}
                                >
                                    <Form.Text className = "text-danger">
                                        Please input a valid email address
                                    </Form.Text>
                                </motion.div>
                            }
                        </AnimatePresence>
                    </FormTextInput>

                    <FormTextPassword
                        controlId="inputPassword"
                        label = "Password"
                    >
                        <Form.Control 
                            type = { showPassword? "text" : "password" } 
                            placeholder = "Input your password" 
                            onChange = { handlePasswordInput }
                            required 
                        />
                    </FormTextPassword>
                    <AnimatePresence>
                        {
                            !passwordStatus&&
                            <motion.div
                                initial = {{opacity: 0}}
                                animate = {{opacity: 1}}
                                exit = {{opacity: 0}}
                                style = {{marginTop: "-0.8rem", paddingBottom: "0.8rem"}}
                            >
                                <Form.Text className = "text-danger" > 
                                    Password must be at least 8 characters
                                </Form.Text>
                            </motion.div>
                        }
                    </AnimatePresence>

                    <div>
                        <Link href = "#" className = 'text-primary text-decoration-none'>
                            Forgot Password ?
                        </Link>
                    </div>
                </Stack>
                
                <Stack direction = "vertical" className = 'text-center' gap = {3}>
                    <Button
                        variant="primary"
                        type="submit"
                        className = "p-3 fs-5"
                    >
                        Login
                    </Button>
                    
                    <p className = 'ny-auto text-muted'>
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