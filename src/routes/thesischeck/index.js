import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard } from 'components/'
import {
	Assignment,
	Add,
	Edit
} from 'material-ui-icons'
import swal from 'sweetalert2'
import {
	Button
} from 'material-ui'
import { routerRedux } from 'dva/router'
import qs from 'query-string' 
import EditForm from './editmodal.js'
const ThesisCheck = ({ location, dispatch, thesischeck }) => {
	const { list,page } = thesischeck
	let order = ['th_id','th_name','th_requirement','mentor.mt_name','ThesisField.thf_field','ThesisLevel.thl_level','th_maxnum','th_ispass']
	let data = []
	const checkThesis = (obj) => {
	  dispatch({
	  	type: 'thesischeck/showEditModal',
	  	payload: {
	  		th_id: obj.th_id
	  	}
	  })
	}
	var Actions = (obj) => {
	  return ( 
	    <Button 
	      variant='fab' 
	      color='secondary' 
	      aria-label='edit' 
	      className="btnedit" 
	      onClick={() => checkThesis(obj)}
	      disabled={obj.disabled}>
	        <Edit/>
	    </Button>
	  )
	}

	for(let i of list) {
	  let arr = []
	  let id 
	  let disabled = false
	  for(let j in i) {
	    if(order.indexOf(j) !== -1){
	      arr[order.indexOf(j)] = i[j]
	    }
	    if (j === 'th_id') {
	      id = i[j]
	    }
	    if(j === 'th_ispass') {
	    	disabled = false
	    }
	  }
	  arr.push(Actions({th_id: id,disabled: disabled}))
	  data.push(arr)
	}
	const handleChangePage = (e,num) => {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        search: qs.stringify({
          page: num,
          page_limit: page.page_limit || 20
        })
      }
      ))
	}
	const handleChangeRowsPerPage = (e) => {
      dispatch(routerRedux.push({
        pathname: location.pathname,
        search: qs.stringify({
          page: page.page,
          page_limit:e.target.value || 20
        })
      }
      ))
	}
	return (
		<div>
      <RegularCard
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={["编号","题目","要求", "导师", "类别","级别","容量","状态","操作"]}
            tableData={data}
            page={page}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleChangePage={handleChangePage}
            paginationShow={true}
          />}
          cardTitle="论文审核列表"
          cardIcon={Assignment}/>
          <EditForm />
          </div>
	)
}
function mapStateToProps({ thesischeck }){
  return { thesischeck }
}
export default connect(mapStateToProps)(ThesisCheck)