import { useDispatch, useSelector } from "react-redux"
import { SET_NUMBER_DATA } from "../../../reducers/types"
import GetFirstPhone from "../../queries/GetFirstPhone"
import { GetNumber } from "../GetNumber"

const NumberTab = ({ id, current_number_id, number }) => {
    const dispatch = useDispatch()
    const user_data = useSelector(u => u.app.user_data)
    const getClass = () => 'numbers_list_tab' + (current_number_id === id ? ' active_tab' : "")
    const selectNumber = () => current_number_id !== id 
    && GetFirstPhone(user_data.id, id).then(data => {
        localStorage.setItem('current_tab', data.id)
        dispatch({ type: SET_NUMBER_DATA, payload: data})
    })

    return <div className={getClass()} onClick={selectNumber}>
        <p><GetNumber n={number}/></p>
    </div>
}

export default NumberTab