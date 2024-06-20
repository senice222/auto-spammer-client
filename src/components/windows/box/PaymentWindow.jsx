import style from '../../../styles/PaymentModal.module.scss'
import {AaioSVG, Telegram} from "./Svgs";

const PaymentWindow = ({setStep, setType}) => {

    return (
        <div className="window_content payment_window">
            <span>Выберите удобный способ оплаты</span>
            <div className={`${style.methods} methods1`}>
                <div onClick={() => {
                    setType("Payok")
                    setStep(1)
                }} className={style.item}>
                    <p>Aaio</p>
                    <AaioSVG />
                </div>
                <div onClick={() => {
                    setType("Cryptobot")
                    setStep(1)
                }} className={style.item}>
                    <p>Cryptobot</p>
                    <Telegram />
                </div>
            </div>
        </div>
    )
}

export default PaymentWindow