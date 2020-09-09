import changeLayout from '../changeLayout';
import DraggableTypes from '../../../../constants/DraggableTypes';
import { tags } from '../../../action/sceneLayoutActions';
describe('reducers/helpers/changeLayout ', () => {
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
  describe('SceneCard movement', () => {
    test('should properly move card from one scene level to another', () => {
      const payload = {
        source: {
          index: 1,
          droppableId: 'sceneLevelId - 1',
        },
        destination: {
          index: 0,
          droppableId: 'sceneLevelId - 0',
        },
        draggableId: '1.1',
        type: DraggableTypes.SCENE_CARD,
      };
      expect(changeLayout(defaultState)({ payload })).toEqual({
        state: tags.CHANGE_SCENE_LAYOUT_TAG,
        sceneLayout: [
          {
            id: 'sceneLevelId - 0',
            scenes: ['1.1', '0.0', '0.1', '0.2'],
          },
          {
            id: 'sceneLevelId - 1',
            scenes: ['1.0', '1.2'],
          },
          {
            id: 'sceneLevelId - 2',
            scenes: ['2.0', '2.1', '2.2'],
          },
        ],
      });
    });
    test('should properly move card from within the same scene level', () => {
      const payload = {
        source: {
          index: 1,
          droppableId: 'sceneLevelId - 1',
        },
        destination: {
          index: 0,
          droppableId: 'sceneLevelId - 1',
        },
        draggableId: '1.1',
        type: DraggableTypes.SCENE_CARD,
      };
      expect(changeLayout(defaultState)({ payload })).toEqual({
        state: tags.CHANGE_SCENE_LAYOUT_TAG,
        sceneLayout: [
          {
            id: 'sceneLevelId - 0',
            scenes: ['0.0', '0.1', '0.2'],
          },
          {
            id: 'sceneLevelId - 1',
            scenes: ['1.1', '1.0', '1.2'],
          },
          {
            id: 'sceneLevelId - 2',
            scenes: ['2.0', '2.1', '2.2'],
          },
        ],
      });
    });
  });
  describe('SceneLevel movement', () => {
    test('move scene level', () => {
      let payload = {
        source: {
          index: 0,
          droppableId: 'scene-levels',
        },
        destination: {
          index: 1,
          droppableId: 'scene-levels',
        },
        draggableId: 'sceneLevelId - 0',
        type: DraggableTypes.SCENE_LEVEL,
      };

      expect(changeLayout(defaultState)({ payload })).toEqual({
        state: tags.CHANGE_SCENE_LAYOUT_TAG,
        sceneLayout: [
          {
            id: 'sceneLevelId - 1',
            scenes: ['1.0', '1.1', '1.2'],
          },
          {
            id: 'sceneLevelId - 0',
            scenes: ['0.0', '0.1', '0.2'],
          },
          {
            id: 'sceneLevelId - 2',
            scenes: ['2.0', '2.1', '2.2'],
          },
        ],
      });
    });
  });
  describe('No Movement', () => {
    test('null destination', () => {
      let payload = {
        source: {
          index: 1,
          droppableId: 'sceneLevelId - 1',
        },
        destination: null,
        draggableId: '1.1',
        type: DraggableTypes.SCENE_CARD,
      };
      expect(changeLayout(defaultState)({ payload })).toEqual(defaultState);
    });
    test('same source and destination', () => {
      let payload = {
        source: {
          index: 1,
          droppableId: 'sceneLevelId - 1',
        },
        destination: {
          index: 1,
          droppableId: 'sceneLevelId - 1',
        },
        draggableId: '1.1',
        type: DraggableTypes.SCENE_CARD,
      };
      expect(changeLayout(defaultState)({ payload })).toEqual(defaultState);
    });
  });
});
