import { tags } from '../../action/sceneLevelsActions';
import { pipe, prop, move, applySpec } from 'ramda';

const moveSceneLevel = (state) => ({ payload: { fromIndex, toIndex } }) => {
  return applySpec({
    state: tags.MOVE_SCENE_LEVEL_TAG,
    sceneLevels: pipe(prop('sceneLevels'), move(fromIndex, toIndex)),
  })(state);
};

export default moveSceneLevel;
