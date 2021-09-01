import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* Start of fonts */
@font-face {
  font-family: 'Spartan';
  src: url('/fonts/Spartan-Medium.woff2');
  font-style: normal;
  font-weight: 500;
  font-display: swap;
}

@font-face {
  font-family: 'Spartan';
  src: url('/fonts/Spartan-Bold.woff2');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
/* End of fonts */

html,
body {
  font-family: Spartan, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

body {
  font-size: 0.75rem;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
  display: block;
  object-fit: cover;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

input {
  margin: 0;
}
`;
