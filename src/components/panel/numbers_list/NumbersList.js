import AddBut from "./AddBut"
import ListBut from "./ListBut"
import NumberTab from "./NumberTab"
import {useState, useEffect} from "react";
import {useSelector} from "react-redux";



const NumbersList = ({ numbers }) => {
    const [updatedNumbers, setUpdatedNumbers] = useState(numbers);
    const [displayedNumbers, setDisplayedNumbers] = useState([]);
    const current_number_id = useSelector(s => s.app.number_data).number
    const addNewNumber = (newNumber) => {
        setUpdatedNumbers([newNumber, ...updatedNumbers]);
    }
    console.log(numbers)
    console.log(current_number_id, 22211)
    useEffect(() => {
        const currentIndex = updatedNumbers.findIndex(n => n.phone === current_number_id);
        let start = Math.max(0, currentIndex - 2);
        let end = start + 5;

        if (end > updatedNumbers.length) {
            end = updatedNumbers.length;
            start = Math.max(0, end - 5);
        }

        setDisplayedNumbers(updatedNumbers.slice(start, end));
    }, [current_number_id, updatedNumbers]);

    return updatedNumbers && (
        <>
            <div className='numbers_list'>
                {displayedNumbers.map(n => (
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

export default NumbersList;