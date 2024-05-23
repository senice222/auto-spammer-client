import { Link } from "react-router-dom"

const MenuItems = ({setSwitchMenu, switchMenu}) => {
    return <div className='w-menu'>
        <Link className='item' onClick={() => setSwitchMenu(!switchMenu)} to={'/'}>Главная</Link>
        <Link className='item' onClick={() => setSwitchMenu(!switchMenu)} to={'/news'}>Новости</Link>
        <Link className='item' onClick={() => setSwitchMenu(!switchMenu)} to={'/contacts'}>Контакты</Link>
        <Link className='item' onClick={() => setSwitchMenu(!switchMenu)} to={'/help'}>Помощь</Link>
    </div>
}

export default MenuItems