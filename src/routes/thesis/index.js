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
  Avatar,
  Button
} from 'material-ui'
import {
	Assignment,
  Add
} from 'material-ui-icons'
import swal from 'sweetalert2'
const Thesis = ({ location, dispatch, thesis }) => {
  const { list, page } = thesis
  let order = ['th_id','th_name','mentor.mt_name','ThesisField.thf_field','ThesisLevel.thl_level','th_maxnum','th_state']
  let data = []
  const addThesis = (obj) => {
    console.log(obj)
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        dispatch({
          type: 'thesis/preselAdd',
          payload: {
            st_id: obj.s_id,
            mt_id: obj.mt_id,
            th_id: obj.id
          }
        })
        swal(
          'Submit!',
          'Your thesis has been selection',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swal(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  var Actions = (obj) => {
    return ( 
      <Button variant='fab' color='secondary' aria-label='edit' className="btnedit" onClick={() => addThesis(obj)}>
        <Add/>
      </Button>
    )
  }
  for(let i of list) {
    let arr = []
    let id 
    let mt_id
    for(let j in i) {
      if(order.indexOf(j) !== -1){
        arr[order.indexOf(j)] = i[j]
      }
      if (j === 'th_id') {
        id = i[j]
      }
      if(j === 'th_mt_id') {
        mt_id = i[j].replace(/\s/g,'')
      }
    }
    arr.push(Actions({id: id,mt_id:mt_id,s_id:getCookies().username}))
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
            paginationShow={true}
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