import $api from "./core/axios";

const BuySubscription = async (id, phone) => {
    try {
        const {data} = await $api.put(`/buy_subscription`, {
            id, phone
        });
        return data.result;
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
    }
};

export default BuySubscription;
