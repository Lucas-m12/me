import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		font-family: 'IBM Plex Mono', monospace;
	}

	input, button {
		outline: 0;
	}

	button {
		cursor: pointer;
		border: 0;
	}
`
