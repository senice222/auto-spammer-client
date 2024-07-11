import { useSelector } from 'react-redux'
import Blocks from './blocks/Blocks'
import NumberInfo from './number_info/NumberInfo'
import Expiration from './Expiration'
import ControlBlock from './control/ControlBlock'

const NumberItem = () => {
    const state = useSelector(s => s.app)

    return <div className='number_item'>
        <NumberInfo />
        {/* <Expiration time_sub={number_data.time_sub}/> */}
        <ControlBlock sub={state.number_data.time_sub} status={state.number_data.status} phone={state.number_data.number}/>
        <Blocks number_data={state.number_data} />
    </div>
}

export default NumberItem