import AddBut from "./AddBut"
import ListBut from "./ListBut"
import NumberTab from "./NumberTab"

const NumbersList = ({ current_number_id, numbers }) => {

    return numbers && (
        <>
            <div className='numbers_list'>
                {numbers.slice(0, 5).map(n => <NumberTab key={n.id_phone} current_number_id={current_number_id} id={n.id_phone} number={n.phone}/>)}
            </div>
            <div className='numbers_list' style={{marginTop: "20px"}}>
                {numbers.length > 3 && <ListBut />}
                <AddBut />
            </div>
        </>
    )
}

export default NumbersList