import SceneLevel from './SceneLevel';
import { Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './SceneHomePage.css';
import React from 'react';
import sceneHomePageHOC, { storePropKey } from './hoc/sceneHomePageHOC';
import { map } from 'ramda';


function SceneHomePage({ [ storePropKey ]: SCENESET, addNewScene, addSceneLevelDispatch, removeScene, removeSceneLevelDispatch }) {
	const addSceneLevel = sceneLevel => () => {
		const newSceneId = `scene - ${uuidv4()}`;
		const newSceneLevelId = `sceneLevel - ${uuidv4()}`;
		addSceneLevelDispatch({
			id: newSceneLevelId,
			index: 0,
			sceneLevel
		});
		addSceneLevelDispatch({
			id: newSceneId,
			index: -1,
			sceneLevel
		});
		addNewScene({
			id: newSceneId
		})
	};

	const removeSceneLevel = index => {
		const idsOnSceneLevel = SCENESET[ index ];
		console.log('ids On Scene Level  ', idsOnSceneLevel);
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

	return <div className="SceneHomePage">
		<Button className="SceneHomePage-Button" onClick={addSceneLevel(SCENESET.length)}>Add New Scene Level</Button>
		{SCENESET.map((scenesOnLevel, sceneLevel) => (<SceneLevel key={scenesOnLevel[ 0 ]} removeLevel={removeSceneLevel(sceneLevel)} />))}
		{/* The above code should be rendering each Scene Level */}
	</div>
}

export default sceneHomePageHOC(SceneHomePage);
