import removeScene from '../removeScene';
import { tags } from '../../../action/sceneLayoutActions';

describe('reducers/helpers/removeScene', () => {
  const defaultState = {
    state: undefined,
    sceneLayout: [
      {
        id: 'sceneLevelId - 0',
        scenes: ['0.0'],
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
  test('should remove scene', () => {
    const payload = {
      payload: {
        id: '2.0',
      },
    };
    expect(removeScene(defaultState)(payload)).toEqual({
      state: tags.REMOVE_SCENE_TAG,
      sceneLayout: [
        {
          id: 'sceneLevelId - 0',
          scenes: ['0.0'],
        },
        {
          id: 'sceneLevelId - 1',
          scenes: ['1.0', '1.1', '1.2'],
        },
        {
          id: 'sceneLevelId - 2',
          scenes: ['2.1', '2.2'],
        },
      ],
    });
  });
  test('should remove scenelevel after last scene is removed', () => {
    const payload = {
      payload: {
        id: '0.0',
      },
    };
    expect(removeScene(defaultState)(payload)).toEqual({
      state: tags.REMOVE_SCENE_TAG,
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
