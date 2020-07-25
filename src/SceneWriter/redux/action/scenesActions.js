// import { toPairs, adjust, replace, pipe, fromPairs, map, tap } from 'react';

const UPDATE_SCENE = 'ADD_SCENE'
const REMOVE_SCENE_TAG = 'REMOVE_SCENE'
const FAILURE_UPDATE_SCENE = 'FAILURE-ADD_SCENE'

export const tags = {
	UPDATE_SCENE,
	REMOVE_SCENE_TAG,
	FAILURE_UPDATE_SCENE
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actionMaker = tag => payload => ({
	payload,
	type: tag
})


export const actions = {
	UPDATE_SCENE_ACTION: actionMaker(UPDATE_SCENE),
	REMOVE_SCENE_ACTION: actionMaker(REMOVE_SCENE_TAG)
}
