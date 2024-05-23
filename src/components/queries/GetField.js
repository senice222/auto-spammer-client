const GetField = async(field, id_user, id_phone) => {
        let response = await fetch('https://vm-c6638fea.na4u.ru/get_phone', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "id": id_user,
                "id_phone": id_phone,
                "fields": [field]
    
            })
        })
            .then((response) => response.json())
        return response.result
}

export default GetField