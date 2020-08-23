import { tags } from '../action/npcActions';
import { always, pathOr, propOr, propEq, when, has } from 'ramda';

/**
 * @typedef
 * @name NPCState
 * @prop {String} state
 * @prop {Object} npcs
 */
const initialState = {
  state: undefined,
  isFetching: false,
  npcs: [],
};

const updateNpc = (state, { payload }) => {
  return {
    state: tags.UPDATE_OR_ADD_NPC,
    isFetching: propOr(false, 'isFetching', payload),
    npcs: when(has('isFetching'), always(state.npcs))(payload),
  };
};

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
  if (typeEquals(tags.UPDATE_NPC_LIST, action)) {
    return updateNpc(state, action);
  }
  // if (typeEquals(tags.CREATE_NEW_NPC, action)) {
  //   return createNewNpc()
  // }
  return state;
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
