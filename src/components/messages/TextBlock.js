import React, {useState, useRef, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {CHANGE_MESSAGE_TEXT} from "../../reducers/types";

const TextBlock = ({m, edit_mod}) => {
    const dispatch = useDispatch();
    const textareaRef = useRef(null);
    const [value, setValue] = useState(m.text);
    const [heights, setHeights] = useState(() => {
        // Retrieve initial heights from localStorage or set an empty object
        const savedHeights = localStorage.getItem('textareaHeights');
        return savedHeights ? JSON.parse(savedHeights) : {};
    });

    useEffect(() => {
        // Adjust the height based on the stored height or adjust it based on the current content
        if (edit_mod === m.id) {
            const storedHeight = heights[m.id];
            if (storedHeight && textareaRef.current) {
                textareaRef.current.style.height = `${storedHeight}px`;
            } else {
                adjustTextareaHeight();
            }
        }
    }, [edit_mod]);

    useEffect(() => {
        adjustTextareaHeight();
    }, [value]);

    const changeText = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        dispatch({
            type: CHANGE_MESSAGE_TEXT,
            payload: [m.id, newValue],
        });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && e.shiftKey) {
            e.preventDefault(); // Prevents the default behavior of adding a new line
            setValue((prev) => prev + '\n');
        }
    };

    const adjustTextareaHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto';
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;

            // Save the height to state and localStorage
            setHeights((prevHeights) => {
                const newHeights = {...prevHeights, [m.id]: textareaRef.current.scrollHeight};
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
            style={{padding: "10px 10px"}}
            value={value}
            ref={textareaRef}
            onKeyDown={handleKeyDown}
            rows={1}
            onChange={changeText}
        />
                </div>
            ) :
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