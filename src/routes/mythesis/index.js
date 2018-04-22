import React from 'react'
import { connect } from 'dva'
import { Table, RegularCard } from 'components/'
import {
  AccountBox
} from 'material-ui-icons'
const Mythesis = ({location,dispatch,mythesis}) => {
	const { list } = mythesis
		let data = []
		let order = ['Thesis.th_name','mentor.mt_name','mentor.mt_sex','mentor.mt_telephone','psr_state']
		list.map((item,index) => {
			let arr = []
			for(let i in item) {
				if(order.indexOf(i) > -1) {
					if(i === 'psr_state') {
						if(item[i] !== 'D') {
                           item[i] ='Pending'
						} else {
							item[i] = 'Success'
						}
					}
				  arr[order.indexOf(i)] = item[i]
				}
			}
			data.push(arr)
			return item
		})
		const tableProps = {
			tableHead: ['Thesis','Mentor','Sex','Phone','State'],
			tableData: data,
			paginationShow: false
		}
	return (
     <RegularCard 
            cardTitle="My Thesis Info"
            cardIcon={AccountBox}
            content={<Table {...tableProps}/>}
          />
	)
}
function mapStateToProps({ mythesis }) {
	return { mythesis }
}
export default connect(mapStateToProps)(Mythesis)