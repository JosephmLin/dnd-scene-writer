import { tags } from '../action/sceneLevelsActions';
import { adjust, always, applySpec, remove, nth, cond, pipe, pathOr, prop, propEq, T, insert, evolve } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
	state: undefined,
	/**
	 * [{
	 *   id: sceneLevel ID
	 * 	 scenes: []
	 * }]
	 */
	sceneLevels: []
};

const generateAddNewSceneLevelState = (id, index, sceneLevel, state) => {
	const addToExistingSceneLevel = adjust(
		sceneLevel,
		evolve({
			scenes: insert(index, id)
		})
	);

	const createNewSceneLevel = insert(
		sceneLevel,
		{
			id: `sceneLevel - ${uuidv4()}`,
			scenes: [ id ]
		}
	);

	return applySpec({
		state: always(tags.ADD_SCENE_LEVEL_TAG),
		sceneLevels: pipe(
			prop('sceneLevels'),
			cond([
				[ nth(sceneLevel), addToExistingSceneLevel ],
				[ T, createNewSceneLevel ]
			])
		)
	})(state);
}

const addSceneSet = state => ({ payload: { id, index, sceneLevel } }) => generateAddNewSceneLevelState(id, index, sceneLevel, state);


const generateRemoveSceneLevelState = index => ({
	state: always(tags.REMOVE_SCENE_LEVEL_TAG),
	sceneLevels: pipe(
		prop('sceneLevels'),
		remove(index, 1)
	)
})

const removeSceneSet = action => ({ payload: { index } }) => applySpec(generateRemoveSceneLevelState(index))(action);

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
		[ typeEquals(tags.ADD_SCENE_LEVEL_TAG), addSceneSet(state) ],
		[ typeEquals(tags.REMOVE_SCENE_LEVEL_TAG), removeSceneSet(state) ],
		[ T, always(state) ]
	])(action);
}

/**
 * @function
 * @name getsceneLevels
 * @description This retrieves store data as established by this reducer
 * @param {ReduxStore} store
 * @returns {Array.<>}
 */
export const getSceneSet = pathOr([], [ 'sceneLevelsReducer', 'sceneLevels' ])

export default reducer;