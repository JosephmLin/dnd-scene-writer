import { pipe, objOf } from 'ramda';
import { actions as npcActions } from '../../redux/action/npcActions';
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
    updateOrAddNPC: (sceneData) =>
      dispatch(npcActions.UPDATE_OR_ADD_NPC_ACTION(sceneData)),
    // removeNPC: (index) => dispatch(npcActions.REMOVE_NPC_ACTION(index)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}
