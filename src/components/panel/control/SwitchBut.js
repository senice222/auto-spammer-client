import { useDispatch, useSelector } from "react-redux"
import { TOGGLE_BOT } from "../../../reducers/types"
import ChangeFields from "../../queries/ChangeFields"

const SwitchBut = ({status}) => {
    const dispatch = useDispatch()
    const number_data = useSelector(s => s.app.number_data)
    const getColor = () => {return { backgroundColor: !status ? "#5B9872" : "#985B72" }}
    const getStatus = () => status ? "Остановать" : "Запустить"

    const toggleHandler = () => {
        ChangeFields("status_work", +!number_data.status, number_data.number)
        .then(data => data && dispatch({type: TOGGLE_BOT}))
    }
    
    return <div 
    className='switch_but' 
    style={getColor()} 
    onClick={toggleHandler}>{getStatus()}</div>
}

export default SwitchBut