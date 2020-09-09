import { tags } from '../../action/sceneLayoutActions';
import {
  __,
  pipe,
  prop,
  always,
  move,
  applySpec,
  findIndex,
  assoc,
  insert,
  over,
  remove,
  propEq,
  lensPath,
} from 'ramda';
import DraggableTypes from '../../../constants/DraggableTypes';

/**
 * @typedef DraggableInfoObj
 * @prop {number} index
 * @prop {String} droppableId parent droppable
 */

/**
 *
 * @param {SceneLayout} state
 * @param {DraggableInfoObj} source
 * @param {DraggableInfoObj} destination
 * @param {String} draggableId Scene Id being moved
 */
const moveSceneCard = (state, source, destination, draggableId) => {
  const getSceneLevelIndex = pipe(
    propEq('id'),
    findIndex(__, state.sceneLayout)
  );
  const sourceDroppableLens = lensPath([
    'sceneLayout',
    getSceneLevelIndex(source.droppableId),
    'scenes',
  ]);
  const destinationDroppableLens = lensPath([
    'sceneLayout',
    getSceneLevelIndex(destination.droppableId),
    'scenes',
  ]);

  const buildNewSceneLayout = pipe(
    over(sourceDroppableLens, remove(source.index, 1)),
    over(destinationDroppableLens, insert(destination.index, draggableId))
  );

  return pipe(
    assoc('state', tags.CHANGE_SCENE_LAYOUT_TAG),
    buildNewSceneLayout
  )(state);
};

/**
 *
 * @param {DraggableInfoObj} payload.source
 * @param {DraggableInfoObj} payload.destination
 * @param {String} draggableId
 * @param {DraggableTypesEnum} type
 */
const changeLayout = (state) => ({
  payload: { source, destination, draggableId, type },
}) => {
  if (
    destination === null ||
    (source.index === destination.index &&
      source.droppableId === destination.droppableId)
  ) {
    return state;
  }

  if (type === DraggableTypes.SCENE_CARD) {
    return moveSceneCard(state, source, destination, draggableId);
  } else if (type === DraggableTypes.SCENE_LEVEL) {
    return applySpec({
      state: always(tags.CHANGE_SCENE_LAYOUT_TAG),
      sceneLayout: pipe(
        prop('sceneLayout'),
        move(source.index, destination.index)
      ),
    })(state);
  }
};

export default changeLayout;
