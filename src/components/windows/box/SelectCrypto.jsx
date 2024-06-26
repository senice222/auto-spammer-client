import React from 'react';
import style from "../../../styles/PaymentModal.module.scss";
import usdt from '../../../assets/img/usdt.png'
import ton from '../../../assets/img/ton_symbol.png'
import btc from '../../../assets/img/btc.png'
import ltc from '../../../assets/img/litecoin-ltc-logo.png'
import etc from '../../../assets/img/eth.png'
import bnb from '../../../assets/img/bnb.png'
import trx from '../../../assets/img/tron-trx-logo.png'
import usdc from '../../../assets/img/usd.png'
const SelectCrypto = ({setCrypto, setStep}) => {

    const handleNextClick = (crypto) => {
        setStep((prev) => prev + 1);
        setCrypto(crypto);
    };

    return (
        <div className="window_content payment_window">
            <span>Выберите криптовалюту</span>
            <div className={style.methods}>
                <div className={style.item1}>
                    <button className="next" onClick={() => handleNextClick("USDT")}>USDT <img src={usdt} alt={"coin"}/></button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("TON")}>TON <img src={ton} alt={"coin"}/></button>
                </div>
                <div className={style.item1}>
                    <button className="next" onClick={() => handleNextClick("BTC")}>BTC <img src={btc} alt={"coin"}/></button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("LTC")}>LTC <img src={ltc} alt={"coin"}/></button>
                </div>
                <div className={style.item1}>
                    <button className="next" onClick={() => handleNextClick("ETH")}>ETH <img src={etc} alt={"coin"}/></button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("BNB")}>BNB <img src={bnb} alt={"coin"}/></button>
                </div>
                <div className={style.item1}>
                    <button className="next" onClick={() => handleNextClick("TRX")}>TRX <img src={trx} alt={"coin"}/></button>
                    <button className="chooseCrypto" onClick={() => handleNextClick("USDC")}>USDC <img src={usdc} alt={"coin"}/></button>
                </div>
            </div>
        </div>
    );
};

export default SelectCrypto;
