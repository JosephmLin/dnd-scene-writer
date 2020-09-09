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

const generateAddNewState = (sceneId, index, sceneLevelIndex, state) => {
  // Conditionally either insert an additional scene, or create a new scene level with this new scene in it.
  const addToExistingSceneLevel = adjust(
    sceneLevelIndex,
    evolve({
      scenes: insert(index, sceneId),
    })
  );

  const createNewSceneLevel = insert(sceneLevelIndex, {
    id: `sceneLevel - ${uuidv4()}`,
    scenes: [sceneId],
  });

  return applySpec({
    state: always(tags.ADD_NEW_SCENE_OR_SCENE_LEVEL_TAG),
    sceneLayout: pipe(
      prop('sceneLayout'),
      cond([
        [nth(sceneLevelIndex), addToExistingSceneLevel],
        [T, createNewSceneLevel],
      ])
    ),
  })(state);
};

const addSceneOrSceneLevel = (state) => ({
  payload: { sceneId, index, sceneLevelIndex },
}) => generateAddNewState(sceneId, index, sceneLevelIndex, state);

export default addSceneOrSceneLevel;
