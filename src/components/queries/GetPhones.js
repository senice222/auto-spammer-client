import $api from "./core/axios";

const GetPhones = async (id) => {
    try {
        const {data} = await $api.post(`/get_phones`, {
            id,
            fields: ["id_phone", "phone"]
        });
        console.log(data)
        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
    }
};

export default GetPhones;
