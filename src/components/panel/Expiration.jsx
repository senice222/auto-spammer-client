import time_icon from '../../assets/img/time_icon.svg'
import moment from 'moment'
import { OPEN_WINDOW } from '../../reducers/types'
import { useDispatch } from 'react-redux'

const Expiration = ({ time_sub }) => {
    const dispatch = useDispatch()

    const getTimeSub = (return_sec) => {
        const seconds = moment().diff(moment(time_sub, "ddd, DD MMM YYYY hh:mm:ss Z").add(24, 'h'), 's')
        const hour = Math.abs(seconds / 60 / 60)
        const minute = ((hour - Math.floor(hour)) * 60)
        
        return return_sec
            ? seconds
            : Math.floor(hour) + "ч. " + Math.floor(minute) + "мин. "
    }

    return <div className='expiration'>
        <p className='ex_title'>Подписка</p>
        {getTimeSub(true) < 0
            ? <div className='time_param'>
                <img src={time_icon} alt='' />
                <p>{getTimeSub()}</p>
            </div>
            : <div className='pay_but' onClick={() => dispatch({type: OPEN_WINDOW, payload: 'subscription'})}>Оплатить подписку</div>
        }
    </div>
}

export default Expiration