import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('https://pixabay.com/get/ga422798759695152ac8558ab0816077586c9c0eaaf6d4bc03017241b039e7635fadeda65d9f066b59303c95553094765d3ca549485f5bbcda0740648e21961b7_1280.jpg') 0 0 / cover no-repeat;
  background-attachment: fixed;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
}
`;
