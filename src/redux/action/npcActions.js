const UPDATE_OR_ADD_NPC = 'UPDATE_OR_ADD_NPC';
const REMOVE_NPC = 'REMOVE_NPC';

export const tags = {
  UPDATE_OR_ADD_NPC,
  REMOVE_NPC,
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actionMaker = (tag) => (payload) => ({
  payload,
  type: tag,
});

export const actions = {
  UPDATE_OR_ADD_NPC: actionMaker(UPDATE_OR_ADD_NPC),
  REMOVE_NPC: actionMaker(REMOVE_NPC),
};
