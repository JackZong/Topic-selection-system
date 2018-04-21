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
import Style from './index.less'
import constant from '../../utils/constant'
const { PsrState } = constant
class EditModal extends React.Component {
	constructor(props){
	  super(props)
	  this.state = {
	  	psr_state: this.props.record ? this.props.record.psr_state : null,
	  	open: this.props.open,
	  	dispatch: this.props.dispatch
	  }
	  console.log(this,props)
	}
	handChange = (name) => (event) => {
		this.setState({
        [name]: event.target.value
		})
	}
	onOk = () => {
  
	}
	onCancel = () => {
      this.state.dispatch({
      	type: 'thesispresel/hideEditModal'
      })
	}
  componentWillReceiveProps(nextProps) {
  	console.log(nextProps,'jjjj')
    this.setState({
      open: nextProps.thesispresel.editModal
    })
  }
	render() {
	  const { psr_state, open } = this.state
	  let stateArr = Object.keys(PsrState).map((item,index) => {
        return {label: item,value: item}
	  })
	  return (
	  	<Dialog open={open} onClose={this.onCancel} classes={{paper:Style.paper}}>
	  	 <DialogContent >
	  	   	<form >
	  	         <TextField
	  	           id="select-level"
	  	           select
	  	           label="State"
	  	           margin="dense"
	  	           value={psr_state}
	  	           fullWidth
	  	           onChange={this.handChange('psr_state')}
	  	         >
	  	           {stateArr.map(option => (
	  	             <MenuItem key={option.value} value={option.value}>
	  	               {option.label}
	  	             </MenuItem>
	  	           ))}
	  	         </TextField>
	  	     </form>
	  	 </DialogContent>
	  	 <DialogActions>
	  	   <Button color="primary" onClick={this.onCancel}>Cancel</Button>
	  	   <Button color="primary" onClick={this.onOk(this.state)}>Submit</Button>
	  	 </DialogActions>
	  	</Dialog>
	  )
	}
}
function mapStateToProps({thesispresel}){
  return { thesispresel }
}
export default connect(mapStateToProps)(EditModal)