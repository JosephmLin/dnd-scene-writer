const ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG = 'ADD_NEW_SCENE_OR_SCENE_LEVEL';
const CHANGE_SCENE_LAYOUT_TAG = 'CHANGE_SCENE_LAYOUT';
const REMOVE_SCENE_LEVEL_TAG = 'REMOVE_SCENE_LEVEL';
const REMOVE_SCENE_TAG = 'REMOVE_SCENE';

export const tags = {
  ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG,
  CHANGE_SCENE_LAYOUT_TAG,
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
  CHANGE_SCENE_LAYOUT: actionMaker(CHANGE_SCENE_LAYOUT_TAG),
  REMOVE_SCENE_LEVEL_ACTION: actionMaker(REMOVE_SCENE_LEVEL_TAG),
  REMOVE_SCENE_ACTION: actionMaker(REMOVE_SCENE_TAG),
};
