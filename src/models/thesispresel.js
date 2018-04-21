import { queryList } from '../services/thesispresel'
import { getCookies } from '../utils/'
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