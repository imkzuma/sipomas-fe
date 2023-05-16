import { CloseOutlined } from "@ant-design/icons";
import { Alert } from "antd";

interface headerType{
    name: string;
    role: string;
};

export default function HeaderOverview({ name, role } : headerType ){
    return(
        <Alert 
            message = {
                <h4 className = 'fw-bold'>Welcome back, { name } !</h4>
            } 
            description = {
                <p>
                    You&apos;ve logged in as <span className = 'fw-bold'>{ role }</span>
                </p>
            } 
            type = "info" 
            showIcon  
            closable closeIcon = { <CloseOutlined className = 'fs-6' /> }
            className = 'p-4 mb-5'
        />
    )
}