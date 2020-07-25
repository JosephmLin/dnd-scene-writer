import React from 'react';
import { map } from 'ramda';
import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';

function SceneLevel(props) {
	const generateSceneCard = scene => (<SceneCard key={scene} />)
	return (
		<>
			{map(generateSceneCard, props.scenes)}
			<Button onClick={props.removeLevel}>Delete Scene Level</Button>
		</>
	)
}

export default SceneLevel;