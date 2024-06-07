import React from 'react';
import style from '../../styles/FourthBlock.module.scss'
import {motion} from 'framer-motion'

const FourthBlock = () => {
    return (
        <div className={style.instrumentsDiv}>
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
            >Инструменты для разных задач</motion.h1>
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
            >TGSPAM предлагает инструменты для рассылки ваших услуг.</motion.h3>
            <div className={style.list}>
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
                    <h3>Автопостинг</h3>
                    <p>Позволяет публиковать посты по расписанию во все социальные сети, экономя ваше время.</p>
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
                    <h3>Мониторинг</h3>
                    <p>Дает возможность увеличивать продажи и быстро реагировать на комментарии пользователей в социальных сетях.</p>
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
                    <h3>Аналитика</h3>
                    <p>Предоставляет подробную аналитику постов, что помогает оптимизировать ваш контент и увеличить вовлеченность аудитории.</p>
                </motion.div>
            </div>
        </div>
    );
};

export default FourthBlock;
