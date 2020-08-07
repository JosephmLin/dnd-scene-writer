import { tags } from '../../action/sceneLevelsActions';
import { pipe, prop, adjust, move, applySpec } from 'ramda';

const moveScene = (state) => ({
  payload: { sceneLevel, fromIndex, toIndex },
}) => {
  return applySpec({
    state: tags.MOVE_SCENE_TAG,
    sceneLevels: pipe(
      prop('sceneLevels'),
      adjust(sceneLevel, move(fromIndex, toIndex))
    ),
  })(state);
};

export default moveScene;
