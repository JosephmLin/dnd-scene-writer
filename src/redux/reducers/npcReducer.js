import { tags } from '../action/npcActions';
import {
  always,
  applySpec,
  dissoc,
  cond,
  pipe,
  pathOr,
  prop,
  propEq,
  T,
  assoc,
} from 'ramda';

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
  npcs: {},
};

const generateUpdateOrAddNPC = (state, sceneData) =>
  applySpec({
    state: always(tags.UPDATE_OR_ADD_NPC),
    npcs: pipe(prop('npcs'), assoc(sceneData.id, sceneData)),
  })(state);

const updateOrAddNPC = (state) => ({ payload }) =>
  generateUpdateOrAddNPC(state, payload);

const generateRemoveNPCState = (state, id) => ({
  state: tags.REMOVE_SCENE_TAG,
  npcs: pipe(prop('npcs'), dissoc(id))(state),
});

const removeScene = (state) => ({ payload: { id } }) =>
  generateRemoveNPCState(state, id);

const typeEquals = propEq('type');

/**
 * @typedef updateOrAddNPCAction
 * @prop {Object} payload
 * @prop {Scene} payload.scene
 * @prop {string} tags
 */

/**
 * @function reducer
 * @param {Object} state
 * @param {updateOrAddNPCAction} action
 */
const reducer = (state = initialState, action) => {
  return cond([
    [typeEquals(tags.UPDATE_OR_ADD_NPC), updateOrAddNPC(state)],
    [typeEquals(tags.REMOVE_NPC), removeScene(state)],
    [T, always(state)],
  ])(action);
};

/**
 * @function
 * @name getScenes
 * @description This retrieves store data as established by this reducer
 * @param {ReduxStore} store
 * @returns {Array.<>}
 */
export const getNPCs = pathOr([], ['npcReducer', 'npcs']);

export default reducer;
