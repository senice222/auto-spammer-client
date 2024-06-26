import $api from "./core/axios";

const UpdateMailing = async (id, phone, status, mode) => {
    const body = {
        id,
        phone,
        status,
        mode
    }

    try {
        const { data } = await $api.put('update_mailing', body);

        console.log(data);
        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error;
    }
};

export default UpdateMailing