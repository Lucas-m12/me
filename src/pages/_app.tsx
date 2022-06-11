import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { lightTheme } from 'styles/themes/light';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={lightTheme}>
				<Component {...pageProps} />

			</ThemeProvider>
		</>
	);
}

export default MyApp;
