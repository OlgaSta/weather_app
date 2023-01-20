import Container from 'react-bootstrap/Container';
import Body from './Body';
import Header from './Header';
import ErrorModal from './ErrorModal';

// Компонент в react это функция, которая возвращает реакт элемент, используя JSX
// JSX это новый синтаксис от React, который позволяет писать html i js udobnej/vmeste
// Компонент должен возвращать только 1 react элемент
// Все названия комонентов в реакт всегда должны называтъся с заглавной буквы, это для того чтобы различать html от компонентов.
//

function App() {
  return (
    <Container>
      <Header />
      <Body />
      <ErrorModal />
    </Container>
   
  );
}

export default App;
