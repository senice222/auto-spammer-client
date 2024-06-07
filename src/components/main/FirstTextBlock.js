import { Link } from "react-router-dom"
import { motion } from 'framer-motion'

const FirstTextBlock = () => {
    return (
        <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
                delay: 0.2,
                x: {
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                },
                opacity: {
                    duration: 1.25,
                    ease: 'easeInOut',
                },
                duration: 2,
                ease: 'easeInOut',
            }}
            className="main_text"
        >
            <motion.h1
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                    },
                    opacity: {
                        duration: 1.25,
                        ease: 'easeInOut',
                    },
                    duration: 2,
                    ease: 'easeInOut',
                }}
            >Рассылка сообщений в Telegram</motion.h1>
            <motion.p
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                    },
                    opacity: {
                        duration: 1.25,
                        ease: 'easeInOut',
                    },
                    duration: 2,
                    ease: 'easeInOut',
                }}
            >Автоматизируйте обмен своим контентом в мессенджере.</motion.p>
            <motion.Link
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                    },
                    opacity: {
                        duration: 1.25,
                        ease: 'easeInOut',
                    },
                    duration: 2,
                    ease: 'easeInOut',
                }}
                className="start_but" to={'/signup'}>Начало работы</motion.Link>
        </motion.div>
    )
}

export default FirstTextBlock