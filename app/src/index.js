import React from 'react';
import ReactDOM from 'react-dom';
import '~/config/i18n';
import App from './App';

import 'dotenv/config';

import './reset.css';

ReactDOM.render(<App />, global.document.getElementById('root'));
