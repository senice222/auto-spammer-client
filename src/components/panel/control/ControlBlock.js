import SpamBlock from "./SpamBlock"
import SwitchBut from "./SwitchBut"
import DeleteBut from "./DeleteBut"

const ControlBlock = ({status, sub, phone}) => {
    return <div className='control_block'>
        {/*<SpamBlock />*/}
        <SwitchBut status={status} phone={phone}/>
        <DeleteBut />
    </div>
}

export default ControlBlock