import React from 'react'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
} from 'material-ui/Dialog'
import {
  Button,
  Tooltip,
  TextField,
  MenuItem
} from 'material-ui'
import {
  AccountBox,
  BubbleChart,
  Edit
} from 'material-ui-icons'
import { connect } from 'dva'
class EditModal extends React.Component {
	constructor(props){
	  super(props)
	  console.log(this.props)
	  this.state = {
	  	open: this.props.thesischeck.editModal,
	  	dispatch: this.props.dispatch,
	  	th_id: this.props.thesischeck.th_id,
	  	state: 'N'
	  }
	}
	handChange = (name) => (event) => {
		this.setState({
         [name]: event.target.value
		})
	}
	onOk = () => {
      this.state.dispatch({
      	type: 'thesischeck/check',
      	payload: {
      		th_id: this.state.th_id,
      		th_ispass: this.state.state
      	}
      })
	}
	onCancel = () => {
      this.state.dispatch({
      	type: 'thesischeck/hideEditModal'
      })
	}
  componentWillReceiveProps(nextProps) {
  	console.log(nextProps,'nt')
      this.setState({
        open: nextProps.thesischeck.editModal,
        th_id: nextProps.thesischeck.th_id
      })
  	
  }
	render() {
	  const { th_id, open,state } = this.state
	  return (
	  	<Dialog open={open} onClose={this.onCancel}>
	  	 <DialogContent >
	  	   	<form >
	  	         <TextField
	  	           id="select-level"
	  	           select
	  	           label="State"
	  	           margin="dense"
	  	           value={state}
	  	           fullWidth
	  	           onChange={this.handChange('state')}
	  	         >
	  	           
	  	             <MenuItem key="Y" value="Y">
	  	               pass
	  	             </MenuItem>
					<MenuItem key="N" value="N">
					  No pass
					</MenuItem>
	  	         </TextField>
	  	     </form>
	  	 </DialogContent>
	  	 <DialogActions>
	  	   <Button color="primary" onClick={this.onCancel}>Cancel</Button>
	  	   <Button color="primary" onClick={()=>this.onOk()}>Submit</Button>
	  	 </DialogActions>
	  	</Dialog>
	  )
	}
}
function mapStateToProps({thesischeck}){
  return { thesischeck }
}
export default connect(mapStateToProps)(EditModal)