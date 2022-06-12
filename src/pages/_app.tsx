import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'styles/GlobalStyles';
import { defaultTheme } from 'styles/themes/default';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
		<>
			<GlobalStyles />
			<ThemeProvider theme={defaultTheme}>
				<Component {...pageProps} />

			</ThemeProvider>
		</>
	);
}

export default MyApp;
