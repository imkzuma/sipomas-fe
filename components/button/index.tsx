import { motion } from "framer-motion";

export const ButtonPrimary = ({ children, className, ...props } : any) => {
    return (
        <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className= {`btn btn-primary px-4 py-2 ${className}`}
            style={{ outline: "none", border: "none", boxShadow: "none" }}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export const ButtonTransparent = ({ children, className, ...props } : any) => {
    return (
        <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className={`btn btn-transparent px-4 py-2 ${className}`}
            {...props}
        >
            { children }
        </motion.button>
    );
};

export const ButtonOutline = ({ children, variant, className, ...props } : any) => {
    return (
        <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className={`btn btn-outline-${variant} px-4 py-2 ${className}`}
            {...props}
        >
            {children}    
        </motion.button>
    );
};

export const ButtonColor = ({ children, variant, className, ...props } : any) => {
    return (
        <motion.button
            whileHover={{ scale: 1 }}
            whileTap={{ scale: 0.9 }}
            className={`btn btn-${variant} px-4 py-2 ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
};