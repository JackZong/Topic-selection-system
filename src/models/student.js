import { queryList } from '../services/student'
export default {
  namespace: 'student',
  state: {
  	list: [],
  	page: {
  	  count: 0,
  	  page: 1,
  	  page_limit: 20
  	}
  },
  subscriptions: {
    setup({ dispatch, history }) {
    	history.listen((location) => {
    		if(location.pathname === '/student'){
    		  dispatch({
    		  	type: 'queryList',
    		  	payload: {
    		  	  ...location.query
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
  	}
  }
}