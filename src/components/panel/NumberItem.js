import { useSelector } from 'react-redux'
import Blocks from './blocks/Blocks'
import NumberInfo from './number_info/NumberInfo'
import Expiration from './Expiration'
import ControlBlock from './control/ControlBlock'

const NumberItem = () => {

    const number_data = useSelector(s => s.app.number_data)
    console.log(number_data)

    return <div className='number_item'>
        <NumberInfo />
        {/* <Expiration time_sub={number_data.time_sub}/> */}
        <ControlBlock sub={number_data.time_sub} status={number_data.status} phone={number_data.number}/>
        <Blocks number_data={number_data} />
    </div>
}

export default NumberItem