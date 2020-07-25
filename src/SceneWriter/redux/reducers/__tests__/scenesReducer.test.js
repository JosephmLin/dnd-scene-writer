import reducer from '../scenesReducer';

import { tags } from '../../action/scenesActions';
describe('updateSceneReducer', () => {
	const testState = {
		scenes: {
			test: 'b',
			'id-here-1': 'a'
		}
	};
	const updateSceneData = {
		type: tags.UPDATE_SCENE_TAG,
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
	test('should update scene', () => {
		expect(reducer(undefined, updateSceneData)).toEqual({
			scenes: {
				'id-here - 0': updateSceneData.payload
			},
			state: tags.UPDATE_SCENE_TAG
		});

		expect(reducer(testState, updateSceneData)).toEqual({
			scenes: {
				'id-here - 0': updateSceneData.payload,
				test: 'b',
				'id-here-1': 'a'
			},
			state: tags.UPDATE_SCENE_TAG
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