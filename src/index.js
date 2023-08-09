import React from 'react';
import ReactDOM from 'react-dom/client';
import 'boxicons/css/boxicons.min.css';
import ContextProvider from './components/context/todo-context'

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ContextProvider>
        <App />
    </ContextProvider>


);