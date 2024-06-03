import { useDispatch } from "react-redux"
import { OPEN_WINDOW } from "../../../reducers/types"
import {notification} from "antd";

const DeleteBut = () => {
    const dispatch = useDispatch()
    const deleteHundler = () => {
        dispatch({type: OPEN_WINDOW, payload: "delete_number"})
        notification.success({
            message: 'Вы успешно удалили аккаунт.',
            duration: 2,
            style: {
                background: "white",
                fontFamily: "Montserrat-Medium",
            }
        });
    }

    return  <div className="delete_but" onClick={deleteHundler}>Удалить аккаунт</div>
}

export default DeleteBut