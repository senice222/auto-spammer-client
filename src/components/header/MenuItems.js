import {Link} from "react-router-dom"
import {useTheme} from "../../hooks/useTheme";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const MenuItems = ({setSwitchMenu, switchMenu}) => {
    const {theme, setTheme} = useTheme()


    const handleTheme = () => {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }
    return <div className='w-menu'>
        <Link className='item' onClick={() => setSwitchMenu(false)} to={'/'}>Главная</Link>
        <Link className='item' onClick={() => setSwitchMenu(false)} to={'/news'}>Новости</Link>
        <Link className='item' onClick={() => setSwitchMenu(false)} to={'/contacts'}>Контакты</Link>
        <Link className='item' onClick={() => setSwitchMenu(false)} to={'/help'}>Помощь</Link>
    </div>
}

export default MenuItems