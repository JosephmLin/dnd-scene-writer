import addSceneOrSceneLevel from '../addSceneOrSceneLevel';
import { tags } from '../../../action/sceneLayoutActions';
jest.mock('uuid', () => ({
  v4: () => 'uuid',
}));

describe('redux/reducers/helpers/addSceneOrSceneLevel', () => {
  const defaultState = {
    state: undefined,
    sceneLayout: [
      {
        id: 'sceneLevelId - 0',
        scenes: ['0.0', '0.1', '0.2'],
      },
      {
        id: 'sceneLevelId - 1',
        scenes: ['1.0', '1.1', '1.2'],
      },
      {
        id: 'sceneLevelId - 2',
        scenes: ['2.0', '2.1', '2.2'],
      },
    ],
  };
  test('should add Scene at designated index', () => {
    const payload = {
      payload: {
        sceneId: 'scene-uuid',
        index: 0,
        sceneLevelIndex: 0,
      },
    };
    expect(addSceneOrSceneLevel(defaultState)(payload)).toEqual({
      state: tags.ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG,
      sceneLayout: [
        {
          id: 'sceneLevelId - 0',
          scenes: ['scene-uuid', '0.0', '0.1', '0.2'],
        },
        {
          id: 'sceneLevelId - 1',
          scenes: ['1.0', '1.1', '1.2'],
        },
        {
          id: 'sceneLevelId - 2',
          scenes: ['2.0', '2.1', '2.2'],
        },
      ],
    });
  });
  test('should add Scene using -1 index', () => {
    const payload = {
      payload: {
        sceneId: 'scene-uuid',
        index: -1,
        sceneLevelIndex: 0,
      },
    };
    expect(addSceneOrSceneLevel(defaultState)(payload)).toEqual({
      state: tags.ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG,
      sceneLayout: [
        {
          id: 'sceneLevelId - 0',
          scenes: ['0.0', '0.1', '0.2', 'scene-uuid'],
        },
        {
          id: 'sceneLevelId - 1',
          scenes: ['1.0', '1.1', '1.2'],
        },
        {
          id: 'sceneLevelId - 2',
          scenes: ['2.0', '2.1', '2.2'],
        },
      ],
    });
  });
  test('should add Scene Level', () => {
    const payload = {
      payload: {
        sceneId: 'scene-uuid',
        index: 0,
        sceneLevelIndex: 4,
      },
    };
    expect(addSceneOrSceneLevel(defaultState)(payload)).toEqual({
      state: tags.ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG,
      sceneLayout: [
        {
          id: 'sceneLevelId - 0',
          scenes: ['0.0', '0.1', '0.2'],
        },
        {
          id: 'sceneLevelId - 1',
          scenes: ['1.0', '1.1', '1.2'],
        },
        {
          id: 'sceneLevelId - 2',
          scenes: ['2.0', '2.1', '2.2'],
        },
        {
          id: 'sceneLevel - uuid',
          scenes: ['scene-uuid'],
        },
      ],
    });
  });
});
