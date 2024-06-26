import $api from "./core/axios";

const GetPhones = async (id) => {
    try {
        const {data} = await $api.get(`/get_phones?id=${id}`);
        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
    }
};

export default GetPhones;
