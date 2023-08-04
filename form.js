exports.handler = function (event, context, callback) {
    if (event.httpMethod !== "POST") {
        return callback(null, {
            statusCode: 405,
            body: "Method Not Allowed",
        });
    }

    const formData = JSON.parse(event.body);
    const name = formData.name;
    const phone = formData.phone;
    const email = formData.email;
    const date = formData.date;

    // Ваша логика обработки данных здесь.

    // В данном примере просто возвращаем успешный статус 200 и сообщение.
    return callback(null, {
        statusCode: 200,
        body: "Данные успешно получены",
    });
};
