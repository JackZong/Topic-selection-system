import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard, IconButton } from '../../components/'
import {
  Alarm,
  Add,
  Edit,
  BorderColor
} from 'material-ui-icons'
import {
	Tooltip,
	Button,
	TextField,
	MenuItem
} from 'material-ui'
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogActions,
} from 'material-ui/Dialog'
import Style from './index.less'
import constant from '../../utils/constant'
import { getCookies } from '../../utils/'
const { ThesisLevel, ThesisField } = constant
let now = new Date()
const ThesisApply = ({dispatch,location,thesisapply}) => {
  const { list, page, modalShow, record, editModal } = thesisapply
  const handleChangePage = () => {

  }
  const handleChangeRowsPerPage = () => {

  }
  const actions = () => {

  }
  const handleModal = () => {
  	dispatch({
  	  type: 'thesisapply/showModal'
  	})
  }
  let levelArr = [] 
  let fieldArr = []
  Object.keys(ThesisLevel).map(item => {
  	levelArr.push({value: item,label: ThesisLevel[item]})
  	return item
  })
  Object.keys(ThesisField).map(item => {
  	fieldArr.push({value: item,label: ThesisField[item]})
  	return item
  })
  class FormModal extends React.Component {
  	constructor(props){
  	  super(props)
  	  this.state = {
  	  	level: this.props.level || null,
  	  	field: this.props.field || null,
  	  	maxnum: this.props.maxnum,
  	  	title: this.props.title,
  	  	requirement:  this.props.requirement,
  	  	levelArr: this.props.levelArr,
  	  	fieldArr: this.props.fieldArr,
  	  	open: this.props.open,
  	  	onCancel: this.props.onCancel,
  	  	onOk: this.props.onOk
  	  }
  	}
  	handChange = (name) => (event) => {
  		this.setState({
          [name]: event.target.value
  		})
  	}
    componentWillReceivedProps(nexProps) {
      this.setState({
        open: nexProps.open
      })
    }
  	render() {
  	  const { levelArr, fieldArr, level, field, onCancel, open, onOk,title,requirement,maxnum } = this.state
  	  return (
  	  	<Dialog open={open} onClose={onCancel} classes={{paper:Style.paper}}>
  	  	 <DialogTitle>论文申报</DialogTitle>
  	  	 <DialogContent >
  	  	   	<form >
  	  	      <TextField
  	  	        autoFocus
  	  	        margin="dense"
  	  	        id="title"
  	  	        label="题目"
  	  	        type="text"
  	  	        fullWidth
                defaultValue={title}
  	  	        onChange={this.handChange('title')}
  	  	       />
  	  	       <TextField
  	  	         multiline
  	  	         rows="6"
  	  	         margin="dense"
  	  	         id="requirement"
  	  	         label="要求"
  	  	         fullWidth
  	  	         margin="normal"
  	  	         id="multiline-flexible"
                 defaultValue={requirement}
                 type="text"
  	  	         onChange={this.handChange('requirement')}
  	  	        />
  	  	        <TextField
  	  	          margin="dense"
  	  	          id="requirement"
  	  	          label="容量"
  	  	          type="number"
  	  	          fullWidth
                  defaultValue={parseInt(maxnum)}
  	  	          InputLabelProps={{
  	  	            shrink: true,
  	  	          }}
  	  	          onChange={this.handChange('maxnum')}
  	  	         />
  	  	         <TextField
  	  	           id="select-level"
  	  	           select
  	  	           label="等级"
  	  	           margin="dense"
  	  	           value={level}
  	  	           fullWidth
  	  	           onChange={this.handChange('level')}
  	  	         >
  	  	           {levelArr.map(option => (
  	  	             <MenuItem key={option.value} value={option.value}>
  	  	               {option.label}
  	  	             </MenuItem>
  	  	           ))}
  	  	         </TextField>
  	  	         <TextField
  	  	           id="select-field"
  	  	           select
  	  	           label="类别"
  	  	           margin="dense"
  	  	           value={field}
  	  	           fullWidth
  	  	           onChange={this.handChange('field')}
  	  	         >
  	  	           {fieldArr.map(option => (
  	  	             <MenuItem key={option.value} value={option.value}>
  	  	               {option.label}
  	  	             </MenuItem>
  	  	           ))}
  	  	         </TextField>
  	  	     </form>
  	  	 </DialogContent>
  	  	 <DialogActions>
  	  	   <Button color="primary" onClick={onCancel}>取消</Button>
  	  	   <Button color="primary" onClick={() => onOk(this.state)}>确定</Button>
  	  	 </DialogActions>
  	  	</Dialog>
  	  )
  	}
  }
  const formModalProps = {
  	onOk:(data) => {
      dispatch({
      	type: 'thesisapply/addThesis',
      	payload: {
      	  th_name: data.title,
      	  th_thl_id: parseInt(data.level),
      	  th_thf_id: parseInt(data.field),
      	  th_maxnum: parseInt(data.maxnum),
      	  th_requirement: data.requirement,
          th_mt_id: getCookies().username,
          th_year: '' + now.getFullYear(),
          th_d_id: '08'
      	}
      })
  	},
  	onCancel: () => {
      dispatch({
      	type:'thesisapply/hideModal'
      })
  	},
  	open: modalShow,
  	levelArr: levelArr,
  	fieldArr: fieldArr
  }
  let data = []
  let order = ['th_id','th_name','ThesisField.thf_field','ThesisLevel.thl_level','th_maxnum','th_requirement','th_ispass']
  for(let i of list) {
    let arr = []
    let id 
    let mt_id
    let disabled = false
    for(let j in i) {
      if(order.indexOf(j) !== -1){
        arr[order.indexOf(j)] = i[j]
      }
      if (j === 'th_id') {
        id = i[j]
      }
      if(j === 'th_ispass') {
        if(i[j] === 'Y') {
          disabled = true
        }
      }
    }
    arr.push(<Button variant='fab' color='secondary' aria-label='edit' disabled={disabled} className="btnedit" onClick={()=>showEdit(arr)}><Edit/></Button>)
    data.push(arr)
  }
  const showEdit = (record) => {
    let obj = {}
    record.map((item,index) => {
      if(order[index]) {
        obj[order[index]] = item
      }
     return item
    })
    dispatch({
      type: 'thesisapply/editModalShow',
      payload: obj
    })
  }
  let levelArrC = ['11','12','13']
  let levelArrZ = ['困难','中等','一般']
  let fieldArrZ = ['理论研究','应用开发']
  let fieldArrC = ['10','11']
  const editModalProps = {
    onOk:(data) => {
      dispatch({
        type: 'thesisapply/updateThesis',
        payload: {
          th_name: data.title,
          th_thl_id: parseInt(data.level),
          th_thf_id: parseInt(data.field),
          th_maxnum: parseInt(data.maxnum),
          th_requirement: data.requirement,
          th_id: record.th_id
        }
      })
    },
    onCancel: () => {
      dispatch({
        type:'thesisapply/editModalHide'
      })
    },
    open: editModal,
    levelArr: levelArr,
    fieldArr: fieldArr,
    level: '11',
    field: '10',
    title: record ? record.th_name : '',
    requirement: record ? record.requirement : '',
    maxnum: record ? record.maxnum : ''
  }
  return (
  	<div>
  	<div className={Style.actions}>
  	  <Tooltip title="Add A Thesis">
  	   <Button variant="fab" color="primary" aria-label="add" onClick={handleModal}>
  	     <Add />
  	   </Button>
  	  </Tooltip>
  	</div>
    <RegularCard
      cardTitle="我申报的论文"
      cardIcon={Alarm}
      content={
      	<Table
      	  tableHeaderColor="primary"
      	  tableHead={["编号","题目","类别","等级","容量","要求","状态","操作"]}
      	  tableData={data}
      	  page={page}
      	  handleChangeRowsPerPage={handleChangeRowsPerPage}
      	  handleChangePage={handleChangePage}
          paginationShow={false}
      	 />
      }
    />
    <FormModal {...formModalProps}/>
    <FormModal {...editModalProps}/>
    </div>
  )
}
function mapStateToProps({thesisapply}) {
  return { thesisapply }
}
export default connect(mapStateToProps)(ThesisApply)