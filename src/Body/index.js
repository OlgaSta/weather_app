import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import './body.scss';
import SearchBar from './SearchBar';
import Forecast from './Tabs/Forecast';
import Now from './Tabs/Now';
import { useDispatch } from 'react-redux';
import { setShowSearchBar } from '../services/stateService';




function Body() {


    const dispatch = useDispatch();

    // обработчик евента это просто функция которая принимает как аргумент объект события
    // и принято называть обрабочики со словом 'handle'.
    // в event object передается элемент с оторым произошло событие, хранится оно в свойстве 'target'
    
    const handleShowBar = () => dispatch(setShowSearchBar(true));

    // preventDefault это функция которая отключает действие события, которое у него  по умолчанию
    // Пример: действие у onSubmit по умолчанию отправка данных на сервер через GET method.

    

    return (
        <>
            <Button className = "mb-4" variant="primary" onClick={handleShowBar}>
                Search
            </Button>

            <SearchBar />

            <Tabs
                defaultActiveKey="now"
                id="justify-tab-example"
                className="mb-3"
                justify
            >
                <Tab eventKey="now" title="Now">
                    <Now />
                </Tab>
                <Tab eventKey="Forecast" title="Forecast">
                   <Forecast />
                </Tab>
                
            </Tabs>
        </>
    );
}


export default Body;