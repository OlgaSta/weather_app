import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// Zdes my berem object DOM (document), v kotorom vsjq struktura nashego index.html. Iz nego
// vybiraem element div, u kotorogo id = root i oborachivaem ego v ReactDOM

// ReactDOM sozdaet virtual'nyj DOM na servere i v nego renderit ili otrisovyvaet vse, 
// chto naxoditsja v nashem React prilozhenii

// Render, t.e. otrisovka - eto procedura perehosa s React komponenta v 4istyj js i html.

// Provider komponent - eto vspmogatel'nyj komponent ot react-redux dlja raboty s redux state

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store = {store}>
    <App />
    </Provider>
);

