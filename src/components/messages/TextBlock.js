import { useDispatch } from "react-redux"
import { CHANGE_MESSAGE_TEXT } from "../../reducers/types"

const TextBlock = ({ m, edit_mod }) => {
    const dispatch = useDispatch()
    const changeText = (e) => dispatch({
        type: CHANGE_MESSAGE_TEXT,
        payload: [m.id, e]
    })
    //
    return edit_mod === m.id
        ? <div className={"svgDiv"}>
            <textarea
                className="textBlockk"
                style={{ padding: "10px 10px" }}
                value={m.text}
                onChange={(e) => changeText(e.target.value)} />
        </div>
        : <div className={"svgDiv"} style={{display: "flex"}}>
           
            <div className="text_block">
                <p>{m.text || "Пусто"}</p>
            </div>
            <svg className="svgg" width="9" height="20" ><defs><filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="messageAppendix"><feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset><feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur><feColorMatrix values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0" in="shadowBlurOuter1"></feColorMatrix></filter></defs><g fill="none" fill-rule="evenodd"><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#000" filter="url(#messageAppendix)"></path><path d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z" fill="#EEFFDE" class="corner"></path></g></svg>
        </div>
}

export default TextBlock