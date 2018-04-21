import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard } from 'components/'
import { routerRedux } from 'dva/router'
import qs from 'query-string'
import {
  Button
} from 'material-ui'
import {
  AccountBox,
  BubbleChart,
  Edit
} from 'material-ui-icons'
import EditModal from './editmodal'
const Thesispresel = ({location,dispatch,thesispresel}) => {
  let { list, page, editModal, record } = thesispresel
  	let data = []
  	let order = ['Thesis.th_name','student.st_name','st_id','student.st_sex','student.st_telephone','student.st_qq','psr_state']
  	list.map((item,index) => {
  		let arr = []
  		let disabled = false
  		for(let i in item) {
           arr[order.indexOf(i)] = item[i]
           if(i === 'psr_state') {
           	if(item[i] === 'D') {
           		disabled = true
           	}
           }
  		}
  		arr.push(<Button variant='fab' color='secondary' aria-label='edit' disabled={disabled} className="btnedit" onClick={()=>showEdit(arr)}><Edit/></Button>)
  		data.push(arr)
  		return item
  	})
  const tableProps = {
  	tableHead: ['Thesis','Name','No','Sex','Phone','QQ','State','Action'],
  	tableData: data,
  	page: page,
  	paginationShow: false,
  	handleChangePage: (e,num) => {
  	  dispatch(routerRedux.push({
  	    pathname: location.pathname,
  	    search: qs.stringify({
  	      page: num,
  	      page_limit: page.page_limit || 20
  	    })
  	  }
  	  ))
  	},
  	handleChangeRowsPerPage:(e) => {
  	 dispatch(routerRedux.push({
  	   pathname: location.pathname,
  	   search: qs.stringify({
  	     page: page.page,
  	     page_limit:e.target.value || 20
  	   })
  	 }
  	 ))
  	}
  }
  const showEdit = (record) => {
      dispatch({
      	type: 'thesispresel/showEditModal',
      	payload: {
      	  record: record
      	}
      })
  	}
  let editModalProps = {
  	psr_state: record ? record.psr_state : 'A',
  	open: editModal,
  	onOk: (data) => {
  		console.log(data)

  	},
  	onCancel: () => {
     dispatch({
     	type: 'thesispresel/hideEditModal'
     })
  	}
  }
  return (
  	<div>
    <RegularCard 
      cardTitle="Pre Selection State"
      cardIcon={BubbleChart}
      content={<Table {...tableProps}/>}
    />
    <EditModal />
    </div>
  )
}
function mapStateToProps({ thesispresel }) {
  return { thesispresel }
}
export default connect(mapStateToProps)(Thesispresel)