import $api from "./core/axios";

const GetUser = async (id) => {
    try {
        const { data } = await $api.post('get_user', {
            id
        });

        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error;
    }
};

export default GetUser