import React from 'react'
import { connect } from 'dva'
import Table from 'components/Table/Table'
import RegularCard from 'components/Cards/RegularCard'
import { routerRedux } from 'dva/router'
import qs from 'query-string'
import { getCookies } from '../../utils/'
import {
	Card,
  IconButton,
  Avatar
} from 'material-ui'
import {
	Assignment,
  Add
} from 'material-ui-icons'
console.log(getCookies())
const Thesis = ({ location, dispatch, thesis }) => {
  const { list, page } = thesis
  let order = ['th_id','th_name','mentor.mt_name','ThesisField.thf_field','ThesisLevel.thl_level','th_maxnum','th_state']
  let data = []
  const addThesis = (id) =>{
    console.log(e)
  }
  var Actions = (id) => {
    return ( 
      <IconButton color="primary" onClick={(obj) => addThesis(obj)}>
        <Add/>
      </IconButton>
    )
  }
  for(let i of list) {
    let arr = []
    let id 
    let mt_id
    for(let j in i) {
      arr[order.indexOf(j)] = i[j]
      if (j === 'th_id') {
        id = i[j]
      }
      if(j === 'mt_id') {
        mt_id = i[j]
      }
    }
    arr.push(Actions({id: id,mt_id:mt_id}))
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
            tableHead={["ID","Name", "Mentor", "Field","Level","Max","State","Actions"]}
            tableData={data}
            page={page}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleChangePage={handleChangePage}
            actions={Actions}
          />}
          cardTitle="标题"
          cardIcon={Assignment}/>
      </div>

	)
}
function mapStateToProps({ thesis }){
  return { thesis }
}
export default connect(mapStateToProps)(Thesis)