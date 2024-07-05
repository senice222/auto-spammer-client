import { useDispatch, useSelector } from "react-redux"
import { CLOSE_WINDOW, SELECT_NUMBER_FROM_LIST, SET_NUMBER_DATA } from "../../../reducers/types"
import GetFirstPhone from "../../queries/GetFirstPhone"

const ListNumbers = () => {
    
    const number_list = useSelector(w => w.app.number_list)
    const user_data = useSelector(w => w.app.user_data)
    const dispatch = useDispatch()

    const selectNumber = (id, number) => {
        GetFirstPhone(user_data.id, id).then(data => dispatch({type: SET_NUMBER_DATA, payload: data}))
        dispatch({type: SELECT_NUMBER_FROM_LIST, payload: {id, number}})
        dispatch({type: CLOSE_WINDOW})
    }
    console.log(number_list)
    return <div style={{height: '500px'}} className="window_content">
        {number_list.map(n => <p key={n.id} onClick={() => selectNumber(n.id, n.number)}>{n.number}</p>)}
        </div>
}

export default ListNumbers