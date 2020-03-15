import React from 'react'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


export const Modal = ({error, onClick, onClose, message }) => {

  return(
    <Dialog
    open={error}
    onClose={onClick}
    aria-labelledby="draggable-dialog-title"
  >
    <Paper>
      {message}
      <Button onClick={onClose}>Fechar</Button>
    </Paper>
  </Dialog>
  )
}

export default Modal
