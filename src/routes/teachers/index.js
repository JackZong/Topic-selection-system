import React from 'react'
import { connect } from 'dva'
import MUIDataTable from 'mui-datatables'
const Teacher = ({ location, dispatch, teacher}) => {
	const { list } = teacher
	let data = []
	let order = ['mt_id','mt_name','mt_sex','mt_telephone','mt_email','jt_name','res_name']
	for(let i of list) {
	  let arr = []
	  let id 
	  for(let j in i) {
	    if(order.indexOf(j) !== -1){
	      arr[order.indexOf(j)] = i[j]
	    }
	    if (j === 'th_id') {
	      id = i[j]
	    }
	  }
	  data.push(arr)
	}
	const tableProps = {
		columns: ['工号','姓名','姓别','电话','邮箱','职称','系别'],
		data: data,
		options: {
		  filterType: 'dropdown'
		}
	}
	return (
		<div>
      <MUIDataTable 
        {...tableProps}
      />
      </div>
    )
}
function mapStateToProps({ teacher }) {
  return { teacher }
}
export default connect(mapStateToProps)(Teacher)