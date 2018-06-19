import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import registerServiceWorker from './registerServiceWorker';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
