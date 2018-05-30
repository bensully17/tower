import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore'

const store = configureStore()
const app = (
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)

ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));
registerServiceWorker();
