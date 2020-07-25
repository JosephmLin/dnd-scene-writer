import { tags } from '../action/scenesActions';
import { always, applySpec, dissoc, cond, pipe, pathOr, prop, propEq, T, assoc } from 'ramda';

/**
 * @typedef
 * @name scene
 * @description This is a mapping of sceneSet to an a
 */

/**
 * @typedef
 * @name SceneState
 * @prop {String} state
 * @prop {Object} scenes
 */
const initialState = {
	state: undefined,
	scenes: {}
};

const generateUpdateSceneState = (state, sceneData) => applySpec({
	state: always(tags.Update_SCENE_TAG),
	scenes: pipe(
		prop('scenes'),
		assoc(sceneData.id, sceneData)
	)
})(state)

const updateScene = state => ({ payload }) => generateUpdateSceneState(state, payload);

const generateRemoveSceneState = (state, id) => ({
	state: tags.REMOVE_SCENE_TAG,
	scenes: pipe(
		prop('scenes'),
		dissoc(id)
	)(state)
})

const removeScene = state => ({ payload: { id } }) => generateRemoveSceneState(state, id);

const typeEquals = propEq('type');

/**
 * @typedef UpdateSceneAction
 * @prop {Object} payload
 * @prop {Scene} payload.scene
 * @prop {string} tags
*/

/**
 * @function reducer
 * @param {Object} state 
 * @param {UpdateSceneAction} action 
 */
const reducer = (state = initialState, action) => {
	return cond([
		[ typeEquals(tags.Update_SCENE_TAG), updateScene(state) ],
		[ typeEquals(tags.REMOVE_SCENE_TAG), removeScene(state) ],
		[ T, always(state) ]
	])(action);
}

/**
 * @function
 * @name getScenes
 * @description This retrieves store data as established by this reducer
 * @param {ReduxStore} store
 * @returns {Array.<>}
 */
export const getSceneSet = pathOr([], [ 'sceneReducer', 'scenes' ])

export default reducer;