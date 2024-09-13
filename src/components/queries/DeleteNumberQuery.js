import $api from "./core/axios";
import axios from "axios";

const DeleteNumberQuery = async (id, id_number, number) => {
    // try {
    //
    //     const reqBody = {
    //         id,
    //         id_phone: id_number,
    //         phone: number,
    //     }
    //     console.log(reqBody)
    //     const { data } = await axios.delete('https://vm-c6638fea.na4u.ru/delete_phone', reqBody);
    //
    //     return data.result;
    // } catch (error) {
    //     console.error("Ошибка при выполнении запроса:", error);
    //     throw error;
    // }
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "id": id,
        "id_phone": id_number,
        "phone": number
    });

    const requestOptions = {
        method: "DELETE",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    try {
        const response = await fetch("https://vm-c6638fea.na4u.ru/delete_phone", requestOptions);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
};

export default DeleteNumberQuery