import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userData from './testData.json'

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
