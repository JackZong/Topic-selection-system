import React from 'react'
import {
	Button
} from 'material-ui'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions
} from 'material-ui/Dialog'
import Style from './formmodal.less'
function FormModal({...props}){
  const { title,onOk, onCancel, open, content } = props
  console.log(content)
  return (
    <Dialog open={open} onClose={onCancel} classes={{paper:Style.paper}}>
     <DialogTitle>Thesis Apply Form</DialogTitle>
     <DialogContent >
       {content}
     </DialogContent>
     <DialogActions>
       <Button color="primary" onClick={onCancel}>Cancel</Button>
       <Button color="primary" onOk={onOk}>Submit</Button>
     </DialogActions>
    </Dialog>
  )
}
export default FormModal