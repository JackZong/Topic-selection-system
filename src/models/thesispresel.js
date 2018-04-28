import { queryList, updatePre,updateCheck } from '../services/thesispresel'
import { getCookies } from '../utils/'
import Swal from 'sweetalert2'
export default {
  namespace: 'thesispresel',
  state: {
  	list: [],
  	page: {
  	  count: 0,
  	  page: 1,
  	  page_limit: 20
  	},
    editModal: false,
    record: null
  },
  subscriptions: {
    setup({ dispatch, history }) {
    	history.listen((location) => {
    		if(location.pathname === '/thesispresel'){
    		  dispatch({
    		  	type: 'queryList',
    		  	payload: {
              username: getCookies().username
    		  	}
    		  })
    		}
    	})
    }
  },
  effects: {
  	*queryList({ payload }, { call, put, select }) {
  		let res = yield call(queryList,payload)
  		if(res.code === 1) {
  			yield put({
  				type: 'queryListSuccess',
  				payload: {
  					list: res.data,
  					page: res.page
  				}
  			})
  		}
  	},
    *updatePre({payload},{ call, put, select }) {
   /*   let isOk = yield call(updateCheck,payload)
      console.log(isOk)*/
      let res = yield call(updatePre,payload)
      if(res.code === 1) {
        yield put({
          type: 'hideEditModal'
        })
        yield put({
          type: 'queryList',
          payload: {
            username: getCookies().username
          }
        })
        Swal({
          title: 'Update Success!',
          type: 'success',
          timer: 2000
        })
      } else if(res.code === -1){
        yield put({
          type: 'hideEditModal'
        })
        Swal({
          title: 'Update Failed!',
          type: 'error',
          text: res.msg,
          timer: 2000
        })
      } else {
        yield put({
          type: 'hideEditModal'
        })
        Swal({
          title: 'Update Failed!',
          type: 'error',
          timer: 2000
        })
      }
    }
  },
  reducers: {
  	queryListSuccess(state,action) {
  		const { list, page } = action.payload
  		return {
  			...state,
            list,
            page: {
              ...page
            }
  		}
  	},
    showEditModal(state,action) {
      const { record } = action.payload
      return {
        ...state,
        editModal: true,
        record
      }
    },
    hideEditModal(state,action) {
      return {
        ...state,
        editModal: false
      }
    }
  }
}