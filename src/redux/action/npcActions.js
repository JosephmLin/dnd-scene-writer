const UPDATE_NPC_LIST = 'UPDATE_NPC_LIST';
// const CREATE_NEW_NPC = 'CREATE_NEW_NPC';

export const tags = {
  UPDATE_NPC_LIST,
  // CREATE_NEW_NPC,
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const apiActionMaker = (tag) => (payload) => ({
  payload,
  type: tag,
});

export const actions = {
  UPDATE_NPC_LIST_ACTION: apiActionMaker(UPDATE_NPC_LIST),
  // CREATE_NEW_NPC_ACTION: apiActionMaker(CREATE_NEW_NPC),
};
