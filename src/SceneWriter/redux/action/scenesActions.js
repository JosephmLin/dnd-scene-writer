// import { toPairs, adjust, replace, pipe, fromPairs, map, tap } from 'react';

const ADD_SCENE_TAG = 'ADD_SCENE'
const REMOVE_SCENE_TAG = 'REMOVE_SCENE'
const FAILURE_ADD_SCENE_TAG = 'FAILURE-ADD_SCENE'

export const tags = {
	ADD_SCENE_TAG,
	REMOVE_SCENE_TAG,
	FAILURE_ADD_SCENE_TAG
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actionMaker = tag => payload => ({
	payload,
	type: tag
})


export const actions = {
	ADD_SCENE_ACTION: actionMaker(ADD_SCENE_TAG),
	REMOVE_SCENE_ACTION: actionMaker(REMOVE_SCENE_TAG)
}
