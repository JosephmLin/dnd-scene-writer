import SortableParent from './SortableParent';
import SortableObject from './SortableObject';
import React from 'react';
import './SortablePage.css';

const SortablePrototype = () => {
	return (<>
		<SortableParent
			id="sortableParent-1"
			className="SortableParent"
		>
			<SortableObject
				id="sortableObject-1"
				className="SortableObject"
				draggable="true"
			>
				Hello World #1;
			</SortableObject>
		</SortableParent>
		<SortableParent
			id="sortableParent-2"
			className="SortableParent"
		>
			<SortableObject
				id="sortableObject-2"
				className="SortableObject"
				draggable="true"
			>
				Hello World #2
			</SortableObject>
		</SortableParent>
	</>
	);
}

export default SortablePrototype;