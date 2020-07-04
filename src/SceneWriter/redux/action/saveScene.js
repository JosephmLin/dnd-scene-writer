const BEGIN_TAG = 'BEGIN-SAVE_SCENE'
const SUCCESS_TAG = 'SUCCESS-SAVE_SCENE'
const FAILURE_TAG = 'FAILURE-SAVE_SCENE'

/**
 * @see {@link https://github.com/redux-utilities/flux-standard-action}
 */
const actions = [ {
	tag: BEGIN_TAG
}, {
	tag: SUCCESS_TAG
}, {
	tag: FAILURE_TAG
} ];

export default {
	tags: [ BEGIN_TAG, SUCCESS_TAG, FAILURE_TAG ]
}