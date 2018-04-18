import React from 'react'
import { connect } from 'dva'
import Table from 'components/Table/Table'
import RegularCard from 'components/Cards/RegularCard'
import {
	Card,
  IconButton,
  Avatar
} from 'material-ui'
import {
	Assignment,
  Add
} from 'material-ui-icons'
const Thesis = ({ location, dispatch, thesis }) => {
  const { list } = thesis
  let order = ['th_id','th_name','mentor.mt_name','ThesisField.thf_field','ThesisLevel.thl_level','th_maxnum','th_state']
  let data = []
  for(let i of list) {
    let arr = []
    for(let j in i) {
      arr[order.indexOf(j)] = i[j]
    }
    data.push(arr)
  }
  console.log(data)
  var Actions = (
   <IconButton color="primary">
    <Add/>
   </IconButton>
  )
	return (
      <div>
      <RegularCard
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={["ID","Name", "Mentor", "Field","Level","Max","State","Actions"]}
            tableData={data}
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