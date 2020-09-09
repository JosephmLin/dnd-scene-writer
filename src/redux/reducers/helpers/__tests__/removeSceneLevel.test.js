import removeSceneLevel from '../removeSceneLevel';
import { tags } from '../../../action/sceneLayoutActions';

describe('reducers/helpers/removeSceneLevel', () => {
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
  test('should remove scene level', () => {
    const payload = {
      payload: {
        index: 0,
      },
    };
    expect(removeSceneLevel(defaultState)(payload)).toEqual({
      state: tags.REMOVE_SCENE_LEVEL_TAG,
      sceneLayout: [
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
});
