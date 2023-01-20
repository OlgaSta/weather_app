import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// redux это state 'manager' обработчик для разных библиотек.
// Основы redux очень схожи с React state.
// Как и у useState у redux есть изначалъное состояние и функция для изменения состояния.


const initialState = {
    showSearchBar: false,
    searchParams: {
        lat: 59.4370,
        lon: 24.7536,
        units: 'metric',
        lang: 'en',
        city: 'Tallinn',
    },
    forecastSelectedData: null,
    errorMessage: null,
};

// Функция изменения состояния в redux nazyvaetsq 'Action'
// Action создает объект, в котором есть его тип и object payload, в котором будут хранится новые данные
export const setSearchParams = createAction('setSearchParams');
export const setShowSearchBar = createAction('setShowSearchBar');
export const setForecastSelectedData = createAction('setForecastSelectedData');
export const setErrorMessage = createAction('setErrorMessage');

// reducer используется для определения, что будет делать Action;
// Мы создаем функции с названием Action'а и в которых описываем что произойдет
// В нашем случае мы меняем состояние.
// 
const reducer = createReducer(initialState, {
    [setSearchParams]: (iState, action) => {
        iState.searchParams = action.payload;
    },
    [setShowSearchBar]: (iState, action) => {
        iState.showSearchBar = action.payload;
    },
    [setForecastSelectedData]: (iState, action) => {
        iState.forecastSelectedData = action.payload;
    },
    [setErrorMessage]: (iState, action) => {
        iState.errorMessage = action.payload;
    },
});
// store это облако, где хранится вся информация о сосотоянии
export const store = configureStore({ reducer }); 

