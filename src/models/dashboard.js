import { queryList } from '../services/dashboard'
export default {
	namespace: 'dashboard',
	state: {
      list: []
	},
	subscriptions: {
      setup({ dispatch, history }) {
      	history.listen((location) => {
      		if(location.pathname === '/dashboard'){
      		  dispatch({
      		  	type: 'queryList'
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