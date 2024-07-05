import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {CHANGE_MESSAGE_TEXT} from "../../reducers/types";


const TextBlock = ({m, edit_mod, setEditMod}) => {
    const dispatch = useDispatch()
    const textareaRef = useRef(null)
    const [value, setValue] = useState(m.text)
    const maxChars = 1000
    const [heights, setHeights] = useState(() => {
        const savedHeights = localStorage.getItem('textareaHeights');
        return savedHeights ? JSON.parse(savedHeights) : {}
    })

    useEffect(() => {
        if (edit_mod === m.id) {
            const storedHeight = heights[m.id]
            if (storedHeight && textareaRef.current) {
                textareaRef.current.style.height = `${storedHeight}px`
            } else {
                adjustTextareaHeight();
            }
        }
    }, [edit_mod])

    useEffect(() => {
        adjustTextareaHeight()
    }, [value])

    const editModHandler = async (e) => {
        e.stopPropagation()
        setEditMod(m.id)
    }
    const changeText = (e) => {
        e.stopPropagation()
        const newValue = e.target.value
        setValue(newValue)
        dispatch({
            type: CHANGE_MESSAGE_TEXT,
            payload: [m.id, newValue],
        })
    }

    const isMobile = () => {
        return window.matchMedia("(max-width: 768px)").matches;
    };

    const handleKeyDown = (e) => {
        e.stopPropagation();
        const text = e.target.value;

        if (text.length >= maxChars && e.key !== 'Backspace') {
            e.preventDefault();
        }
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '150px';
            textareaRef.current.style.overflowY = 'auto';
        }
    };

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '150px';
            textareaRef.current.style.overflowY = 'auto';
        }
    }, [edit_mod]);


    return (
        edit_mod === m.id ? (
            <div className={"svgDiv"} onClick={(e) => e.stopPropagation()}>
                <textarea
                    className="textBlockk"
                    value={value}
                    ref={textareaRef}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    onChange={changeText}
                />
            </div>
            ) :
            <div onClick={(e) => editModHandler(e)} className={"svgDiv"} style={{display: "flex"}}>
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