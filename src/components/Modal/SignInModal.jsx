import React from 'react';
import s from './SignModal.module.scss'
import {SignIn, SignUp} from "../sign/Sign";

const SignInModal = ({isOpened, setOpened}) => {


    if (isOpened) {
        return (
            <div onClick={setOpened} className={'window_container'}>
                <div onClick={(e) => e.stopPropagation()}>
                    <div className={"crossCloseModal"} onClick={() => setOpened(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                            <defs>
                                <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            ".cls-1{fill:none;stroke:#293A4C;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}"
                                    }}
                                />
                            </defs>
                            <title />
                            <g id="cross">
                                <line className="cls-1" x1={7} x2={25} y1={7} y2={25} />
                                <line className="cls-1" x1={7} x2={25} y1={25} y2={7} />
                            </g>
                        </svg>

                    </div>
                    <SignIn setOpened={setOpened}/>
                </div>
            </div>
        );
    }
    return null
};

export default SignInModal;
