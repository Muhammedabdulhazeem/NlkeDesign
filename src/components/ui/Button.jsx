import { motion } from "framer-motion"


const buttonVariant = {
    final: {
        scale: 1.05,
        transition: {
            duration: 0.5,
            repeatType: "mirror",
            repeat: Infinity,
        }
    }
}

export const Button = ({children, className}) => {
    return(
        <motion.button 
            className={`text-black font-bold bg-white rounded-full sm:text-[14px] sm:px-10 flex items-center justify-center py-3 px-14 ${className}`}
            variants={buttonVariant}
            animate="final"
        >
                {children}
        </motion.button>
    )
}