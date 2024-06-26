import React, {useState} from 'react';
import style from "../../../styles/PaymentModal.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {CLOSE_WINDOW} from "../../../reducers/types";
import axios from "axios";
import $api from "../../queries/core/axios";

const EnterAmount = ({type, setAmount, setStep}) => {
    const [value, setValue] = useState("")
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const user_data = useSelector(p => p.app.user_data)

    const handleInputChange = (e) => {
        const inputValue = e.target.value;

        if (/^\d*$/.test(inputValue)) {
            setValue(inputValue);
        }
    };

    const handleNextClick = async () => {
        const amount = +value;
        console.log(type);

        if (type === "Payok") {
            if (amount < 100) {
                setError("Минимальная сумма для Payok — 100");
            } else {
                setError("");
                setAmount(amount);
                setStep(3);
                const {data} = await $api.post('/add_balance_aaio', {id: user_data.id, amount: amount})
                if (data?.result) {
                    window.location.replace(data.result)
                } else {
                    setError(data?.error)
                }
            }
        } else {
            setError("");
            setAmount(amount);
            console.log(1)
            setStep(3);
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
