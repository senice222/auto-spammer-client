import React from 'react';
import style from "../../../styles/PaymentModal.module.scss";

const SelectCrypto = ({setCrypto, setStep}) => {

    const handleNextClick = (crypto) => {
        setStep((prev) => prev + 1);
        setCrypto(crypto);
    };

    return (
        <div className="window_content payment_window">
            <span>Выберите криптовалюту</span>
            <div className={style.methods}>
                <div>
                    <button className="next" onClick={() => handleNextClick("USDT")}>USDT</button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("TON")}>TON</button>
                </div>
                <div>
                    <button className="next" onClick={() => handleNextClick("BTC")}>BTC</button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("LTC")}>LTC</button>
                </div>
                <div>
                    <button className="next" onClick={() => handleNextClick("ETH")}>ETH</button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("BNB")}>BNB</button>
                </div>
                <div>
                    <button className="next" onClick={() => handleNextClick("TRX")}>TRX</button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("USDC")}>USDC</button>
                </div>
            </div>
        </div>
    );
};

export default SelectCrypto;
