import {useSelector} from "react-redux"
import ChangeFields from "../queries/ChangeFields";
import {notification} from "antd";
import '../../styles/styles.scss'

const TitleBlock = ({edit_mod, setEditMod, index, m}) => {
    const getTitle = () => {
        switch (m.id) {
            case 1:
                return 'message'
            case 2:
                return 'message_two'
            case 3:
                return 'message_three'
            case 4:
                return 'message_four'
            default:
                break
        }
    }
    
    const number_data = useSelector(s => s.app.number_data)
    // const number_data = useSelector(s => s.app.number_data)
    const user_data = useSelector(n => n.app.user_data)

    const editModHandler = async () => {
        if (edit_mod) {
            if (edit_mod === m.id) {
                await ChangeFields(getTitle(), m.text, number_data.number, user_data.id)
                notification.success({
                    message: 'Вы успешно изменили сообщение.',
                    duration: 2,
                    style: {
                        fontFamily: "Montserrat-Medium",
                    }
                });
                setEditMod(false)
            } else setEditMod(m.id)
        } else setEditMod(m.id)
    }

    const getTextBut = () => edit_mod === m.id ? "Сохранить" : "Изменить"

    return (
        <div className="title_block">
            <h3>Сообщение #{index}</h3>
            {getTextBut() === "Сохранить" && <div className="change_but" onClick={editModHandler}>
                {getTextBut()}
            </div>}
        </div>
    )
}

export default TitleBlock