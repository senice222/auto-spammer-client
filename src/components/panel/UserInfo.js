import { useDispatch, useSelector } from "react-redux";
import GetIcon from "../../assets/GetIcon";
import { OPEN_WINDOW } from "../../reducers/types";
import { useEffect, useState } from "react";

const UserInfo = ({ nickname, balance }) => {
    const dispatch = useDispatch();
    const [new_balance, setNewBalance] = useState(balance);
    const [prevBalance, setPrevBalance] = useState(
        parseInt(localStorage.getItem('prevBalance')) || 0
    );

    useEffect(() => {
        if (balance !== prevBalance) {
            let count = prevBalance;
            const increment = balance > prevBalance ? 1 : -1;
            const counter = setInterval(() => {
                count += increment;
                setNewBalance(count);
                if ((increment === 1 && count >= balance) || (increment === -1 && count <= balance)) {
                    clearInterval(counter);
                    localStorage.setItem('prevBalance', balance);
                    setPrevBalance(balance);
                }
            }, 1000 / Math.abs(balance - prevBalance));
        } else {
            setNewBalance(balance);
        }
    }, [balance, prevBalance]);

    return (
        <div className="userinfo">
            <h2>{nickname}</h2>
            <div className="balance">
                Баланс: {new_balance} ₽
                <div className="balance_but" onClick={() => dispatch({ type: OPEN_WINDOW, payload: 'payment' })}>
                    <GetIcon icon="add" color="#7F91A4" />
                </div>
            </div>
        </div>
    );
};

export default UserInfo;
