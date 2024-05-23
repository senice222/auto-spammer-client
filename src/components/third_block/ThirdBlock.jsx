import s from '../../styles/ThirdBlock.module.scss'
import {AddUser, Messages, Timer} from "../svgs/Svgs";
import {motion} from 'framer-motion'


export const ThirdBlock = () => {
    return (
        <div className={s.items}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                className={s.divhr}
            />
            <div className={s.item}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.fl3x0V1k}>
                    <h2>Изпользуйте <span>автоответчик</span></h2>
                    <p>Эта функция позволяет автоматически отвечать на входящие сообщения заданным текстом. Установите желаемое сообщение, и бот будет отправлять его в ответ на каждое полученное сообщение. Это удобно для информирования о вашей временной недоступности. Например: "Спасибо за сообщение! В настоящее время я недоступен, отвечу позже."</p>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.img}>
                    <Messages />
                </motion.div>
            </div>
            <div className={s.item}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.img}>
                    <Timer />
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.fl3x0V1k}>
                    <h2>Смена Интервала Сообщений</h2>
                    <p>Вы можете настроить интервал между сообщениями, отправляемыми ботом от вашего аккаунта. Задайте нужный промежуток времени, чтобы бот отправлял сообщения с нужной периодичностью. Это помогает управлять потоком сообщений и избегать блокировок из-за частого отправления, обеспечивая безопасное использование.</p>
                </motion.div>
            </div>
            <div className={s.item}>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.fl3x0V1k}>
                    <h2>Подключайте Сразу Много Номеров</h2>
                    <p>Эта функция позволяет вам подключать и управлять сразу несколькими номерами для отправки сообщений. Используйте множество аккаунтов одновременно, чтобы увеличить охват и эффективность ваших кампаний. Функция удобна для массовых рассылок, экономя ваше время и усилия.</p>
                </motion.div>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2, x: { type: 'spring', stiffness: 60 }, opacity: { duration: 1 }, ease: "easeIn", duration: 1 }}
                    className={s.img}>
                    <AddUser />
                </motion.div>
            </div>
        </div>
    )
}