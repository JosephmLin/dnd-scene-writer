import React from 'react';

// Drag and Drop
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ReorderableList = () => {
	return <DndProvider backend={HTML5Backend}>

	</DndProvider>
}

export default ReorderableList