
import { v4 as uuidv4 } from 'uuid';

import { actions as sceneActions } from './redux/action/scenesActions';


updateScene: sceneData => dispatch(sceneActions.UPDATE_SCENE_ACTION(sceneData)),
	addNewScene: sceneData => dispatch(sceneActions.UPDATE_SCENE_ACTION({
		...sceneData,
		id: `scene - ${uuidv4()}`
	})),
		removeScene: scene => dispatch(sceneActions.REMOVE_SCENE_ACTION(scene))