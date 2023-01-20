import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setForecastSelectedData } from '../../services/stateService';

// В каждый компонент можно передать properties следующим образом:
// <компонент props1="1" props2={const} />
// Принимаем в компоненте properties kak my prinimaeм argumenty v любой функции, 
// т.е. в сkобках декларируем переменную function Component(props)
// Все переданные properties в компонент собираются в объект.
// Внутри компонента proprties невозможно изменить.

// В каждом компоненте есть свое состояния.
// Сосотояние это внутренние данные компонента
// Для работы с состоянием мы используем rect hook useState.
// В useState мы передаем изначалъное значение состояния. (null)
//  useState hook возвращает массив из двух свойств.
// 1 переменная, которая содержит в себе значеие переданное в useState.
// 2 функция, которая меняет первое значение или состояние
// При запуске изменения состояния компонент перерисовывается и новое значение в состояние передается

// все React hooki начинаются со слова 'use'.
// все изменяющие состояние функции начинаются со слова 'set'.

function HourSelector({ hours }) {
    const [selectedHour, setSelectedHour] = useState(0);
    const dispatch = useDispatch();
    useEffect(() => {
        if (hours.length) {
            dispatch(setForecastSelectedData(hours[0].item));
            setSelectedHour(hours[0].hour);
        }
    }, [hours, dispatch, setSelectedHour]);

    const handleOnChangeHours = (hour, item) => {
        setSelectedHour(hour);
        dispatch(setForecastSelectedData(item));
    };

    return (
        <ButtonGroup className="w-100">
            {hours.map(({ hour, item }, idx) => (
                <ToggleButton
                    key={idx}
                    id={`hour-${idx}`}
                    type="radio"
                    variant="outline-primary"
                    name="hour"
                    value={hour}
                    checked={hour === selectedHour}
                    onChange={() => handleOnChangeHours(hour, item)}
                >
                    {hour}
                </ToggleButton>
            ))}
        </ButtonGroup>
    );
}

export default HourSelector;