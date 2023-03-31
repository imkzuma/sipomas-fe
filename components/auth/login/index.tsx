import { useState } from 'react';

import { HeaderAuth } from '../Header';
import { AuthLayouts } from '@/layouts/auth';
import FormLogin from './FormLogin';

import { PasswordContext } from '@/components/form/FormContext';

export default function ComponentsLogin(){
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
                        title = "Login page"
                        description = "Silahkan login untuk melanjutkan"
                    />
                </header>

                <FormLogin />

            </AuthLayouts>
        </PasswordContext.Provider>
    )
}