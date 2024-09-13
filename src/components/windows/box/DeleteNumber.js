import { useDispatch, useSelector } from "react-redux"
import { CLOSE_WINDOW, DELETE_FROM_NUMBER_LIST, DELETE_NUMBER } from "../../../reducers/types"
import DeleteNumberQuery from "../../queries/DeleteNumberQuery"
import UpdateData from "../../handlers/UpdateData"
import { notification } from "antd"

const DeleteNumber = () => {
    const dispatch = useDispatch()
    const number_data = useSelector(n => n.app.number_data)
    const user_data = useSelector(n => n.app.user_data)

    const deleteNumberHandler = async () => {
        await DeleteNumberQuery(user_data.id, localStorage.getItem('current_tab'), number_data.number).then(data => {
            localStorage.removeItem("current_tab")
            dispatch({ type: DELETE_FROM_NUMBER_LIST, payload: number_data.id })
            dispatch({ type: DELETE_NUMBER })
            UpdateData(user_data, dispatch)
        })
        notification.success({
            message: 'Вы успешно удалили номер телефона.',
            duration: 2.5,
            style: {
                fontFamily: "Montserrat-Medium",
            }
        });
        dispatch({ type: CLOSE_WINDOW })
    }
    return <div className="window_content delete_window">
        <span>Вы действительно хотите удалить номер?</span>
        <div className="delete_but" onClick={() => deleteNumberHandler()}>Удалить</div>
    </div>
}

export default DeleteNumber