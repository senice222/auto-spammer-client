import {useSelector} from 'react-redux';
import ErrorPage from './components/ErrorPage';
import Header from './components/header/Header';
import MainPage from './components/main/MainPage';
import PanelPage from './components/panel/PanelPage';
import {SignIn, SignUp} from './components/sign/Sign';
import WindowControl from './components/windows/WindowControl';
import './styles/styles.scss';
import {HashRouter, Route, Routes} from 'react-router-dom'
import MessagesPage from './components/messages/MessagesPage';
import HelpPage from './components/help_page/HelpPage';
import NewsPage from './components/news/NewsPage';
import ContactsPage from './components/contacts/ContactsPage';
import NewsItemPage from './components/news/NewsItemPage';
import {useTheme} from "./hooks/useTheme";
import {useEffect, useState} from "react";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import AgreementPolicy from "./pages/AgreementPolicy/AgreementPolicy";
import SignModal from "./components/Modal/SignModal";
import SignInModal from "./components/Modal/SignInModal";

function App() {
    const status_window = useSelector(w => w.app.window_data.status)
    const { setTheme } = useTheme();
    const [isOpened, setOpened] = useState(false)
    const [SingIsOpened, setSignOpened] = useState(false)

    useEffect(() => {
        if (!localStorage.getItem('app-theme')) {
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(prefersDarkScheme ? 'dark' : 'light');
        }
    }, [setTheme]);

    return (
        <HashRouter>
            <div className="container">
                <SignModal isOpened={isOpened} setOpened={() => setOpened((prev) => !prev)}/>
                <SignInModal isOpened={SingIsOpened} setOpened={() => setSignOpened((prev) => !prev)}/>
                {status_window ? <WindowControl/> : ""}
                <Header signIn={() => setSignOpened((prev) => !prev)} signUp={() => setOpened((prev) => !prev)}/>
                <Routes>
                    <Route path="*" element={<ErrorPage/>}/>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/help" element={<HelpPage/>}/>
                    <Route path="/news/:id" element={<NewsItemPage/>}/>
                    <Route path="/news" element={<NewsPage/>}/>
                    <Route path="/contacts" element={<ContactsPage/>}/>
                    <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
                    <Route path="/agreement-policy" element={<AgreementPolicy/>}/>
                    {/*<Route path="/signup" element={<SignUp/>}/>*/}
                    {/*<Route path="/signin" element={<SignIn/>}/>*/}
                    <Route path="/panel" element={<PanelPage/>}/>
                    <Route path="/panel/messages" element={<MessagesPage/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;
