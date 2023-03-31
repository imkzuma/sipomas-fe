import { PasswordContextInterface } from "@/utils/interfaces/form";
import { createContext } from "react";

export const PasswordContext = createContext<PasswordContextInterface>({ 
    showPassword: false, 
    setShowPassword: () => {}, 
    showVerifyPassword: false, 
    setShowVerifyPassword: () => {}
});