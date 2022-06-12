import styled from 'styled-components';

export const Container = styled.section`
	width: 100vw;
	min-height: 900px;
	background: ${({theme}) => theme.colors.background.primary.main};
	color: ${({theme}) => theme.colors.font.primary};
`;

export const Header = styled.header`
	width: 80%;
	min-height: 70px;
	margin: 0 auto;
	border-radius: 0 0 8px 8px;
	background: ${({theme}) => theme.colors.background.primary.paper};
	position: sticky;
	top: 0;

	display: flex;
`;

export const Menu = styled.nav`
	width: 100%;
	min-height: 70px;
	height: 100%;
	padding: 25px 0;

	display: flex;

	& ul {
		width: 100%;
		list-style: none;
		display: flex;
		justify-content: space-around;
		align-items: center;

		& li {
			padding: 5px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 2px;
			width: 10%;

			& a {
				text-decoration: none;
				cursor: pointer;
				background: transparent;
				color: ${({theme}) => theme.colors.font.tertiary};
				transition: color 0.2s ease-in;

				&:hover {
					color: ${({theme}) => theme.colors.font.primary};
				}
			}
		}
	}

	& div {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 4%;
		margin-right: 30px;
	}
`;

export const Content = styled.main`
	width: 80%;
	height: 100%;
	padding: 8%;

	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	& div {
		width: 350px;
		height: 350px;
		border-radius: 50%;
	}
`;

export const DescriptionArea = styled.section`
	max-width: 400px;
	min-height: 250px;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	& h1 {
		font-family: 'Raleway', sans-serif;
	}

	& p {
		color: ${({theme}) => theme.colors.font.tertiary};
	}
`;

export const WorkedArea = styled.footer`
	width: 80%;
	min-height: 60px;
	margin: 0 auto;

	& ul {
		overflow-x: auto;
		width: 100%;
		height: 100%;

		list-style-type: none;

		display: flex;
		justify-content: space-around;
		align-items: center;

		& li {
			display: flex;
			align-items: center;
			justify-content: center;

			width: 19%;
			border: 0.2px solid ${({theme}) => theme.colors.background.primary.paper};
			cursor: default;
			color: ${({theme}) => theme.colors.font.tertiary};
			padding: 10px;

			& h3 {
				opacity: 0.3;
				margin-left: 10px;
			}
		}
	}
`;
