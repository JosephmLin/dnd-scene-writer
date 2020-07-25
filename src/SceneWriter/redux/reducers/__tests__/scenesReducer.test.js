import reducer from '../scenesReducer';

import { tags } from '../../action/scenesActions';
describe('addSceneReducer', () => {
	const testState = {
		scenes: {
			test: 'b',
			'id-here-1': 'a'
		}
	};
	const addSceneData = {
		type: tags.ADD_SCENE_TAG,
		payload: {
			data: '123',
			id: 'id-here - 0'
		}
	};
	const testRemoveAction = {
		type: tags.REMOVE_SCENE_TAG,
		payload: {
			id: 'test'
		}
	}
	test('should add scene', () => {
		expect(reducer(undefined, addSceneData)).toEqual({
			scenes: {
				'id-here - 0': addSceneData.payload
			},
			state: tags.ADD_SCENE_TAG
		});

		expect(reducer(testState, addSceneData)).toEqual({
			scenes: {
				'id-here - 0': addSceneData.payload,
				test: 'b',
				'id-here-1': 'a'
			},
			state: tags.ADD_SCENE_TAG
		});
	});

	test('should remove scene', () => {
		expect(reducer(undefined, testRemoveAction)).toEqual({
			scenes: {},
			state: tags.REMOVE_SCENE_TAG
		});

		expect(reducer(testState, testRemoveAction)).toEqual({
			scenes: {
				'id-here-1': 'a'
			},
			state: tags.REMOVE_SCENE_TAG
		})
	});
});