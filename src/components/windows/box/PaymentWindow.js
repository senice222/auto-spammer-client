const PaymentWindow = () => {
    const imgs = [
        require("../../../assets/img/pay1.png"), 
        require("../../../assets/img/pay2.png"),
        require("../../../assets/img/pay3.png"),
        require("../../../assets/img/pay4.png"),
        require("../../../assets/img/pay5.png"),
        require("../../../assets/img/pay6.png"),
    ]
    return <div className="window_content payment_window">
        <span>Выберите удобный способ оплаты</span>
        <div className="methods">
            {imgs.map((img, i) => <div key={i}><img src={img} alt=""/></div>)}
        </div>
    </div>
}

export default PaymentWindow