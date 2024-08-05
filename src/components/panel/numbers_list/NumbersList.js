import AddBut from "./AddBut"
import ListBut from "./ListBut"
import NumberTab from "./NumberTab"
import {useState} from "react";

const NumbersList = ({ current_number_id, numbers }) => {
    const [updatedNumbers, setUpdatedNumbers] = useState(numbers)

    const addNewNumber = (newNumber) => {
        setUpdatedNumbers([newNumber, ...updatedNumbers])
    }

    return updatedNumbers && (
        <>
            <div className='numbers_list'>
                {updatedNumbers.slice(0, 5).map(n => (
                    <NumberTab key={n.id_phone} current_number_id={current_number_id} id={n.id_phone} number={n.phone} />
                ))}
            </div>
            <div className='numbers_list' style={{ marginTop: "20px" }}>
                {updatedNumbers.length > 3 && <ListBut />}
                <AddBut addNewNumber={addNewNumber} />
            </div>
        </>
    )
}

export default NumbersList