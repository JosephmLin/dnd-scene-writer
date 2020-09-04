import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

/**
 * @typedef CommonDialogProps
 * @prop {Function} close
 * @prop {Function} save
 * @prop {boolean} open
 * @prop {string} title
 * @prop {React.Component} children
 */
export default function CommonDialog({ save, open, close, title, children }) {
  return (
    <Dialog open={open} onClose={close} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
