import React, {useState} from 'react';
import style from "../../../styles/PaymentModal.module.scss";
import {useDispatch} from "react-redux";
import {CLOSE_WINDOW} from "../../../reducers/types";

const EnterAmount = ({type, setAmount, setStep}) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };

    const handleNextClick = () => {
        const amount = +value;
        console.log(type);

        if (type === "Payok") {
            if (amount < 100) {
                setError("Минимальная сумма для Payok — 100");
            } else {
                setError("");
                setAmount(amount);
                console.log(1)
                setStep(3);
                // dispatch({type: CLOSE_WINDOW})
            }
        } else {
            setError("");
            setAmount(amount);
            console.log(1)
            setStep(3);
            // dispatch({type: CLOSE_WINDOW})
        }
    };

    return (
        <div className="window_content payment_window">
            <span>{type === "Cryptobot" ? "Введите сумму в выбранной криптовалюте" : "Введите количество пополнения "}</span>
            <div className={style.methods}>
                <input
                    value={value}
                    onChange={handleInputChange}
                    className="textBlockk"
                    pattern="\d*"
                    placeholder="Введите сумму"
                />
                {error && <div className={style.error}>{error}</div>}
            </div>
            <button className="next" onClick={handleNextClick}>Дальше</button>
        </div>
    );
};

export default EnterAmount;
