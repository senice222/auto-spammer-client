import { Link, useNavigate } from "react-router-dom"
import { LOGOUT } from "../../reducers/types"
import { useDispatch } from "react-redux"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useTheme} from "../../hooks/useTheme";

const AccountItems = ({user_data, setSwitchMenu, switchMenu, signIn, signUp}) => {
    const {theme, setTheme} = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem("refresh")
    const username = localStorage.getItem("username")

    const logoutHandler = () => {
        setSwitchMenu(!switchMenu)
        localStorage.clear()
        // navigate('/signin')
        dispatch({ type: LOGOUT })
    }

    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    return <div className="account_items">
        {token
            ? <div className='account'>
                {
                    theme === 'light' ?
                        <LightModeIcon style={{cursor: "pointer"}} fontSize={"large"} onClick={() => handleTheme()}/>
                        :
                        <DarkModeIcon style={{cursor: "pointer", color: "white"}} fontSize={"large"} onClick={() => handleTheme()} />
                }
                <p>@{username}</p>
                <Link className='logout_but' onClick={() => setSwitchMenu(!switchMenu)} to={"/panel"}>Панель</Link>
                <div className='logout_but' onClick={logoutHandler}>Выйти</div>
            </div>
            : <div className='w-sign ffffff'>
                {
                    theme === 'light' ?
                        <LightModeIcon style={{cursor: "pointer"}} fontSize={"large"} onClick={() => handleTheme()}/>
                        :
                        <DarkModeIcon style={{cursor: "pointer", color: "white"}} fontSize={"large"} onClick={() => handleTheme()} />
                }
                <div className='item signin' onClick={() => {
                    setSwitchMenu(!switchMenu)
                    signIn()
                }}>Войти</div>
                <div className='item signup' onClick={() => {
                    setSwitchMenu(!switchMenu)
                    signUp()
                }}>Регистрация</div>
            </div>}
    </div>
}

export default AccountItems