import { pipe, objOf } from 'ramda';

import { actions as sceneLevelActions } from '../../redux/action/sceneLevelsActions';
import { actions as sceneActions } from '../../redux/action/scenesActions';
import { getSceneLevels } from '../../redux/reducers/sceneLevelsReducer';
import { connect } from 'react-redux';

export const storePropKey = 'sceneLevelsHOC';

/**
 * @function sceneLevelssHOC
 * @description A functional higher order component that
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function sceneSetsHOC(WrappedComponent) {
  const mapStateToProps = pipe(getSceneLevels, objOf(storePropKey));

  const mapDispatchToProps = (dispatch) => ({
    addSceneLevelDispatch: (sceneSet) =>
      dispatch(sceneLevelActions.ADD_NEW_SCENE_OR_SCENE_LEVEL_ACTION(sceneSet)),
    removeSceneLevelDispatch: (sceneLevel) =>
      dispatch(sceneLevelActions.REMOVE_SCENE_LEVEL_ACTION(sceneLevel)),
    moveSceneLevelDispatch: (fromIndex, toIndex) =>
      dispatch(sceneLevelActions.MOVE_SCENE_LEVEL_ACTION(fromIndex, toIndex)),
    moveSceneDispatch: (fromIndex, toIndex) =>
      dispatch(sceneLevelActions.MOVE_SCENE_ACTION(fromIndex, toIndex)),
    addNewSceneDispatch: (sceneData) =>
      dispatch(sceneActions.UPDATE_SCENE_ACTION(sceneData)),
    removeSceneDispatch: (index) =>
      dispatch(sceneActions.REMOVE_SCENE_ACTION(index)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
