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
const Thesis = ({location,dispatch}) => {
  console.log(dispatch)
  var Actions = (
   <IconButton color="primary">
    <Add/>
   </IconButton>
  )
  var name = (
   <div>
   <Avatar style={{float:'left'}}>数</Avatar>
    <span style={{float:'left'}}>Metaslpoit网络攻击平台的应用研究</span>
   </div>
  )
	return (
      <div>
      <RegularCard
        content={
          <Table
            tableHeaderColor="primary"
            tableHead={["ID","Name", "Mentor", "Max","State","Actions"]}
            tableData={[
              [name, "Niger", "Oud-Turnhout", "$36,738",Actions],
              ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
              ["Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
              ["Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
              ["Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
              ["Mason Porter", "Chile", "Gloucester", "$78,615"]
            ]}
          />}
          cardTitle="标题"
          cardIcon={Assignment}/>
      </div>

	)
}
export default connect()(Thesis)