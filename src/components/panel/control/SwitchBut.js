import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_BOT } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"
import axios from "axios";

const SwitchBut = ({status, sub, phone}) => {
    const dispatch = useDispatch()
    const number_data = useSelector(s => s.app.number_data)
    const getColor = () => {return { backgroundColor: !status ? "#5B9872" : "#985B72" }}
    const getStatus = () => sub ? status ? "Остановать" : "Запустить" : "Оплатить"
    const user_data = useSelector(p => p.app.user_data)


    const toggleHandler = async () => {
        if (sub) {
            ChangeFields("status_work", +!number_data.status, number_data.number)
                .then(data => data && dispatch({type: TOGGLE_BOT}))
        } else {
            const {data} = await axios.put('https://vm-c6638fea.na4u.ru/buy_subscription', {id: user_data.id, phone, })
            console.log(data)
        }
    }
    
    return <div 
    className='switch_but' 
    style={getColor()} 
    onClick={toggleHandler}>{getStatus()}</div>
}

export default SwitchBut