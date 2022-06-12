import styled from 'styled-components';

export const Container = styled.section`
	width: 100vw;
	min-height: 900px;
	background: ${({theme}) => theme.colors.background.primary.main};
	color: ${({theme}) => theme.colors.font.primary};
	padding-top: 50px;

	& header {
		width: 80%;
		height: 8vh;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
`;

export const Content = styled.main`
	width: 80%;
	margin: 0 auto;
	margin-top: 4em;

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	grid-gap: 20px;
`;

export const Card = styled.div`
	width: 445px;
	height: 212px;
	padding: 20px;
	border: 1px solid transparent;
	border-image: linear-gradient(
		to right,
		${({theme}) => theme.colors.background.primary.paper},
		${({theme}) => theme.colors.background.primary.main}
	);
  border-image-slice: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& p {
		color: ${({theme}) => theme.colors.font.tertiary};
		font-weight: 400;
	}

	& div {
		display: flex;
		align-items: center;

		& h3 {
			margin-left: 1em;
		}
	}
`;
