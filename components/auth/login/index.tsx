import { useState } from 'react';
import dynamic from 'next/dynamic';

import { PasswordContext } from '@/components/form/FormContext';
import Loading from '@/components/loading';

const FormLogin = dynamic(() => import('./FormLogin'), { loading: () => <Loading /> });
const HeaderAuth = dynamic(() => import('../Header').then(mod => mod.HeaderAuth), { loading: () => <Loading /> });
const AuthLayouts = dynamic(() => import('@/layouts/auth').then(mod => mod.AuthLayouts), { loading: () => <Loading /> });

export default function ComponentsLogin(){
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return(
        <PasswordContext.Provider
            value = {{ 
                showPassword, 
                setShowPassword,
                showVerifyPassword: false,
                setShowVerifyPassword: () => {}
            }}
        >
            <AuthLayouts>
                <header>
                    <HeaderAuth 
                        title = "Login page"
                        description = "Please Login to continue"
                    />
                </header>

                <FormLogin />
            </AuthLayouts>
            
        </PasswordContext.Provider>
    )
}