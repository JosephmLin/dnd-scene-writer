import { tags } from '../action/sceneSetsActions';
import { adjust, always, applySpec, remove, of, nth, cond, pipe, pathOr, prop, propEq, T, insert } from 'ramda';

const initialState = {
	state: undefined,
	sceneSets: []
};

const generateAddNewSceneSetState = (id, index, sceneLevel, state) => {
	const addToExistingSceneLevel = adjust(
		sceneLevel,
		insert(index, id)
	);

	const createNewSceneLevel = insert(
		sceneLevel,
		of(id)
	);

	return applySpec({
		state: always(tags.ADD_SCENE_SET_TAG),
		sceneSets: pipe(
			prop('sceneSets'),
			cond([
				[ nth(sceneLevel), addToExistingSceneLevel ],
				[ T, createNewSceneLevel ]
			])
		)
	})(state);
}

const addSceneSet = state => ({ payload: { id, index, sceneLevel } }) => generateAddNewSceneSetState(id, index, sceneLevel, state);


const removeSceneSetSpecBuilder = index => ({
	state: always(tags.REMOVE_SCENE_SET_TAG),
	sceneSets: pipe(
		prop('sceneSets'),
		remove(index, 1)
	)
})

const removeSceneSet = action => ({ payload: { index } }) => applySpec(removeSceneSetSpecBuilder(index))(action);

const typeEquals = propEq('type');

/**
 * @typedef AddSceneAction
 * @prop {Object} payload
 * @prop {string} payload.id - scene Id
 * @prop {number} payload.sceneLevel - which level are we
 * @prop {number} payload.index - where on the level are we
 * @prop {string} tags
*/

/**
 * @function reducer
 * @param {Object} state 
 * @param {AddSceneAction} action 
 */
const reducer = (state = initialState, action) => {
	return cond([
		[ typeEquals(tags.ADD_SCENE_SET_TAG), addSceneSet(state) ],
		[ typeEquals(tags.REMOVE_SCENE_SET_TAG), removeSceneSet(state) ],
		[ T, always(state) ]
	])(action);
}

/**
 * @function
 * @name getSceneSets
 * @description This retrieves store data as established by this reducer
 * @param {ReduxStore} store
 * @returns {Array.<>}
 */
export const getSceneSet = pathOr([], [ 'sceneSetsReducer', 'sceneSets' ])

export default reducer;