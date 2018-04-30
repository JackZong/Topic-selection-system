import { routerRedux } from 'dva/router'
import { queryList,queryIpAddr } from '../services/logs'
import { setCookie, getCookies } from '../utils/'
export default {
	namespace: 'logs',
	state: {
		list: []
	},
	subscriptions: {
		setup({ dispatch, history }) {
			history.listen((location) => {
				if(location.pathname === '/logs'){
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
      		if(res.data.length) {
      			yield put({
      				type: 'queryIpAddr',
      				payload: {
      					ip: res.data[0].log_loginip
      				}
      			})
      		}
      	}
      },
      *queryIpAddr({ payload }, { call, put, select}) {
      //	let res = yield call(queryIpAddr,payload)
      //	console.log(res)
      }
	},
	reducers: {
	 	queryListSuccess(state,action) {
	 		const { list, page } = action.payload
	 		return {
	 			...state,
	           list
	 		}
	 	}

	}
}