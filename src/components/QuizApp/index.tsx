import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../types';
// import uuid from 'uuid/v4';
import { fetchQuestionsThunk } from '../../actions';
// import he from 'he';
import { Root, Title, SubText, Left, Right, Button } from './styles';
import { Link } from 'react-router-dom';
import { startQuiz } from '../../actions';

export const QuizApp: React.FC = () => {
	const dispatch = useDispatch();

	// fetch questions on user entering landing page
	useEffect(() => {
		fetchQuestionsThunk(dispatch);
	}, [dispatch]);

	const onButtonClick = (): void => {
		dispatch(startQuiz());
	};

	return (
		<Root>
			<Left>
				<Title>Trivia Quiz</Title>
				<SubText>An app for designing and participating in quizzes</SubText>
			</Left>

			<Right>
				<Link to="/start/q/0">
					<Button primary onClick={onButtonClick}>
						Start
					</Button>
				</Link>
				<Button>Rules</Button>
				<Button>About </Button>
			</Right>
		</Root>
	);
};