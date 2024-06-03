import { Link } from "react-router-dom"
import GetIcon from "../../assets/GetIcon"
import '../../styles/Contacts.scss'

const ContactsPage = () => {

    return <div >
        <p className="page_heading">Контакты</p>
        <div className="contacts_container">
            <div className="intro_block">
                <div className="text_content">
                    <h1>Мы на связи</h1>
                    <p>Готовы ответить на любые ваши вопросы!</p>
                </div>
            </div>
            <div className="contacts_block">
                <p className="heading">Служба поддержки</p>
                <p className="content">Время работы службы поддержки:
                    <p>Пн-Пт: 09:00 — 18:00</p>
                </p>
                <div className="social_networks">
                    <Link to={'mailto:None@gmail.com'}><GetIcon icon={'mail'} />None@gmail.com</Link>
                    <Link to={'https://t.me/None'}><GetIcon icon={'tg'} />@None</Link>
                    <Link to={'https://t.me/None'}><GetIcon icon={'tg'} />@None</Link>
                    <Link to={'https://t.me/None'}><GetIcon icon={'tg'} />@None</Link>
                </div>
            </div>
        </div>
    </div>
}

export default ContactsPage
