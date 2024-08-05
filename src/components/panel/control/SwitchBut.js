import {useDispatch, useSelector} from "react-redux"
import {OPEN_WINDOW, TOGGLE_BOT} from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import axios from "axios";
import $api from "../../queries/core/axios";
import BuySubscription from "../../queries/BuySubscription";
import {notification} from "antd";

const SwitchBut = ({status, phone}) => {
    const dispatch = useDispatch()
    const number_data = useSelector(s => s.app.number_data)
    const sub = number_data.sub_active

    const getColor = () => {
        return {backgroundColor: !status ? "#5B9872" : "#985B72"}
    }
    const getStatus = () => {
        if (user_data.balance < 50) {
            return "Оплатить";
        }
        return sub ? (status ? "Остановить" : "Запустить") : "Оплатить";
    };
    const user_data = useSelector(p => p.app.user_data)

    const toggleHandler = async () => {
        if (getStatus() === "Оплатить") {
            if (user_data.balance >= 50) {
                return BuySubscription(user_data.id, phone)
            } else {
                dispatch({type: OPEN_WINDOW, payload: "subscription"})
            }
        }
        if (sub) {
            try {
                const {data} = await $api.put('/update_mailing', {
                    id: number_data.id,
                    phone: number_data.number,
                    status: !number_data.status,
                    mode: !number_data.answerphone ? 'mailing' : 'autorespond'
                });
                if (data) {
                    dispatch({ type: TOGGLE_BOT });
                }
            } catch (error) {
                console.error('Error updating mailing or autoresponder:', error);
                notification.error({
                    message: error.response.data.error,
                    duration: 2,
                    style: {
                        fontFamily: "Montserrat-Medium",
                    }
                })
            }
        } else {
            const {data} = await $api.put('/buy_subscription', {id: user_data.id, phone})
            console.log(data)
        }
    }

    return <div
        className='switch_but'
        style={getColor()}
        onClick={toggleHandler}>{getStatus()}</div>
}

export default SwitchBut