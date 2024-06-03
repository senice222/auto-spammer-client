import logo from './../../assets/img/bot.svg'
import {useNavigate} from "react-router-dom";

const LogoBlock = () => {
    const navigate = useNavigate()

    return <div className='logo-block' onClick={() => navigate('/')}>
        <img src={logo} style={{ width: 30 }} alt='' />
        <h3 className='logo'>TGSPAM</h3>
    </div>
}

export default LogoBlock