import React from 'react';
import s from './SignModal.module.scss'
import {SignUp} from "../sign/Sign";

const SignModal = ({isOpened, setOpened}) => {
    if (isOpened) {
        return (
            <div onClick={setOpened} className={'window_container'}>
                <div onClick={(e) => e.stopPropagation()} className={'window_block'}>
                   <SignUp setOpened={setOpened}/>
                </div>
            </div>
        );
    }
    return null
};

export default SignModal;
