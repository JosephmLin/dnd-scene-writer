import { toPairs, adjust, replace, pipe, fromPairs, map } from 'react';

const UPDATE_OR_ADD_NPC = 'ADD_NEW_SCENE_OR_SCENE_LEVEL';
const REMOVE_NPC = 'MOVE_SCENE_LEVEL';

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

export const actions = pipe(
  map(actionMaker),
  toPairs,
  map(adjust(0, replace('_TAG', '_ACTION'))),
  fromPairs
);

// export const actions = {
//   ADD_NEW_SCENE_OR_SCENE_LEVEL_ACTION: actionMaker(
//     ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG
//   ),
//   MOVE_SCENE_LEVEL_ACTION: actionMaker(MOVE_SCENE_LEVEL_TAG),
//   MOVE_SCENE_ACTION: actionMaker(MOVE_SCENE_TAG),
//   REMOVE_SCENE_LEVEL_ACTION: actionMaker(REMOVE_SCENE_LEVEL_TAG),
//   REMOVE_SCENE_ACTION: actionMaker(REMOVE_SCENE_TAG),
// };
