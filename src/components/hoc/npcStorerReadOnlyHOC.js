import { pipe, objOf } from 'ramda';
import { getNPCs } from '../../redux/reducers/npcReducer';
import { connect } from 'react-redux';
import { actionTypes, npcsApi } from '../../redux/action/npcsApi';

export const storePropKey = 'npcHOCReadOnly';

/**
 * @function npcHOC
 * @description Retrieves data/functionality specific for SceneCard
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function npcStoreHOC(WrappedComponent) {
  const mapStateToProps = pipe(getNPCs, objOf(storePropKey));
  const mapDispatchToProps = (dispatch) => ({
    getNpcs: () => {
      dispatch(npcsApi(actionTypes.get));
    },
  });
  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
