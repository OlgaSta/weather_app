import Offcanvas from 'react-bootstrap/Offcanvas';
import ExportDataForm from './ExportDataForm';
import SearchForm from './SearchForm';
import { useSelector, useDispatch } from 'react-redux';
import { setShowSearchBar } from '../services/stateService';

function SearchBar() {

    // useSelector это react-redux hook для случания состояния redux.
    // при изменении состояния useSelector запускает рендер компонента.

    const showSearchBar = useSelector((state) => state.showSearchBar);

    // useDispatch это react-redux hook для тригера изменения состояния
    // useDispatch сначала надо инициализировать, а потом использовать.
    // useDispatch возвращает функцию dispatcher
    const dispatch = useDispatch();

    // dispatcher'у мы передаем Action с новыми данными
    const handleClose =() => dispatch(setShowSearchBar(false));
    
    return (
        <Offcanvas show={showSearchBar} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Search</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <SearchForm 
                handleCloseBar={handleClose} 
                />
                <ExportDataForm />
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default SearchBar;