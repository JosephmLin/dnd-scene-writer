import { always, pipe, prop, remove, applySpec } from 'ramda';
import { tags } from '../../../../redux/action/sceneLevelsActions';

const generateRemoveSceneLevelState = (index) =>
  applySpec({
    state: always(tags.REMOVE_SCENE_LEVEL_TAG),
    sceneLevels: pipe(prop('sceneLevels'), remove(index, 1)),
  });

const removeSceneLevel = (state) => ({ payload: { index } }) =>
  generateRemoveSceneLevelState(index)(state);

export default removeSceneLevel;
