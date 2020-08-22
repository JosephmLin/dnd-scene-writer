import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * @typedef SaveDialogProps
 * @prop {Function} close
 * @prop {Function} save
 * @prop {boolean} open
 * @prop {string} title
 * @prop {React.Component} children
 */
export default function SaveDialog({ save, open, close, title, children }) {
  return (
    <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {/* <DialogActions>
        <Button onClick={close} color="primary">
          Cancel
        </Button>
        <Button onClick={save} color="primary">
          Save
        </Button>
      </DialogActions> */}
    </Dialog>
  );
}
