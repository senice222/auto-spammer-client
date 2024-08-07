import { SET_NUMBER_DATA, SET_PHONES } from "../../reducers/types"
import GetFirstPhone from "../queries/GetFirstPhone"
import GetPhones from "../queries/GetPhones"

const UpdateData = async (user_data, dispatch) => {

    const getIdPhone = (phones) => {
        const current_tab = localStorage.getItem('current_tab')
        return current_tab
            ? phones.find(p => String(p.id) === String(current_tab)).id
            : phones[0].id
    }

    if (user_data.id !== undefined) {
        await GetPhones(user_data.id).then(async (data) => {
            const phones = data.phones_data !== undefined
                ? data.phones_data.map(p => ({ id: p.id_phone, number: p.phone, region: p.country_code, sub_active: p.sub_active }))
                : [];
            dispatch({ type: SET_PHONES, payload: phones })
            return await GetFirstPhone(user_data.id,
                phones.id
                    ? phones.id
                    : phones.length
                        ? getIdPhone(phones)
                        : null)
                .then(async data => await dispatch({ type: SET_NUMBER_DATA, payload: data }))
        })
    } else return false
}

export default UpdateData