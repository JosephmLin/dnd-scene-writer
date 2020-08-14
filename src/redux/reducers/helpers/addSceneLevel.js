import {
  adjust,
  evolve,
  insert,
  applySpec,
  always,
  pipe,
  prop,
  cond,
  nth,
  T,
} from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import { tags } from '../../action/sceneLayoutActions';

const generateAddNewSceneLevelState = (sceneId, index, sceneLevel, state) => {
  const addToExistingSceneLevel = adjust(
    sceneLevel,
    evolve({
      scenes: insert(index, sceneId),
    })
  );

  const createNewSceneLevel = insert(sceneLevel, {
    id: `sceneLevel - ${uuidv4()}`,
    scenes: [sceneId],
  });

  return applySpec({
    state: always(tags.ADD_SCENE_LEVEL_TAG),
    sceneLayout: pipe(
      prop('sceneLayout'),
      cond([
        [nth(sceneLevel), addToExistingSceneLevel],
        [T, createNewSceneLevel],
      ])
    ),
  })(state);
};

const addSceneLevel = (state) => ({
  payload: { sceneId, index, sceneLevel },
}) => generateAddNewSceneLevelState(sceneId, index, sceneLevel, state);

export default addSceneLevel;
