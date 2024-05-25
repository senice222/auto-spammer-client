import s from '../../styles/HelpPage.module.scss'

const HelpPage = () => {

    return <div>
            <p className="page_heading">Как начать использование?</p>
            <div className={'info_block'}>
                 <div className={'number'}>1</div>
                 <div className={'text'}>
                    <h2>Зарегистрируйтесь</h2>
                    <p>Для начала вам нужно создать аккаунт, нажав на кнопку регистрация. Там введите свой логин и придумайте пароль.</p>
                 </div>
            </div>
            <div className={'info_block'}>
                 <div className={'number'}>2</div>
                 <div className={'text'}>
                    <h2>Добавте номер телефона</h2>
                    <p>Затем вам нужно добавить свой номер телефона. Чтобы это сделать зайдите на страницу панели и нажмите кнопку добавить номер. Далее следуйте инструкциям в модальном окне.</p>
                 </div>
            </div>
            <div className={'info_block'}>
                 <div className={'number'}>3</div>
                 <div className={'text'}>
                    <h2>Оплатите подписку</h2>
                    <p>Чтобы пользоваться услугами сайта вам нужно оплатить подписку. Для этого в панели выберите оплатить подписку, далее следуйте инструкциям в открывшемся окне.</p>
                 </div>
            </div>
            <div className={'info_block'}>
                 <div className={'number'}>4</div>
                 <div className={'text'}>
                    <h2>Запустите рассылку</h2>
                    <p>Для начала подберите все параметры под себя и нажав на кнопку запустите рассылку.</p>
                 </div>
            </div>
            <hr />
    </div>
}

export default HelpPage