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
    const {showPassword, setShowPassword} = useContext(PasswordContext);

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
                onClick={() => setShowPassword(!showPassword)}
                style = {{cursor: "pointer"}}
            >
                {
                    showPassword? <BsEyeFill className = 'text-primary fs-5'/>
                    : <BsEyeSlashFill className = 'text-primary fs-5' />
                }
            </InputGroup.Text>
        </InputGroup>
    )
}