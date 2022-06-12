import styled, { css } from "styled-components";

type Size = "small" | "medium" | "large";
type Varian = "success" | "warning" | "danger" | "info";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	size?: Size;
	variant?: "success" | "secondary";
}

const sizes = {
	large: css`
		width: 100%;
	`,
	medium: css`
		width: 300px;
	`,
	small: css``
};

const colors = {
	success: css`
		background: ${({ theme }) => theme.colors.buttons.success};
		color: ${({ theme }) => theme.colors.font.primary};
	`,
	warning: css``,
	danger: css``,
	info: css``
}

export const Button = styled.button<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	${(props) => sizes[props?.size] || sizes.medium};
	height: 60px;
	${(props) => colors[props?.variant] || colors.info};
	font-size: 16px;
`;
