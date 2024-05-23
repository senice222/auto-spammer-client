import { Link } from "react-router-dom"
import {motion} from 'framer-motion'

const FirstTextBlock = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
            className="main_text"
        >
            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
            >Рассылка сообщений в Telegram</motion.h1>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
            >Автоматизируйте обмен своим контентом в мессенджере.</motion.p>
            <motion.Link
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                className="start_but" to={'/signup'}>Начало работы</motion.Link>
        </motion.div>
    )
}

export default FirstTextBlock