import { useState, useEffect } from 'react';
import Map from './Map';
import { getWeather } from '../../services/apiService';
import Data from './Data';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setErrorMessage } from '../../services/stateService';

function Now() {

    const [weatherData, setWeatherData] = useState(null);
    const searchParams = useSelector((state) => state.searchParams);
    const dispatch = useDispatch();

    useEffect(() => {
        (async function () {
            try {
                // Запросы на сервер и при удачном раскладе возвращают Response object.
                // этот object хранит в себе статус и многое другое
                // также хранит данные в буфере
                const response = await getWeather(searchParams);

                //json() функция берет этот буфер и превращает его в js объект.
                const data = await response.json();


                if (data.cod !== 200)
                    throw Error(data.message);

                setWeatherData(data);
            } catch (error) {
                console.log(error);
                dispatch(setErrorMessage(error.message));
            }

        })()
    }, [dispatch, searchParams]);

    return (
        <>
            <Data data={weatherData} />
            <Map weatherData={weatherData} />

        </>
    );
}

export default Now;