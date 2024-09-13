import { useDispatch, useSelector } from "react-redux"
import { SET_NUMBER_DATA } from "../../../reducers/types"
import GetFirstPhone from "../../queries/GetFirstPhone"
import { GetNumber } from "../GetNumber"
import { notification } from "antd";

const NumberTab = ({ id, current_number_id, number }) => {
    const dispatch = useDispatch()
    const user_data = useSelector(u => u.app.user_data)
    const number_data = useSelector(s => s.app.number_data)
    const getClass = () => 'numbers_list_tab' + (number_data.number === number ? ' active_tab' : "")

    const selectNumber = () => GetFirstPhone(user_data.id, id).then(data => {
        localStorage.setItem('current_tab', id)
        // localStorage.setItem('current_number_id', )
        dispatch({ type: SET_NUMBER_DATA, payload: data })
        notification.success({
            message: 'Вы успешно выбрали номер телефона.',
            duration: 4,
            style: {
                fontFamily: "Montserrat-Medium",
            }
        })
    })

    return (
        <div className={getClass()} onClick={selectNumber}>
            <p><GetNumber n={number} /></p>
        </div>
    )
}
export default NumberTab