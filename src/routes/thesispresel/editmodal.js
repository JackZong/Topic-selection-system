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
	  console.log(this.props)
	  this.state = {
	  	psr_state: this.props.thesispresel.record ? this.props.thesispresel.record.psr_state : null,
	  	open: this.props.open,
	  	dispatch: this.props.dispatch,
	  	st_id: this.props.thesispresel.record ? this.props.thesispresel.record.st_id : null,
	  	mt_id: this.props.thesispresel.record ? this.props.thesispresel.record.mt_id : null,
	  	th_id: this.props.thesispresel.record ? this.props.thesispresel.record.th_id : null
	  }
	}
	handChange = (name) => (event) => {
		this.setState({
         [name]: event.target.value
		})
	}
	onOk = () => {
		console.log(this.state,'onok')
		this.props.dispatch({
			type: 'thesispresel/updatePre',
			payload: {
				psr_state: this.state.psr_state,
				st_id: this.state.st_id,
				mt_id: this.state.mt_id,
				th_id: this.state.th_id
			}
		}) 
		if(this.state.psr_state === 'D') {
			dispatch({
				type: 'thesispresel/update',
				payload: {
					psr_state: this.state.psr_state
				}
			}) 
		}
	}
	onCancel = () => {
      this.state.dispatch({
      	type: 'thesispresel/hideEditModal'
      })
	}
  componentWillReceiveProps(nextProps) {
  	if(nextProps.thesispresel.record) {
      this.setState({
        open: nextProps.thesispresel.editModal,
        st_id: nextProps.thesispresel.record.st_id,
        mt_id: nextProps.thesispresel.record.mt_id,
        th_id: nextProps.thesispresel.record.th_id
      })
  	}
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
	  	   <Button color="primary" onClick={()=>this.onOk()}>Submit</Button>
	  	 </DialogActions>
	  	</Dialog>
	  )
	}
}
function mapStateToProps({thesispresel}){
  return { thesispresel }
}
export default connect(mapStateToProps)(EditModal)