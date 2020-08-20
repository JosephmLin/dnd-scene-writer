import { pipe, objOf } from 'ramda';
import { actionTypes, npcsApi } from '../../redux/action/npcsApi';
import { getNPCs } from '../../redux/reducers/npcReducer';
import { connect } from 'react-redux';

export const storePropKey = 'npcHOC';

/**
 * @function npcHOC
 * @description Retrieves data/functionality specific for SceneCard
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function npcStoreHOC(WrappedComponent) {
  const mapStateToProps = pipe(getNPCs, objOf(storePropKey));

  const mapDispatchToProps = (dispatch) => ({
    updateOrAddNPC: (sceneData) => {
      dispatch(npcsApi(actionTypes.create, sceneData));
      dispatch(npcsApi(actionTypes.get, sceneData));
    },
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
