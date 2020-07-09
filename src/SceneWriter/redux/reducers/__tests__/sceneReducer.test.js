import reducer from '../sceneReducer';

import { tags } from '../../action/sceneActions';
describe('addSceneReducer', () => {
	const testState = {
		scenes: [ 'test' ]
	};
	const testAddAction = {
		type: tags.ADD_SCENE_TAG,
		payload: 'id-here'
	};
	const testRemoveAction = {
		type: tags.REMOVE_SCENE_TAG,
		payload: 'test'
	}
	test('should run reducer', () => {
		expect(reducer(undefined, testAddAction)).toEqual({
			scenes: [ 'id-here' ],
			state: tags.ADD_SCENE_TAG
		});

		expect(reducer(testState, testAddAction)).toEqual({
			scenes: [ 'test', 'id-here' ],
			state: tags.ADD_SCENE_TAG
		});

		expect(reducer(undefined, testRemoveAction)).toEqual({
			scenes: [],
			state: tags.REMOVE_SCENE_TAG
		});

		expect(reducer(testState, testRemoveAction)).toEqual({
			scenes: [],
			state: tags.REMOVE_SCENE_TAG
		})
	})
})