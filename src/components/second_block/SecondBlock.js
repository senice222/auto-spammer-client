import React from 'react';
import style from '../../styles/SecondBlock.module.scss'
import magic from '../../assets/img/magic.png'
import edit from '../../assets/img/editing.png'
import doc from '../../assets/img/document.png'
import click from '../../assets/img/click.png'
import { motion } from 'framer-motion'


const SecondBlock = () => {
    return (
        <div className={style.secondBlock}>
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
                className={style.topItem}>
                <motion.h3
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
                >Создавайте контент для Telegram с помощью TGSPAM</motion.h3>
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
                >Доверьте создание контента для Reddid Postmypost AI. Искусственный интеллект предложит идеи для
                    публикаций, которые могут быть адаптированы под вашу аудиторию на этой платформе, напишет тексты для
                    постов и многое другое. С помощью Postmypost AI вы можете быстро и легко создавать интересный и
                    оригинальный контент, который привлечет внимание пользователей Reddid.</motion.p>
            </motion.div>
            <div className={style.listOfItems}>
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
                    className={style.item}>
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
                        className={style.iconDiv}>
                        <img src={magic} alt="/" />
                    </motion.div>
                    <motion.h3
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
                    >Пишите быстрее</motion.h3>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1.25 }, ease: "easeIn", duration: 1.25 }}
                    >Используйте возможности нейросети, чтобы генерировать идеи на любые темы.</motion.p>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1,
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
                    className={style.item}>
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
                        className={style.iconDiv}>
                        <img src={edit} alt="/" />
                    </motion.div>
                    <motion.h3
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
                    >Состовляйте контент-план</motion.h3>
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
                    >Генерируйте потрясающий контент с помощью нейросети, способной выполнять это быстро и с высоким качеством.</motion.p>
                </motion.div>
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
                    className={style.item}>
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
                        className={style.iconDiv}>
                        <img src={doc} alt="/" />
                    </motion.div>
                    <motion.h3
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
                    >Формируйте стратегию</motion.h3>
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
                    >Получите потрясающий результат с помощью нейросети, которая предложит вам рабочие идеи для вашего бизнеса.</motion.p>
                </motion.div>
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
                    className={style.item}>
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
                        className={style.iconDiv}>
                        <img src={click} alt="/" />
                    </motion.div>
                    <motion.h3
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
                    >Генерируйте идеи</motion.h3>
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
                    >Формируйте стратегию. Воспользуйтесь всеми преимуществами нейросети, чтобы разработать готовую стратегию развития вашего бизнеса в социальных сетях.</motion.p>
                </motion.div>
            </div>
        </div>
    );
};

export default SecondBlock;
