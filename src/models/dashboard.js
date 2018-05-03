import { queryList } from '../services/dashboard'
import { getMyMsg } from '../services/message'
import { getCookies } from '../utils'
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
      		  dispatch({
      		  	type: 'getMyMsg',
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
	  *getMyMsg({ payload },{ call, put, select }) {
        let data = yield call(getMyMsg,payload)
        if(data.code ===1) {
        	yield put({
        		type: 'getMyMsgSuccess',
        		payload: {
        		  data: data.data
        		}
        	})
        }
	  }
	},
	reducers: {
		queryListSuccess(state,action) {
			const { list, page } = action.payload
			return {
				...state,
	          list
			}
		},
		getMyMsgSuccess(state,action) {
			const { data } = action.payload
			localStorage.setItem('msg',JSON.stringify(data))
		}
	}
}