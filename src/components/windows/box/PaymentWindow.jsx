import style from '../../../styles/PaymentModal.module.scss'
import {PayOkSVG, Telegram} from "./Svgs";

const PaymentWindow = ({setStep, setType}) => {

    return (
        <div className="window_content payment_window">
            <span>Выберите удобный способ оплаты</span>
            <div className={`${style.methods} methods1`}>
                <div onClick={() => {
                    setType("Cryptobot")
                    setStep(1)
                }} className={style.item}>
                    <p>Payok</p>
                    <PayOkSVG />
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