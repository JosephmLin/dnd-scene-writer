import reducer from '../sceneLevelsReducer';

import { tags } from '../../action/sceneLayoutActions';

jest.mock('uuid', () => ({
  v4: () => 'uuid',
}));
describe('addSceneReducer', () => {
  const testState = {
    sceneLevels: [{ id: 'sceneLevel - 0', scenes: [] }],
  };

  const addSceneLevelZeroIndexZero = {
    type: tags.ADD_SCENE_LEVEL_TAG,
    payload: {
      id: 'id-here - 0',
      index: 0,
      sceneLevel: 0,
    },
  };
  const addSceneLevelZeroIndexOne = {
    type: tags.ADD_SCENE_LEVEL_TAG,
    payload: {
      id: 'id-here - 1',
      index: 1,
      sceneLevel: 0,
    },
  };

  const addSceneLevelZeroIndexNegativeOne = {
    type: tags.ADD_SCENE_LEVEL_TAG,
    payload: {
      id: 'id-here - 1',
      index: -1,
      sceneLevel: 0,
    },
  };

  const addSceneLevelOneIndexZero = {
    type: tags.ADD_SCENE_LEVEL_TAG,
    payload: {
      id: 'id-here - 1',
      index: 0,
      sceneLevel: 1,
    },
  };

  const testRemoveLevelAction = {
    type: tags.REMOVE_SCENE_LEVEL_TAG,
    payload: {
      index: 0,
    },
  };

  test('should run reducer with undefined state', () => {
    expect(reducer(undefined, addSceneLevelZeroIndexZero)).toEqual({
      sceneLevels: [{ id: 'sceneLevel - uuid', scenes: ['id-here - 0'] }],
      state: tags.ADD_SCENE_LEVEL_TAG,
    });
    expect(reducer(undefined, testRemoveLevelAction)).toEqual({
      sceneLevels: [],
      state: tags.REMOVE_SCENE_LEVEL_TAG,
    });
  });
  test('should add to sceneLevels on SceneLevel 0', () => {
    expect(reducer(testState, addSceneLevelZeroIndexZero)).toEqual({
      sceneLevels: [{ scenes: ['id-here - 0'], id: 'sceneLevel - 0' }],
      state: tags.ADD_SCENE_LEVEL_TAG,
    });

    expect(reducer(testState, addSceneLevelZeroIndexOne)).toEqual({
      sceneLevels: [{ id: 'sceneLevel - 0', scenes: ['id-here - 1'] }],
      state: tags.ADD_SCENE_LEVEL_TAG,
    });

    expect(reducer(testState, addSceneLevelZeroIndexNegativeOne)).toEqual({
      sceneLevels: [{ id: 'sceneLevel - 0', scenes: ['id-here - 1'] }],
      state: tags.ADD_SCENE_LEVEL_TAG,
    });
  });

  test('should add to sceneLevels on SceneLevel 1', () => {
    expect(reducer(testState, addSceneLevelOneIndexZero)).toEqual({
      sceneLevels: [
        { id: 'sceneLevel - 0', scenes: [] },
        { id: 'sceneLevel - uuid', scenes: ['id-here - 1'] },
      ],
      state: tags.ADD_SCENE_LEVEL_TAG,
    });
  });

  test('should delete sceneSet from state', () => {
    expect(reducer(testState, testRemoveLevelAction)).toEqual({
      sceneLevels: [],
      state: tags.REMOVE_SCENE_LEVEL_TAG,
    });
  });

  test('should delete scene from state', () => {
    const testRemoveLevelAction = {
      type: tags.REMOVE_SCENE_TAG,
      payload: {
        id: 'scene - uuid',
      },
    };
    const testStateWithScene = {
      sceneLevels: [{ id: 'sceneLevel - 0', scenes: ['scene - uuid'] }],
    };

    expect(reducer(testStateWithScene, testRemoveLevelAction)).toEqual({
      state: tags.REMOVE_SCENE_TAG,
      sceneLevels: [{ id: 'sceneLevel - 0', scenes: [] }],
    });
  });
});
