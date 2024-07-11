import {useDispatch, useSelector} from "react-redux"
import {OPEN_WINDOW, TOGGLE_BOT} from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import axios from "axios";
import $api from "../../queries/core/axios";
import BuySubscription from "../../queries/BuySubscription";

const SwitchBut = ({status, sub, phone}) => {
    const dispatch = useDispatch()
    const number_data = useSelector(s => s.app.number_data)

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
            ChangeFields("status_work", +!number_data.status, number_data.number, user_data.id)
                .then(data => data && dispatch({type: TOGGLE_BOT}))
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