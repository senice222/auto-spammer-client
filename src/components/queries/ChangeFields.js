import axios from 'axios';
import $api from "./core/axios";

const ChangeFields = async (title, value, number, id) => {
    try {
        const response = await $api.put('/edit_phone', {
            phone: number,
            id: id,
            fields: {
                [title]: value
            }
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error(error);
        // Handle error appropriately
        throw error;
    }
}

export default ChangeFields;