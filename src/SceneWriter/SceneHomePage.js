import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';
import { pipe, objOf } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { actions } from './redux/action/sceneActions';
import { getScenes } from './redux/reducers/sceneReducer';
import './SceneHomePage.css';
import { connect } from 'react-redux';
import React from 'react';

const storePropKey = 'SceneHomePage';

function SceneHomePage({ [ storePropKey ]: SCENES, addScene, removeScene }) {
	const addNewScene = (objType) => () => {
		addScene(`${objType} - ${uuidv4()}`)
	}

	const removeObject = key => () => removeScene(key);


	return <div className="App-">
		<Button className="App-Button" onClick={addNewScene('scene')}>Add Scene</Button>
		{SCENES.map((scene) => (<SceneCard className="SceneCard" key={scene} removeObject={removeObject(scene)} />))}
	</div>
}

export const mapStateToProps = pipe(
	getScenes,
	objOf(storePropKey)
)

export const mapDispatchToProps = dispatch => ({
	addScene: scene => dispatch(actions.ADD_SCENE_ACTION(scene)),
	removeScene: scene => dispatch(actions.REMOVE_SCENE_ACTION(scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneHomePage);