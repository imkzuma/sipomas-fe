import { useContext } from "react";
import { FloatingLabel, InputGroup } from "react-bootstrap";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { FormInputInterface } from "@/utils/interfaces/form";
import { PasswordContext } from "./FormContext";

export function FormTextInput({ controlId, label, children } : FormInputInterface){
    return(
        <FloatingLabel
            controlId = { controlId }
            label = { label }
        >
            { children }
        </FloatingLabel>
    )

}

export function FormTextPassword({ controlId, label, children } : FormInputInterface){
    const {
        showPassword, 
        setShowPassword, 
        showVerifyPassword, 
        setShowVerifyPassword
    } = useContext(PasswordContext);

    function handleClick(){
        if(controlId === 'inputPassword'){
            setShowPassword(!showPassword);
        }else{
            setShowVerifyPassword(!showVerifyPassword);
        }   
    }

    return(
        <InputGroup>
            <FloatingLabel
                controlId = { controlId }
                label = { label }
            >
                { children }
                
            </FloatingLabel>
            <InputGroup.Text 
                className = 'px-4 bg-transparent'
                onClick={handleClick}
                style = {{cursor: "pointer"}}
            >
                {
                    controlId === 'inputPassword'? 
                        showPassword? <BsEyeSlashFill className="text-primary fs-5" /> : <BsEyeFill className="text-primary fs-5" /> 
                    :
                        showVerifyPassword? <BsEyeSlashFill className="text-primary fs-5" /> : <BsEyeFill className="text-primary fs-5" />
                }
            </InputGroup.Text>
        </InputGroup>
    )
}