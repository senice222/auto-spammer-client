import { useSelector } from "react-redux"
import AddBut from "./AddBut"
import ListBut from "./ListBut"
import NumberTab from "./NumberTab"

const NumbersList = ({ current_number_id }) => {
    const number_list = useSelector(n => n.app.number_list)
    console.log(number_list)
    return number_list && (
        <>
            <div className='numbers_list'>
                {number_list.map(n => <NumberTab key={n.id} current_number_id={current_number_id} id={n.id} number={n.number}/>).slice(0, 3)}
            </div>
            <div className='numbers_list' style={{marginTop: "20px"}}>
                {number_list.length > 3 && <ListBut />}
                <AddBut />
            </div>
        </>
    )
}

export default NumbersList