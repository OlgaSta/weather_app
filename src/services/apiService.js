const apiUrl = 'https://api.openweathermap.org/data/2.5';

// process это глобальный объект, в котором хранится информация о сервере.
// свойство .env хранит в себе все переменные нашей среды
// переменные мы храним в файле '.env'
// переменные мы называем со словом 'REACT_APP_' для того, чтобы react их в себя подтянулс
const apiKey = process.env.REACT_APP_API_KEY;

export const defaultSearchParams = {
    lat: 58.5953,
    lon: 25.0136,
    units: 'metric',
    lang: 'en',
};
// для запросов на сервер используются асинхронные функции.
// Они предназначены для работы с Promise (обещяниями)
// запрос 'fetch' возвращает Promise со статусом 'pending'.
// благодаря ключевому слову 'await' мы говорим нашему серверу, что мы ожидаем ответ.
// Посл получения ответа с сервера, Promise получает статус либо 'fullfied' либо 'rejected'
// что означает либо все хорошо либо прозошла ошибка.
// обработка статусов происходит в try{}  catch();
// 'await' может исполъзоваться только в функциej асинхронной 'async' и только с Promose

export async function getWeather(data = null) {
    
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });

    return await fetch(`${apiUrl}/weather?${params}`);
}

export async function getForecast(data = null){
    const params = new URLSearchParams({
        ...(data || defaultSearchParams),
        appid: apiKey,
    });


    return await fetch(`${apiUrl}/forecast?${params}`);
}

