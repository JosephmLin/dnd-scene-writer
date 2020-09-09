import {
  applySpec,
  always,
  pipe,
  prop,
  map,
  evolve,
  reject,
  equals,
  isEmpty,
} from 'ramda';
import { tags } from '../../action/sceneLayoutActions';

const removeScene = (state) => ({ payload: { id } }) =>
  applySpec({
    state: always(tags.REMOVE_SCENE_TAG),
    sceneLayout: pipe(
      prop('sceneLayout'),
      map(
        evolve({
          scenes: reject(equals(id)),
        })
      ),
      reject(pipe(prop('scenes'), isEmpty))
    ),
  })(state);

export default removeScene;
