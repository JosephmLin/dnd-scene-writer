// import { toPairs, adjust, replace, pipe, fromPairs, map, tap } from 'react';

const ADD_SCENE_LEVEL_TAG = 'ADD_SCENE_LEVEL'
const REMOVE_SCENE_LEVEL_TAG = 'REMOVE_SCENE_LEVEL'
const FAILURE_ADD_SCENE_LEVEL_TAG = 'FAILURE-ADD_SCENE_LEVEL'

export const tags = {
	ADD_SCENE_LEVEL_TAG,
	REMOVE_SCENE_LEVEL_TAG,
	FAILURE_ADD_SCENE_LEVEL_TAG
};

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actionMaker = tag => payload => ({
	payload,
	type: tag
})

// const actions2 = pipe(
// 	map(actionMaker),
// 	toPairs,
// 	map(
// 		adjust(0, replace('_TAG', '_ACTION'))
// 	),
// 	fromPairs
// );

/**
 * @typedef
 * @name AddSceneActionPayload
 * @prop {} id
 * @prop {} index
 * @prop {} sceneData
 */
export const actions = {
	ADD_SCENE_LEVEL_ACTION: actionMaker(ADD_SCENE_LEVEL_TAG),
	REMOVE_SCENE_LEVEL_ACTION: actionMaker(REMOVE_SCENE_LEVEL_TAG)
}
