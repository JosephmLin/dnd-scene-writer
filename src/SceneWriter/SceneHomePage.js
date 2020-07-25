import SceneLevel from './SceneLevel';
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './SceneHomePage.css';
import React from 'react';
import sceneHomePageHOC, { storePropKey } from './hoc/sceneHomePageHOC';
import { addIndex, map, pipe, nth, prop } from 'ramda';

const mapIndex = addIndex(map);

function SceneHomePage({ [ storePropKey ]: SCENESET, addNewScene, addSceneLevelDispatch, removeScene, removeSceneLevelDispatch }) {
	const addSceneLevel = sceneLevel => () => {
		const newSceneId = `scene - ${uuidv4()}`;
		// This creates a relationship between scene level and scene
		addSceneLevelDispatch({
			id: newSceneId,
			index: 0,
			sceneLevel
		});

		// Base definition of a scene
		addNewScene({
			id: newSceneId
		})
	};

	const removeSceneLevel = index => {
		const idsOnSceneLevel = pipe(
			nth(index),
			prop('scenes')
		)(SCENESET);
		return () => {
			removeSceneLevelDispatch({
				index
			});
			map(
				removeScene,
				idsOnSceneLevel
			);
		}
	}

	const generateSceneLevels = (scenesOnLevel, sceneLevel) => (<SceneLevel key={scenesOnLevel.id} scenes={scenesOnLevel.scenes} removeLevel={removeSceneLevel(sceneLevel)} />);

	return <div className="SceneHomePage">
		<Button className="SceneHomePage-Button" onClick={addSceneLevel(SCENESET.length)}>Add New Scene Level</Button>
		{mapIndex(generateSceneLevels, SCENESET)}
		{/* The above code should be rendering each Scene Level */}
	</div>
}

export default sceneHomePageHOC(SceneHomePage);
