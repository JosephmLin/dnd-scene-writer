import { pipe, objOf, tap } from 'ramda';

import { actions as sceneLevelActions } from '../redux/action/sceneLevelsActions';
import { actions as sceneActions } from '../redux/action/scenesActions';
import { getSceneSet } from '../redux/reducers/sceneLevelsReducer';
import { connect } from 'react-redux';

export const storePropKey = 'sceneSetsHOC';

/**
 * @function sceneSetsHOC
 * @description A functional higher order component that 
 * @param {*} WrappedComponent connects this component to the store, specifically
 */
export default function sceneSetsHOC(WrappedComponent) {
	const mapStateToProps = pipe(
		getSceneSet,
		objOf(storePropKey)
	)

	const mapDispatchToProps = dispatch => ({
		addSceneLevelDispatch: sceneSet => dispatch(sceneLevelActions.ADD_SCENE_LEVEL_ACTION(sceneSet)),
		removeSceneLevelDispatch: sceneLevel => dispatch(sceneLevelActions.REMOVE_SCENE_LEVEL_ACTION(sceneLevel)),
		addNewScene: sceneData => dispatch(sceneActions.UPDATE_SCENE_ACTION(sceneData)),
		removeScene: index => dispatch(sceneActions.REMOVE_SCENE_ACTION(index))
	});

	return connect(mapStateToProps, mapDispatchToProps)(WrappedComponent);
}