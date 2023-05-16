import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import { useContext, useState, FormEvent, ChangeEvent } from 'react';
import { Button, Form, Stack } from "react-bootstrap";
import { motion } from "framer-motion";

import { PasswordContext } from '@/components/form/FormContext';
import { isEmailValid, isPasswordValid } from '@/components/form/InputHandler';

const FormTextInput = dynamic(() => import('@/components/form').then(mod => mod.FormTextInput));
const FormTextPassword = dynamic(() => import('@/components/form').then(mod => mod.FormTextPassword));

export default function FormRegister(){
    const router = useRouter();
    const { regmail } = router.query;

    const { showPassword, showVerifyPassword } = useContext(PasswordContext);

    const [username, setUsername] = useState<string>("");
    
    const [email, setEmail] = useState<string>("");
    const [emailStatus, setEmailStatus] = useState<boolean>(true);

    const [password, setPassword] = useState<string>("");
    const [passwordStatus, setPasswordStatus] = useState<boolean>(true);

    const [verifyPassword, setVerifyPassword] = useState<string>("");
    const [verifyPasswordStatus, setVerifyPasswordStatus] = useState<boolean>(true);
    const [verifyPasswordMessage, setVerifyPasswordMessage] = useState<string>("");
    
    const handleSubmit = async(event: FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log(username, email, password, verifyPassword);
    }

    const handleBtnSubmit = () => {
        return (
            ( username !== "" ) &&
            ( email !== "" && emailStatus ) &&
            ( password !== "" && passwordStatus ) &&
            ( verifyPassword !== "" && verifyPasswordStatus ) &&
            ( password === verifyPassword )
        );
    }

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value === ""){
            setEmailStatus(true);
        }

        else{
            if(!isEmailValid(event.target.value)){
                setEmailStatus(false);
            }
            else{
                setEmailStatus(true);
                setEmail(event.target.value);
            }
        }
    }

    const handlePasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        if(event.target.value === ""){
            setPasswordStatus(true);
            setPassword("");
        }

        else{
            if(!isPasswordValid(event.target.value)){
                setPasswordStatus(false);
            }
            else{
                setPasswordStatus(true);
                setPassword(event.target.value);
            }
        }
    }

    const handleVerifyPasswordInput = (event: ChangeEvent<HTMLInputElement>) => {
        setVerifyPasswordMessage("");

        if(event.target.value === ""){
            setVerifyPasswordStatus(true);
            setVerifyPassword("");
        }

        else{
            if(password === ""){
                setVerifyPasswordStatus(false);
                setVerifyPasswordMessage("Please input your password first");
            }
            else if(password !== event.target.value){
                setVerifyPasswordStatus(false);
                setVerifyPasswordMessage("Password does not match");
            }
            else{
                setVerifyPasswordStatus(true);
                setVerifyPassword(event.target.value);
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
                            defaultValue = { regmail&& regmail as string } 
                            placeholder = "Input your email" 
                            className = {!emailStatus? "border-danger" : ""}
                            onChange = { handleEmailInput }
                            required 
                        />
                        {
                            !emailStatus&&
                            <motion.div
                                initial = {{opacity: 0}}
                                animate = {{opacity: 1}}
                            >
                                <Form.Text className = "text-danger">
                                    Please input a valid email address
                                </Form.Text>
                            </motion.div>
                        }
                    </FormTextInput>

                    <FormTextPassword
                        controlId = "inputPassword"
                        label = "Password"
                        className = {!passwordStatus? "border border-danger rounded" : ""}
                    >
                        <Form.Control 
                            type = { showPassword? "text" : "password" } 
                            placeholder = "Input your password" 
                            className = {!passwordStatus? "border-0 border-end border-danger" : ""}
                            onChange = { handlePasswordInput }
                            required 
                        />
                    </FormTextPassword>

                    {
                        !passwordStatus&&
                        <motion.div
                            initial = {{opacity: 0}}
                            animate = {{opacity: 1}}
                            exit = {{opacity: 0}}
                            style = {{marginTop: "-0.8rem", paddingBottom: "0.3rem"}}
                        >
                            <Form.Text className = "text-danger" > 
                                Password must be at least 8 characters
                            </Form.Text>
                        </motion.div>
                    }

                    {
                        passwordStatus && password !== "" &&
                        <>
                            <motion.div
                                initial = {{ opacity: 0, y: -50 }}
                                animate = {{ opacity: 1, y: 0 }}
                                exit = {{ opacity: 0, y: 50 }}
                            >
                                <FormTextPassword
                                    controlId = "inputVerifyPassword"
                                    label = "Re-Type Password"
                                    className = {!verifyPasswordStatus? "border border-danger rounded" : ""}
                                >
                                    <Form.Control 
                                        type = { showVerifyPassword? "text" : "password" } 
                                        placeholder = "Input your password"
                                        className = {!verifyPasswordStatus? "border-0 border-end border-danger" : ""}
                                        onChange = { handleVerifyPasswordInput }
                                        required 
                                    />
                                </FormTextPassword>
                            </motion.div>

                            {
                                !verifyPasswordStatus&&
                                <motion.div
                                    initial = {{opacity: 0}}
                                    animate = {{opacity: 1}}
                                    exit = {{opacity: 0}}
                                    style = {{marginTop: "-0.8rem", paddingBottom: "0.3rem"}}
                                >
                                    <Form.Text className = "text-danger" > 
                                        { verifyPasswordMessage }
                                    </Form.Text>
                                </motion.div>
                            }
                        </>
                    }
                </Stack>

                <Stack direction = "vertical" className = 'text-center' gap = {3}>
                    <Button
                        variant="primary"
                        className = "p-3 fs-5"
                        type = "submit"
                        disabled = { !handleBtnSubmit() }
                    >
                        Register
                    </Button>
                    
                    <p className = 'ny-auto text-muted'>
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