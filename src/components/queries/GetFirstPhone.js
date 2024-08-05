import $api from "./core/axios";

const GetFirstPhone = async (id_user, id_phone) => {
    try {
        if (id_phone) {
            const { data } = await $api.get(`get_phone?id=${id_user}&id_phone=${id_phone}`);
            // console.log(data.result)
            return data.length !== 0 ? {
                    id: data.result.id,
                    number: data.result.phone_data.phone,
                    time_sub: data.result.phone_data.sub_date,
                    sub_active: data.result.phone_data.sub_active,
                    status: data.result.phone_data.status_work,
                    type_mailing: data.result.phone_data.type_spam,
                    interval: data.result.phone_data.interval_messages,
                    answerphone: data.result.phone_data.autoresponder,
                    mention: data.result.phone_data.mention,
                    random_interval: data.result.phone_data.interval_random_bool,
                    random_messages: data.result.phone_data.message_random_bool,
                    autodebit: data.result.phone_data.auto_pay,
                    messages: [
                        { id: 1, text: data.result.phone_data.message || '' },
                        { id: 2, text: data.result.phone_data.message_two || '' },
                        { id: 3, text: data.result.phone_data.message_three || '' },
                        { id: 4, text: data.result.phone_data.message_four || '' },
                    ],
                    last_time_message: data.result.phone_data.last_start_date,
                    quantity_send: data.result.phone_data.count_last_message,
                    text_autoresponder: data.result.phone_data.text_autoresponder || '',
                    range_interval: JSON.parse(data.result.phone_data.interval_random_int)
                }
                : false
        }
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error;
    }
}

export default GetFirstPhone