import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    display: flex;

    align-items: center;
    justify-content: center;

    height: 100%;
    margin: auto;

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
}

h1 {
    font-weight: 400;
    font-size: 32px;
    line-height: 42px;

    span {
        font-weight: 500;
    }
}
`;