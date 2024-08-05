import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import tg_icon from '../../assets/img/tg_icon.svg'
import { useEffect, useState } from "react"
import SignHandler from "./SignHandler"
import { useDispatch } from "react-redux"
import { CLOSE_WINDOW, LOGIN } from "../../reducers/types"
import Loading from "../../assets/Loading"
import exit_icon from '../../assets/img/exit.svg'

const Sign = (isLogin, setOpen, setType) => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [textError, setTextError] = useState()
    const [loading, setLoading] = useState(true)

    const content = {
        title: isLogin ? "Вход" : "Добро пожаловать!",
        subtitle: isLogin ? "Вход в панель" : "Пройдите регистрацию, чтобы начать работать",
        but: isLogin ? "Войти" : "Зарегистрироваться",
        api_link: isLogin ? 'login' : 'registration'
    }
    useEffect(() => {
        console.log(localStorage.getItem('password'))
    }, [])

    const regHundler = () => {
        setTextError()
        if (username.trim() !== '' && password.trim() !== '') {
            if (username.length >= 3 && username.length <= 18) {
                if (password.length >= 8 && password.length <= 30) {
                    SignHandler(username, password, content.api_link).then((data) => {
                        if (data[0]) {
                            setOpen()
                            console.log(data)
                            dispatch({ type: LOGIN, payload: data[1] })
                            localStorage.setItem("id", data[1].id)
                            localStorage.setItem("balance", data[1].balance)
                            localStorage.setItem("username", data[1].username)
                            localStorage.setItem("password", data[1].password)
                            navigate('/panel')
                        } else setTextError(data[1])
                    })
                } else setTextError("Длина пароля должна быть от 8 до 30 символов")
            } else setTextError("Длина логина должна быть от 3 до 18 символов")
        } else setTextError("Не заполнено поле логин и (или) пароль")
    }


    useEffect(() => {
        setLoading(true)
        setLoading(false)
    }, [location, navigate])

    return loading
        ? <Loading />
        : (
            <div className="window_container">
                <div className="background" onClick={() => setOpen(false)}></div>
                <div className="window_blockl">
                    <div className="window_block_header">
                        <h4></h4>
                        <img src={exit_icon} onClick={() => setOpen(false)} alt='/' />
                    </div>
                    <div className='spliter'></div>
                    <div className="sign_container">
                        <div className="sign_block">
                            <h2 className="title_style">{content.title}</h2>
                            <h5 className="title_style">{content.subtitle}</h5>
                            <label htmlFor="login">Логин</label><input id="login" value={username} placeholder="Введите логин"
                                onChange={async (e) => setUsername(e.target.value)} />
                            <label htmlFor="password">Пароль</label><input id="password" value={password} type="password"
                                placeholder="Введите пароль"
                                onChange={(e) => setPassword(e.target.value)} />
                            {isLogin ? <p className={"noAccount"}>Нет аккаунта? <span onClick={() => setType(false)}>Зарегистрироваться</span></p> : (
                                <div>
                                    <p className={"regText"}>Нажимая «Зарегистрироваться», вы принимаете <a onClick={() => {
                                        navigate("/privacy-policy")
                                        setOpen(false)
                                    }}>Политику
                                        конфиденциальности</a> и <a onClick={() => {
                                            navigate("/agreement-policy")
                                            setOpen(false)
                                        }}>Пользовательское соглашение</a></p>
                                    <p className={"alreadyAcc"}>Уже зарегестрированы? <span onClick={() => setType(true)}>Войти</span></p>
                                </div>
                            )}
                            <div className="control_block">
                                {/*{isLogin && <Link className={"linkkReg"} to={'/signup'}>Если у вас нет аккаунта, то зарегестрируйтесь</Link>}*/}
                                {textError && <p className="error">{textError}</p>}
                                <div className="sign_but" onClick={() => regHundler()}>{content.but}</div>
                                <div className="sign_but_tg"><img src={tg_icon} alt="" />Войти через Telegram</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export const SignUp = ({ setOpened }) => {
    const [isSignUp, setIsSignUp] = useState(false)
    return (
        Sign(isSignUp, setOpened, setIsSignUp)
    )
}
export const SignIn = ({ setOpened }) => {
    const [isSignIn, setIsSignIn] = useState(true)

    return (
        Sign(isSignIn, setOpened, setIsSignIn)
    )
}