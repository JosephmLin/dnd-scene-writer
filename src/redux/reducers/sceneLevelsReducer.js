import { tags } from '../action/sceneLevelsActions';
import { always, cond, pathOr, propEq, T } from 'ramda';
import helpers from '../../SceneWriter/redux/reducers/helpers';

const initialState = {
  state: undefined,
  /**
   * [{
   *   id: sceneLevel ID
   * 	 scenes: []
   * }]
   */
  sceneLevels: [],
};

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
    [
      typeEquals(tags.ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG),
      helpers.addSceneLevel(state),
    ],
    [typeEquals(tags.MOVE_SCENE_LEVEL_TAG), helpers.moveSceneLevel(state)],
    [typeEquals(tags.MOVE_SCENE_TAG), helpers.moveScene(state)],
    [typeEquals(tags.REMOVE_SCENE_LEVEL_TAG), helpers.removeSceneLevel(state)],
    [typeEquals(tags.REMOVE_SCENE_TAG), helpers.removeScene(state)],
    [T, always(state)],
  ])(action);
};

/**
 * @function
 * @name getsceneLevels
 * @description This retrieves store data as established by this reducer
 * @param {ReduxStore} store
 * @returns {Array.<>}
 */
export const getSceneLevels = pathOr([], ['sceneLevelsReducer', 'sceneLevels']);

export default reducer;
