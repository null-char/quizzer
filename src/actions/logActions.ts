import { createStandardAction } from 'typesafe-actions';
import { Question, LOG_USER_CHOICE } from '../types';

interface logUserChoicePayload extends Question {
	qNum: number;
	userChoice: string;
	calculatedScore: number;
}

export const logUserChoice = createStandardAction(LOG_USER_CHOICE)<
	logUserChoicePayload
>();
