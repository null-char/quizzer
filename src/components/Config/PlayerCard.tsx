import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { PlayerCardEditForm } from './PlayerCardEditForm';
import { addPlayer, removePlayer } from '../../actions';
import { Player } from '../../types';
import { Root, PlayerName, IconContainer, FaIcon } from './playerCardStyles';

interface PlayerCardProps {
	pNum: number;
	active: boolean;
	playerData: Player | undefined;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
	active,
	pNum,
	playerData
}) => {
	const dispatch = useDispatch();
	const [formOpen, setFormOpen] = useState(false);

	const enableEditForm = (e: React.SyntheticEvent): void => {
		e.stopPropagation();
		setFormOpen(true);
	};

	const onCardClick = (): void => {
		// push new player else if already selected, pop new player off of players array
		!formOpen && playerData
			? dispatch(removePlayer(playerData.id))
			: dispatch(addPlayer({ id: pNum, pName: `Player ${pNum}`, score: 0 }));
	};

	return (
		<Root active={active} onClick={onCardClick}>
			{!formOpen && (
				<>
					{/* Only show the edit icon if the player card is selected */}
					{playerData && (
						<IconContainer onClick={enableEditForm}>
							<FaIcon icon={faEdit} />
						</IconContainer>
					)}
					<PlayerName>
						{playerData ? playerData.pName : `Player ${pNum}`}
					</PlayerName>
				</>
			)}
			{formOpen && (
				<PlayerCardEditForm
					setFormOpen={setFormOpen}
					playerId={pNum}
					initialPlayerName={`Player ${pNum}`}
				/>
			)}
		</Root>
	);
};
