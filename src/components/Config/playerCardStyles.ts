import styled, { css } from 'styled-components';

interface RootProps {
	active: boolean;
}

export const Root = styled.div<RootProps>`
	cursor: pointer;
	width: 20.6rem;
	height: 26.3rem;
	background-image: linear-gradient(
		120deg,
		${props => props.theme.colors.teal},
		${props => props.theme.colors.amethyst}
	);
	${props =>
		props.active
			? css`
					background-size: 200%;
					box-shadow: 0rem 0.3rem 0.6rem rgba(var(--amethyst-rgb-color), 0.25);
			  `
			: css`
					background-size: 5000%;
					box-shadow: 0rem 0.3rem 0.6rem rgba(var(--teal-rgb-color), 0.25);
			  `}
	border-radius: 1rem;
	transition-property: background-size, box-shadow, transform;
	transition-duration: 0.7s, 0.7s, 0.3s;
	transition-timing-function: ease-in-out;

	:hover {
		transform: translateY(-3px);
	}

	:active {
		transform: translateY(0px);
	}

	display: flex;
	align-items: center;
	justify-content: center;
	color: ${props => props.theme.colors.secondary};
`;

export const PlayerName = styled.span`
	font-size: 2.5rem;
	letter-spacing: 0.8rem;
	font-weight: 300;
	text-transform: uppercase;
`;
