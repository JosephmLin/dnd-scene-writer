import React from 'react';

function Card(props) {
	const dragStart = e => {
		const target = e.target;
		console.log(e);
		e.dataTransfer.setData('obj_id', props.id);

		setTimeout(() => {
			target.style.opacity = ".5"
		}, 0);
	};


	const dragOver = e => {
		e.stopPropagation();
	}

	const drop = e => {
		console.log('drop');
		const target = e.target;
		target.style.opacity = "1";
	}
	return (
		<div
			id={props.id}
			className={props.className}
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDrop={drop}
		>
			{props.children}
		</div>
	)
}

export default Card;