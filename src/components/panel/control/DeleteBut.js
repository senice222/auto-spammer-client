import { useDispatch } from "react-redux"
import { OPEN_WINDOW } from "../../../reducers/types"
import {notification} from "antd";

const DeleteBut = () => {
    const dispatch = useDispatch()
    const deleteHundler = () => {
        dispatch({type: OPEN_WINDOW, payload: "delete_number"})
    }

    return  <div className="delete_but" onClick={deleteHundler}>Удалить аккаунт</div>
}

export default DeleteBut