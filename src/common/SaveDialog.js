import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * @typedef SaveDialogProps
 * @prop {Function} handleClickOpen 
 * @prop {Function} handleClose 
 * @prop {Function} handleSave
 * @prop {boolean} open
 * @prop {string} title
 * @prop {React.Component} children
 */
export default function SaveDialog(props) {
	return (
		<Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
			<DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
			<DialogContent>
				{props.children}
			</DialogContent>
			<DialogActions>
				<Button onClick={props.handleClose} color="primary">
					Cancel
          </Button>
				<Button onClick={props.handleSave} color="primary">
					Save
          </Button>
			</DialogActions>
		</Dialog>
	);
}