import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard } from 'components/'
import { routerRedux } from 'dva/router'
import qs from 'query-string'
import {
  AccountBox
} from 'material-ui-icons'
import MUIDataTable from 'mui-datatables'
const StudentList = ({location,dispatch,student}) => {
	const { list, page } = student
	let data = []
	let order = ['st_id','st_name','st_sex','st_grade','st_class','st_telephone','st_qq','st_email']
	list.map((item,index) => {
		let arr = []
		for(let i in item) {
            arr[order.indexOf(i)] = item[i]
		}
		data.push(arr)
		return item
	})
	const tableProps = {
		columns: ['学号','姓名','性别','年级','班级','电话','QQ','邮箱'],
		data: data,
		page: page,
		paginationShow: true,
		options: {
			filterType: 'dropdown'
		}
		// handleChangePage: (e,num) => {
		//   dispatch(routerRedux.push({
		//     pathname: location.pathname,
		//     search: qs.stringify({
		//       page: num,
		//       page_limit: page.page_limit || 20
		//     })
		//   }
		//   ))
		// },
		// handleChangeRowsPerPage:(e) => {
		//  dispatch(routerRedux.push({
		//    pathname: location.pathname,
		//    search: qs.stringify({
		//      page: page.page,
		//      page_limit:e.target.value || 20
		//    })
		//  }
		//  ))
		// }
	}
	return (
      <RegularCard 
        cardTitle="学生信息中心"
        cardIcon={AccountBox}
        content={<MUIDataTable {...tableProps}/>}
      />
	)
}
function mapStateToProps({ student }) {
	return { student }
}
export default connect(mapStateToProps)(StudentList)