import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'providers/global-styles';
import HelloWorld from 'containers/hello-world';

import theme from 'theme';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Fragment>
                <GlobalStyles />
                <HelloWorld />
            </Fragment>
        </ThemeProvider>
    );
};
