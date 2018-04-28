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
		list.forEach((item,index) => {
			let arr = []
			for(let i in item) {
				let index = order.indexOf(i)
				if(index > -1) {
				  arr[index] = item[i]
				}
			}
			data.push(arr)
		})
		// fuck bug
		let dataRedux = data.map((item,index) => {
			return item.map((item2,index2) => {
				console.log(item2)
				if(item2 === 'D'){
					item2 = 'Success'
				}else if(item2 === 'A') {
					item2 = 'Pending'
				}else if(item2 === 'B') {
					item2 = 'Pending'
				}else if(item2 === 'C') {
					item2 = 'Pending'
				}
				return item2
			})
		})
		const tableProps = {
			tableHead: ['Thesis','Mentor','Sex','Phone','State'],
			tableData: dataRedux,
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