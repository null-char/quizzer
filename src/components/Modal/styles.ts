import styled from 'styled-components';
import { animated } from 'react-spring';

interface ContentProps {
	width: number | undefined;
	height: number | undefined;
}

export const Root = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	z-index: 100;
	width: 100vw;
`;

export const Background = styled.div<{ open: boolean }>`
	background-image: linear-gradient(
		rgba(0, 0, 0, 0.4) 0%,
		rgba(0, 0, 0, 0.4) 100%
	);
	opacity: ${props => (props.open ? 1 : 0)};
	height: 100%;
	width: 100%;
	z-index: ${props => (props.open ? 101 : -100)};
	position: absolute;
	top: 0;
	left: 0;
	transition: all 0.3s;
`;

export const Content = styled(animated.div)<ContentProps>`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 200;
	background-color: ${props => props.theme.colors.secondary};
	width: ${props => (props.width ? `${props.width}rem` : '68.3rem')};
	height: ${props => (props.height ? `${props.height}rem` : '53.7rem')};
	padding: 2rem;
	border-radius: 20px;
`;
