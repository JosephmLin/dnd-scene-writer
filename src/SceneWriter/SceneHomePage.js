import SceneCard from './SceneCard';
import { Button } from '@material-ui/core';
import { append, pipe, tap } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { actions } from './redux/action/sceneActions';
import './SceneHomePage.css';
import { connect } from 'react-redux';
import React from 'react';

function SceneHomePage(props) {
	const SCENES = props.scenes;
	const addNewScene = (objType) => () => {
		props.addScene(`${objType} - ${uuidv4()}`)
	}

	const removeObject = key => () => {
		console.log(props.scenes);
		console.log('REMOVE SCENE');
		console.log(key);
		props.removeScene(key);
	}

	return <div>
		<Button className="App-button" onClick={addNewScene('scene')}>Add Scene</Button>
		{SCENES.map((scene) => (<SceneCard name="" key={scene} removeObject={removeObject(scene)} />))}
	</div>
}

const mapStateToProps = state => {
	return {
		scenes: state.sceneReducer.scenes ? state.sceneReducer.scenes : []
	}
}

const mapDispatchToProps = dispatch => ({
	addScene: scene => dispatch(actions.ADD_SCENE_ACTION(scene)),
	removeScene: scene => dispatch(actions.REMOVE_SCENE_ACTION(scene))
})

export default connect(mapStateToProps, mapDispatchToProps)(SceneHomePage);