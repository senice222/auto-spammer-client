import { useDispatch, useSelector } from "react-redux"
import { CLOSE_WINDOW, OPEN_WINDOW } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import moment from "moment"

const SubscriptionWindow = () => {
    const dispatch = useDispatch()
    const user_data = useSelector(a => a.app.user_data)
    const number_data = useSelector(a => a.app.number_data)
    const paymentHandler = () => {
        
        if(user_data.balance >= 50){
            //изменить balance у USER
            ChangeFields("sub_date", moment().format("YYYY-MM-DD hh:mm:ss"), number_data.number)
            .then(data => {
                dispatch({type: CLOSE_WINDOW})
                data && dispatch({type: OPEN_WINDOW, payload: "subscription_success"})
            })
        }else{
            dispatch({type: CLOSE_WINDOW})
            dispatch({type: OPEN_WINDOW, payload: "nomoney"})
        }
        
    }

    return <div className="window_content sub_window">
        <span>Вы действительно хотите оплатить подписку на 24 часа (50₽)?</span>
        <div className="but_next" onClick={paymentHandler}>Да, оплатить</div>
    </div>
}

export default SubscriptionWindow