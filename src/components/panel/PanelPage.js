import UserInfo from './UserInfo'
import NumberItem from './NumberItem'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import NumbersList from './numbers_list/NumbersList'
import Loading from '../../assets/Loading'
import { OPEN_WINDOW, SET_PHONES } from '../../reducers/types'
import UpdateData from '../handlers/UpdateData'
import GetPhones from '../queries/GetPhones'
import GetFirstPhone from '../queries/GetFirstPhone'

const PanelPage = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(true)
    const user_data = useSelector(n => n.app.user_data)
    const id = localStorage.getItem("id")
    const openAdder = () => dispatch({ type: OPEN_WINDOW, payload: "add_account" })
    const [numbers, setNumbers] = useState()

    useEffect(() => {
        try {
            const getNumbers = async () => {
                try {
                    const result = await GetPhones(id);
                    const phonesData = result?.phones_data;
                    if (phonesData && phonesData.length > 0) {
                        const transformedData = phonesData.map(item => ({
                            id: item.id_phone,
                            phone: item.phone
                        }));
                        dispatch({type: SET_PHONES, transformedData});
                        setNumbers(result.phones_data);
                    } else {
                        console.error('Phones data not found or empty:', result);
                    }
                } catch (error) {
                    console.error('Error fetching phones:', error);
                }
            };
            getNumbers();
        } catch (e) {
            console.log(e);
        }
    }, [])

    useEffect(() => window.scrollTo(0, 0), [location])

    useEffect(() => {
        const token = localStorage.getItem("refresh")
        if (token) {
            UpdateData(user_data, dispatch).then(async data => data !== false && setLoading(false))
        } else {
            navigate("/signup")
        }

    }, [navigate, dispatch, user_data])

    return isLoading
        ? <Loading />
        : <div className="panel_container">
            <h1 className="panel_title">Панель управления</h1>
            <UserInfo nickname={"@" + user_data.username} balance={user_data.balance} />
            {numbers
                ? <div className='numbers'>
                    <h3>Подключенные номера</h3>
                    <NumbersList numbers={numbers} current_number_id={numbers[0].id_phone} />
                    <NumberItem />
                </div>
                : <div className='no_numbers'>
                    <p className='no_numbers_text'>Подключенных номеров пока что нет</p>
                    <div className='add_number_but' onClick={openAdder}>Добавить номер</div>
                </div>}
        </div>
}

export default PanelPage