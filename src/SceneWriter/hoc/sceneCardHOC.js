import { pipe, objOf } from 'ramda';
import { actions as sceneActions } from '../../redux/action/scenesActions';
import { getScene } from '../../redux/reducers/scenesReducer';
import { connect } from 'react-redux';

export const storePropKey = 'sceneHOC';

/**
 * @function sceneHOC
 * @description Retrieves data/functionality specific for SceneCard
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function sceneCardHOC(WrappedComponent) {
  const mapStateToProps = pipe(getScene, objOf(storePropKey));

  const mapDispatchToProps = (dispatch) => ({
    updateScene: (sceneData) =>
      dispatch(sceneActions.UPDATE_SCENE_ACTION(sceneData)),
    removeScene: (index) => dispatch(sceneActions.REMOVE_SCENE_ACTION(index)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
