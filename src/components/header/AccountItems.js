import { Link, useNavigate } from "react-router-dom"
import { LOGOUT } from "../../reducers/types"
import { useDispatch } from "react-redux"
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import {useTheme} from "../../hooks/useTheme";
import $api from "../queries/core/axios";

const AccountItems = ({user_data, setSwitchMenu, switchMenu, signIn, signUp}) => {
    const {theme, setTheme} = useTheme()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const token = localStorage.getItem("refresh")
    const username = localStorage.getItem("username")

    const logoutHandler = async () => {
        setSwitchMenu(!switchMenu);

        const refreshToken = localStorage.getItem('refresh');
        try {
            const response = await $api.delete(`/logout`, { refresh_token: refreshToken });

            if (response.status === 200) {
                localStorage.clear();
                dispatch({ type: LOGOUT });
                navigate('/');
            } else {
                console.error('Logout failed');
            }
        } catch (error) {
            console.error('An error occurred while logging out:', error);
        }
    };

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