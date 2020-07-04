import SaveScene from '../actions/saveScene'

const initialState = {
	state: SaveScene.tags[ 0 ],
	scenes: []
};

function (state = initialState, action) {
	return state
}