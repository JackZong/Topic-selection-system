import { routerRedux } from 'dva/router'
import { queryList, updateProfile } from '../services/profile'
import { setCookie, getCookies } from '../utils/'
import swal from 'sweetalert2'
export default {
	namespace: 'profile',
	state: {
		list: {}
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((location) => {
				if(location.pathname === '/profile'){
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
      			  list: res.data
      			}
      		})
      	}
      },
      *updateProfile({ payload }, { call, put, select }) {
      	let res = yield call(updateProfile,payload)
      	if(res.code === 1) {
      		swal({
      			title: 'Update Profile Success !',
      			type: 'success',
      			timer: 2000
      		})
      		yield put({
      			type: 'queryList',
      			payload: {
      			  username: getCookies().username
      			}
      		})
      	}
      },
	},
	reducers: {
	 	queryListSuccess(state,action) {
	 		const { list } = action.payload
	 		return {
	 			...state,
	           list
	 		}
	 	}

	}
}