import { useLocation } from "react-router-dom"
import background_img from "../../assets/img/background.svg"
import { useEffect } from "react"
import FirstTextBlock from "./FirstTextBlock"
import SecondBlock from "../second_block/SecondBlock";
import { ThirdBlock } from "../third_block/ThirdBlock";
import FourthBlock from "../fourth_block/FourthBlock";
import { motion } from 'framer-motion'
import { Footer } from "../footer/Footer";

const MainPage = () => {
    const location = useLocation()
    useEffect(() => window.scrollTo(0, 0), [location])

    return (
        <>
            <div className="main_container">
                <motion.img
                
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.2,
                        x: {
                            type: 'spring',
                            stiffness: 100,
                            damping: 20,
                        },
                        opacity: {
                            duration: 1.5,
                            ease: 'easeInOut',
                        },
                        duration: 2,
                        ease: 'easeInOut',
                    }}
                    src={background_img} className="bg_img" alt='' />
                <FirstTextBlock />
                <SecondBlock />
                <ThirdBlock />
                <FourthBlock />
            </div>
            <Footer />
        </>
    )
}

export default MainPage