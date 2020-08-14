import { tags } from '../../action/sceneLayoutActions';
import { pipe, prop, always, move, applySpec } from 'ramda';
import DraggableTypes from '../../../constants/DraggableTypes';

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
    const sourceLayout = state.sceneLayout[source.index];
    const destinationLayout = state.sceneLayout[destination.index];

    const movedObject = sourceLayout.scenes;
  } else if (type === DraggableTypes.SCENE_LEVEL) {
    return applySpec({
      state: always(tags.CHANGE_LAYOUT_TAG),
      sceneLayout: pipe(
        prop('sceneLayout'),
        move(source.index, destination.index)
      ),
    })(state);
  }
  // })(state);
  // combine: null​,
  // destination: null,
  // draggableId: "column2",
  // mode: "FLUID",
  // reason: "DROP",
  // source: Object { index: 1, droppableId: "all-columns" },
  // type: "column",
};

export default changeLayout;
