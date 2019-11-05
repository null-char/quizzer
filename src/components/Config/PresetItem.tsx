import React, { useState, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uuid from 'uuid/v4';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { PresetEditForm } from './PresetEditForm';
import { setPresetId, addPreset, removePreset } from '../../actions';
import { QuizPreset, RootState } from '../../types';
import {
	Root,
	PresetName,
	IconsContainer,
	IconContainer,
	FaIcon
} from './presetItemStyles';

interface PresetItemProps extends QuizPreset {
	selected: boolean;
}

export const PresetItem: React.FC<PresetItemProps> = props => {
	const dispatch = useDispatch();
	const curPresetId = useSelector((state: RootState) => state.quiz.curPresetId);
	const presets = useSelector((state: RootState) => state.quiz.presets);
	const presetData: QuizPreset = {
		id: props.id,
		presetName: props.presetName,
		questions: props.questions
	};
	const isLastPreset =
		presetData.id === presets[presets.length - 1].id ? true : false;
	const presetIds = presets.map(p => p.id);
	const [formOpen, setFormOpen] = useState(false);

	// bug when deleting preset when only one present

	const handlePresetAdd = (shouldSetId?: boolean): void => {
		const newPreset: QuizPreset = {
			id: uuid(),
			presetName: 'New Preset',
			questions: []
		};
		dispatch(addPreset(newPreset));
		shouldSetId && dispatch(setPresetId(newPreset.id));
	};

	const onPresetClick = (): void => {
		if (!formOpen) {
			if (props.id !== curPresetId) dispatch(setPresetId(props.id));
			// if presetData of the component is last in the array of presets, then add a new blank preset
			if (isLastPreset) handlePresetAdd();
		}
	};

	const enableEditForm = (e: SyntheticEvent): void => {
		e.stopPropagation();
		setFormOpen(true);
	};

	return (
		<Root onClick={onPresetClick} selected={props.selected}>
			{formOpen && (
				<PresetEditForm
					presetId={props.id}
					setFormOpen={setFormOpen}
					initialPresetName={props.presetName}
				/>
			)}
			{!formOpen && (
				<>
					<PresetName>{props.presetName}</PresetName>
					<IconContainer onClick={enableEditForm}>
						<EditIcon icon={faEdit} selected={props.selected} />
					</IconContainer>
				</>
			)}
		</Root>
	);
};
