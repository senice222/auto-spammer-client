import $api from "../queries/core/axios";

const SignHandler = async (username, password, api_link) => {
    const fd = new FormData();
    fd.append('username', username);
    fd.append('password', password);

    try {
        const {data} = await $api.post(`${api_link}`, fd, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        if (data.result) {
            const { id, balance } = data.result;
            localStorage.setItem('refresh', data.refresh_token)
            localStorage.setItem('token', data.access_token)
            return [true, { id, balance, username, password }];
        } else {
            return [false, "Неверный логин или пароль"];
        }
    } catch (error) {
        console.error("Ошибка при выполнении запроса:", error);
        return [false, "Произошла ошибка при выполнении запроса"];
    }
};

export default SignHandler