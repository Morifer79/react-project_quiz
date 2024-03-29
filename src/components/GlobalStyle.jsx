import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import { theme } from './theme';

export const GlobalStyle = createGlobalStyle`
  html {
		box-sizing: border-box;
		inline-size: 100vw;
		overflow-x: hidden;
	}

  body {
    min-block-size: 100vh;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.dark};
    background: linear-gradient(80deg, ${theme.colors.bottle}, ${theme.colors.sunny}) no-repeat;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
		text-decoration: none;
		color: inherit;
	}

  img{
    display: block;
    min-inline-size: 100%;
    object-fit: cover;
  }

  button {
    cursor: pointer;
		font-family: inherit;
		padding: 0;
		margin: 0;
	}
`;
