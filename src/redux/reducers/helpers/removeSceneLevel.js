import { always, pipe, prop, remove, applySpec } from 'ramda';
import { tags } from '../../action/sceneLayoutActions';

const generateRemoveSceneLevelState = (index) =>
  applySpec({
    state: always(tags.REMOVE_SCENE_LEVEL_TAG),
    sceneLayout: pipe(prop('sceneLayout'), remove(index, 1)),
  });

const removeSceneLevel = (state) => ({ payload: { index } }) =>
  generateRemoveSceneLevelState(index)(state);

export default removeSceneLevel;
