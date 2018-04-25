import { list, check } from '../services/thesischeck'
export default {
	namespace: 'thesischeck',
	state: {
     list: [],
     page: {
      page: 0, //current page
      count: 500, //total
      page_limit: 20
     },
     editModal: false,
     th_id: ''
	},
	subscriptions: {
      setup({ dispatch, history }) {
      	history.listen((location) => {
      		if(location.pathname === '/thesischeck'){
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
      *queryList({ payload },{ call, put, select }){
         let data = yield call(list,payload)
         if(data.code) {
         	yield put({
               type: 'queryListSuccess',
               payload: {
                  list: data.data,
                  page: data.page
               }
            })
         }
      },
      *check({payload},{call,put,select}) {
       let data = yield call(check,payload)
       if(data.code) {
        alert('check success')
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
      return {
        ...state,
        editModal:true,
        th_id: action.payload.th_id
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