import dynamic from 'next/dynamic';
import { useState } from 'react';

import { PasswordContext } from "@/components/form/FormContext";
import Loading from '@/components/loading';

const AuthLayouts = dynamic(() => import('@/layouts/auth').then(mod => mod.AuthLayouts), { loading: () => <Loading /> });
const HeaderAuth = dynamic(() => import('../Header').then(mod => mod.HeaderAuth), { loading: () => <Loading /> });
const FormRegister = dynamic(() => import('./FormRegister'), { loading: () => <Loading /> });

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