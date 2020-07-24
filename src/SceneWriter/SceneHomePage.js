import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';
import { pipe, objOf } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { actions as sceneSetsActions } from './redux/action/sceneSetsActions';
import { actions as sceneActions } from './redux/action/scenesActions';
import { getSceneSet } from './redux/reducers/sceneSetsReducer';
import './SceneHomePage.css';
import { connect } from 'react-redux';
import React from 'react';

const storePropKey = 'SceneHomePage';

function SceneHomePage({ [ storePropKey ]: SCENES, addSceneSet, addScene, removeScene }) {
	const addNewSceneSet = (objType, sceneLevel) => () => {
		addSceneSet({
			id: `${objType} - ${uuidv4()}`,
			sceneLevel
		})
	}



	const removeScene = (id, sceneLevel) => () => removeScene({
		id,
		sceneLevel
	});

	console.log(SCENES);
	return <div className="SceneHomePage">
		<Button className="SceneHomePage-Button" onClick={addNewSceneSet('scene', 0)}>Add Scene Set</Button>
		{SCENES.map((scene, sceneLevel) => (<SceneCard className="SceneCard" key={scene} addNewScene={addNewScene('scene', sceneLevel)} removeObject={removeObject(scene, sceneLevel)} />))}
	</div>
}

export const mapStateToProps = pipe(
	getSceneSet,
	objOf(storePropKey)
)

export const mapDispatchToProps = dispatch => ({
	addSceneSet: sceneSet => dispatch(sceneSetsActions.ADD_SCENE_SET_ACTION(sceneSet)),
	addScene: scene => dispatch(sceneActions.ADD_SCENE_ACTION(scene)),
	removeScene: scene => dispatch(sceneActions.REMOVE_SCENE_ACTION(scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneHomePage);