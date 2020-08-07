// import { toPairs, adjust, replace, pipe, fromPairs, map, tap } from 'react';
// This should work, but doesn't. I'll do more investigation later
// const actions2 = pipe(
// 	map(actionMaker),
// 	toPairs,
// 	map(
// 		adjust(0, replace('_TAG', '_ACTION'))
// 	),
// 	fromPairs
// );
const ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG = 'ADD_NEW_SCENE_OR_SCENE_LEVEL';
const MOVE_SCENE_LEVEL_TAG = 'MOVE_SCENE_LEVEL';
const MOVE_SCENE_TAG = 'MOVE_SCENE';
const REMOVE_SCENE_LEVEL_TAG = 'REMOVE_SCENE_LEVEL';
const REMOVE_SCENE_TAG = 'REMOVE_SCENE';

export const tags = {
  ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG,
  MOVE_SCENE_LEVEL_TAG,
  MOVE_SCENE_TAG,
  REMOVE_SCENE_LEVEL_TAG,
  REMOVE_SCENE_TAG,
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actionMaker = (tag) => (payload) => ({
  payload,
  type: tag,
});

export const actions = {
  ADD_NEW_SCENE_OR_SCENE_LEVEL_ACTION: actionMaker(
    ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG
  ),
  MOVE_SCENE_LEVEL_ACTION: actionMaker(MOVE_SCENE_LEVEL_TAG),
  MOVE_SCENE_ACTION: actionMaker(MOVE_SCENE_TAG),
  REMOVE_SCENE_LEVEL_ACTION: actionMaker(REMOVE_SCENE_LEVEL_TAG),
  REMOVE_SCENE_ACTION: actionMaker(REMOVE_SCENE_TAG),
};
