import { Player } from './Player.interface';

export interface Question {
	qId: string;
	category: string;
	difficulty: string;
	question: string;
	type: string;
	incorrect_answers: string[];
	correct_answer: string;
	options: string[];
	timer: number;
	player: Player;
	modifiers: {
		timed: boolean;
	};
}
