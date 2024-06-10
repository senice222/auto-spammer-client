import React from 'react';
import s from './SignModal.module.scss'
import {SignIn, SignUp} from "../sign/Sign";

const SignInModal = ({isOpened, setOpened}) => {
    if (isOpened) {
        return (
            <div onClick={setOpened} className={'window_container'}>
                <div onClick={(e) => e.stopPropagation()} className={'window_block'}>
                    <SignIn setOpened={setOpened}/>
                </div>
            </div>
        );
    }
    return null
};

export default SignInModal;
