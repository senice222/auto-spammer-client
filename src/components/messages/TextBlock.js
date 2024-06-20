import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {CHANGE_MESSAGE_TEXT} from "../../reducers/types";


const TextBlock = ({m, edit_mod, setEditMod}) => {
    const dispatch = useDispatch()
    const textareaRef = useRef(null)
    const [value, setValue] = useState(m.text)
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

    const editModHandler = async () => {
        setEditMod(m.id)
        console.log(m)
    }
    const changeText = (e) => {
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
        const maxLines = isMobile() ? 5 : 7;
        const maxCols = 50;

        const text = e.target.value;
        const lines = text.split("\n");
        const currentLine = text.substr(0, e.target.selectionStart).split("\n").length;

        if (e.key === 'Enter' && !e.shiftKey) {
            if (lines.length >= maxLines) {
                e.preventDefault();
            }
        } else {
            if (lines[currentLine - 1].length >= maxCols) {
                if (lines.length <= maxLines - 1) {
                    setValue((prev) => prev + '\n');
                } else {
                    e.preventDefault();
                }
            }
        }
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            setHeights((prevHeights) => {
                const newHeights = { ...prevHeights, [m.id]: textareaRef.current.scrollHeight };
                localStorage.setItem('textareaHeights', JSON.stringify(newHeights));
                return newHeights;
            });
        }
    };

    return (
        edit_mod === m.id ? (
            <div className={"svgDiv"}>
                <textarea
                    className="textBlockk"
                    style={{ padding: "10px 10px" }}
                    value={value}
                    ref={textareaRef}
                    onKeyDown={handleKeyDown}
                    rows={1}
                    onChange={changeText}
                />
            </div>
            ) :
            <div onClick={editModHandler} className={"svgDiv"} style={{display: "flex"}}>
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