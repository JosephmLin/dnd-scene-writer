import reducer from '../sceneSetsReducer';

import { tags } from '../../action/sceneSetsActions';

describe('addSceneReducer', () => {
	const testState = {
		sceneSets: [ [ 'test' ] ]
	};

	const addSceneLevelZeroIndexZero = {
		type: tags.ADD_SCENE_SET_TAG,
		payload: {
			id: 'id-here - 0',
			index: 0,
			sceneLevel: 0
		}
	};
	const addSceneLevelZeroIndexOne = {
		type: tags.ADD_SCENE_SET_TAG,
		payload: {
			id: 'id-here - 1',
			index: 1,
			sceneLevel: 0
		}
	};

	const addSceneLevelZeroIndexNegativeOne = {
		type: tags.ADD_SCENE_SET_TAG,
		payload: {
			id: 'id-here - 1',
			index: -1,
			sceneLevel: 0
		}
	};

	const addSceneLevelOneIndexZero = {
		type: tags.ADD_SCENE_SET_TAG,
		payload: {
			id: 'id-here - 1',
			index: 0,
			sceneLevel: 1
		}
	};

	const testRemoveAction = {
		type: tags.REMOVE_SCENE_SET_TAG,
		payload: {
			index: 0
		}
	}
	test('should run reducer with undefined state', () => {
		expect(reducer(undefined, addSceneLevelZeroIndexZero)).toEqual({
			sceneSets: [ [ 'id-here - 0' ] ],
			state: tags.ADD_SCENE_SET_TAG
		});
		expect(reducer(undefined, testRemoveAction)).toEqual({
			sceneSets: [],
			state: tags.REMOVE_SCENE_SET_TAG
		});

	});
	test('should add to sceneSets on SceneLevel 0', () => {

		expect(reducer(testState, addSceneLevelZeroIndexZero)).toEqual({
			sceneSets: [ [ 'id-here - 0', 'test' ] ],
			state: tags.ADD_SCENE_SET_TAG
		});

		expect(reducer(testState, addSceneLevelZeroIndexOne)).toEqual({
			sceneSets: [ [ 'test', 'id-here - 1' ] ],
			state: tags.ADD_SCENE_SET_TAG
		});

		expect(reducer(testState, addSceneLevelZeroIndexNegativeOne)).toEqual({
			sceneSets: [ [ 'test', 'id-here - 1' ] ],
			state: tags.ADD_SCENE_SET_TAG
		});

	});

	test('should add to sceneSets on SceneLevel 1', () => {
		expect(reducer(testState, addSceneLevelOneIndexZero)).toEqual({
			sceneSets: [ [ 'test' ], [ 'id-here - 1' ] ],
			state: tags.ADD_SCENE_SET_TAG
		});
	});

	test('should delete sceneSet from state', () => {
		expect(reducer(testState, testRemoveAction)).toEqual({
			sceneSets: [],
			state: tags.REMOVE_SCENE_SET_TAG
		})
	})
});