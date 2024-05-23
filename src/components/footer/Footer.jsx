import s from '../../styles/Footer.module.scss'
import logo from "../../assets/img/bot.svg";
import {Link} from "react-router-dom";
import GetIcon from "../../assets/GetIcon";

export const Footer = () => {
    return (
        <div className={s.footer}>
            <div className={s.logoItems}>
                <img src={logo} alt='' />
                <h3>TGSPAM</h3>
            </div>
            <div className={s.contactsBlock}>
                <div className={s.textB}>
                    <p className="heading">Служба поддержки</p>
                    <p className="content">Время работы службы поддержки:
                        <p>Пн-Пт: 09:00 — 18:00</p>
                    </p>
                </div>
                <div className={s.socialNetworks}>
                    <Link to={'mailto:None@gmail.com'}><GetIcon icon={'mail'} />None@gmail.com</Link>
                    <Link to={'https://t.me/None'}><GetIcon icon={'tg'} />@None</Link>
                    <Link to={'https://t.me/None'}><GetIcon icon={'tg'} />@None</Link>
                </div>
            </div>
        </div>
    )
}