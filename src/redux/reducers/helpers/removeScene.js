import {
  applySpec,
  always,
  pipe,
  prop,
  map,
  evolve,
  reject,
  equals,
} from 'ramda';
import { tags } from '../../../../redux/action/sceneLevelsActions';

const removeScene = (state) => ({ payload: { id } }) =>
  applySpec({
    state: always(tags.REMOVE_SCENE_TAG),
    sceneLevels: pipe(
      prop('sceneLevels'),
      map(
        evolve({
          scenes: reject(equals(id)),
        })
      )
    ),
  })(state);

export default removeScene;
