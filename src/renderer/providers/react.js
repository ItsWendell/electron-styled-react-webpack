import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';

import AppContainer from 'containers/app';

const App = hot(module)(AppContainer);

render(
    <App />,
    document.getElementById('app')
);