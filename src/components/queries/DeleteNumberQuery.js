import $api from "./core/axios";

const DeleteNumberQuery = async (id, id_number, number) => {
    try {
        const reqBody = {
            id,
            id_phone: id_number,
            phone: number,
        }

        const { data } = await $api.delete('delete_phone', reqBody);

        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        throw error;
    }
};

export default DeleteNumberQuery