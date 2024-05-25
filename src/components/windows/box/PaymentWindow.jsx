import style from '../../../styles/PaymentModal.module.scss'

const PaymentWindow = ({setStep, setType}) => {

    return (
        <div className="window_content payment_window">
            <span>Выберите удобный способ оплаты</span>
            <div className={style.methods}>
                <p onClick={() => {
                    setType("Payok")
                    setStep(1)
                }}>Payok</p>
                <p onClick={() => {
                    setType("Cryptobot")
                    setStep(1)
                }}>Cryptobot</p>
            </div>
        </div>
    )
}

export default PaymentWindow