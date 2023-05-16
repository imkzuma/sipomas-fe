export interface FormInputInterface{
    controlId : string;
    label : string;
    children : any;
    className? : string;
}

export interface PasswordContextInterface{
    showPassword : boolean;
    setShowPassword : (showPassword : boolean) => void;
    showVerifyPassword : boolean;
    setShowVerifyPassword : (showVerifyPassword : boolean) => void;
}
