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
 * @name NPCState
 * @prop {String} state
 * @prop {Object} npcs
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
  state: tags.REMOVE_NPC,
  npcs: pipe(prop('npcs'), dissoc(id))(state),
});

const removeNPC = (state) => ({ payload: { id } }) =>
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
    [typeEquals(tags.REMOVE_NPC), removeNPC(state)],
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
