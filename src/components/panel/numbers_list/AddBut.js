import {useDispatch, useSelector} from "react-redux"
import GetIcon from "../../../assets/GetIcon"
import { OPEN_WINDOW } from "../../../reducers/types"

const AddBut = () => {
    const dispatch = useDispatch()
    const openAdder = () => dispatch({ type: OPEN_WINDOW, payload: "add_account" })
    const topUp = () => dispatch({ type: OPEN_WINDOW, payload: 'payment' })
    const user = useSelector(s => s.app.user_data)
    const isEnough = user.balance <= 50 ? topUp : openAdder

    return <div className='numbers_list_tab open_but' onClick={() => isEnough()}>
        <GetIcon icon="add" color='#fff' />
    </div>
}
export default AddBut