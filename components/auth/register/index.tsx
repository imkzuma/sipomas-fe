import { useState } from 'react';

import { AuthLayouts } from "@/layouts/auth";
import { HeaderAuth } from "@/components/auth/Header";
import FormRegister from "./FormRegister";
import { PasswordContext } from "@/components/form/FormContext";

export default function RegisterComponent(){
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return(
        <PasswordContext.Provider
            value = {{
                showPassword,
                setShowPassword
            }}
        >
            <AuthLayouts>
                <header>
                    <HeaderAuth 
                        title = "Register page"
                        description = "Silahkan register untuk melanjutkan"
                    />
                </header>

                <FormRegister />
            </AuthLayouts>
        </PasswordContext.Provider>
    )
}