import { pipe, objOf } from 'ramda';

import { actions as sceneLayoutActions } from '../../redux/action/sceneLayoutActions';
import { actions as sceneActions } from '../../redux/action/scenesActions';
import { getSceneLayout } from '../../redux/reducers/sceneLayoutReducer';
import { connect } from 'react-redux';
import fetchNpcs, { actionTypes } from '../../redux/action/npcsApi';

export const storePropKey = 'sceneLevelsHOC';

/**
 * @function sceneLevelssHOC
 * @description A functional higher order component that
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function sceneSetsHOC(WrappedComponent) {
  const mapStateToProps = pipe(getSceneLayout, objOf(storePropKey));

  const mapDispatchToProps = (dispatch) => ({
    addSceneLevelDispatch: (sceneSet) =>
      dispatch(
        sceneLayoutActions.ADD_NEW_SCENE_OR_SCENE_LEVEL_ACTION(sceneSet)
      ),
    removeSceneLevelDispatch: (sceneLevel) =>
      dispatch(sceneLayoutActions.REMOVE_SCENE_LEVEL_ACTION(sceneLevel)),
    changeLayoutDispatch: (provided) =>
      dispatch(sceneLayoutActions.CHANGE_SCENE_LAYOUT(provided)),
    addNewSceneDispatch: (sceneData) =>
      dispatch(sceneActions.UPDATE_OR_ADD_SCENE_ACTION(sceneData)),
    removeSceneDispatch: (index) =>
      dispatch(sceneActions.REMOVE_SCENE_ACTION(index)),
    fetchNpcs: () => dispatch(fetchNpcs(actionTypes.get)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
