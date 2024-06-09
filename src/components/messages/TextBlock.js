import {useDispatch} from "react-redux"
import {CHANGE_MESSAGE_TEXT} from "../../reducers/types"
import {useEffect, useRef, useState} from "react";

const TextBlock = ({m, edit_mod}) => {
    const dispatch = useDispatch()
    const textareaRef = useRef(null);
    const [value, setValue] = useState('');

    const changeText = (e) => {
        setValue(m.text);
        dispatch({
            type: CHANGE_MESSAGE_TEXT,
            payload: [m.id, e]
        })
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [value]);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            adjustTextareaHeight();
            setValue(prev => prev + '\n');
        }
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
    };

    return (
        edit_mod === m.id ? (
                <div className={"svgDiv"}>
                    <textarea
                        className="textBlockk"
                        style={{padding: "10px 10px"}}
                        value={m.text}
                        ref={textareaRef}
                        onKeyDown={handleKeyDown}
                        rows={1}
                        onChange={(e) => changeText(e.target.value)}
                    />
                </div>
            )
            :
            <div className={"svgDiv"} style={{display: "flex"}}>
                <div className="text_block">
                    <p>{m.text || "Пусто"}</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" className={"svggg"} width="6" height="10" viewBox="0 0 6 10"
                     fill="none">
                    <path
                        d="M0 0C0 3.21429 1.76471 7.67857 5.29412 8.57143C5.29412 8.57143 6 8.57143 6 9.28572C6 10 5.29412 10 5.29412 10L0 10V0Z"
                        fill="#EFFEDD"/>
                </svg>
            </div>
    )
}

export default TextBlock