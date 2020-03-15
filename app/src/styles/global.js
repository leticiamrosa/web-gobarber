import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

`;
