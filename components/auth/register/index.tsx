import { useState } from 'react';

import { AuthLayouts } from "@/layouts/auth";
import { HeaderAuth } from "@/components/auth/Header";
import FormRegister from "./FormRegister";
import { PasswordContext } from "@/components/form/FormContext";

export default function RegisterComponent(){
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showVerifyPassword, setShowVerifyPassword] = useState<boolean>(false);

    return(
        <PasswordContext.Provider
            value = {{
                showPassword,
                setShowPassword,
                showVerifyPassword,
                setShowVerifyPassword
            }}
        >
            <AuthLayouts>
                <header>
                    <HeaderAuth 
                        title = "Register page"
                        description = "Please Register to continue"
                    />
                </header>

                <FormRegister />
            </AuthLayouts>
        </PasswordContext.Provider>
    )
}