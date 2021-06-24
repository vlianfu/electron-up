import React from 'react';
import * as ReactDOM from 'react-dom';

import AppRoute from '@con/app-route';

const container = document.getElementById('root');
// @ts-ignore
const root = ReactDOM.createRoot(container);

root.render(<AppRoute />);
