import { queryList } from '../services/mythesis'
import { getCookies } from '../utils/'
export default {
  namespace: 'mythesis',
  state: {
  	list: []
  },
  subscriptions: {
    setup({ dispatch, history }) {
    	history.listen((location) => {
    		if(location.pathname === '/mythesis'){
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
  	}
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