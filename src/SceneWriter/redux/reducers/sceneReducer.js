import { tags } from '../action/sceneActions';
import { __, always, apply, remove, indexOf, juxt, inc, assoc, append, cond, pipe, pathOr, prop, propEq, T, identity } from 'ramda';

const initialState = {
	state: undefined,
	scenes: []
};

const addScene = ({ scenes }) => pipe(
	prop('payload'),
	append(__, scenes),
	assoc('scenes', __, {
		state: tags.ADD_SCENE_TAG,
	})
);

const sliceSceneIndexes = scenes => apply(remove(__, __, scenes))
const removeScene = ({ scenes }) => pipe(
	prop('payload'),
	indexOf(__, scenes),
	juxt([ identity, inc ]),
	sliceSceneIndexes(scenes),
	assoc('scenes', __, {
		state: tags.REMOVE_SCENE_TAG
	}),
)

const typeEquals = propEq('type');

/**
 * @typedef AddSceneAction
 * @prop {Object} payload
 * @prop {Scene} payload.scene
 * @prop {string} tags
*/

/**
 * @function reducer
 * @param {Object} state 
 * @param {AddSceneAction} action 
 */
const reducer = (state = initialState, action) => {
	return cond([
		[ typeEquals(tags.ADD_SCENE_TAG), pipe(
			addScene(state)
		) ],
		[ typeEquals(tags.REMOVE_SCENE_TAG), pipe(
			removeScene(state)
		) ],
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
export const getScenes = pathOr([], [ 'sceneReducer', 'scenes' ])

export default reducer;