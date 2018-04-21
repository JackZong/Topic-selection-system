import { list, selectThesis } from '../services/thesis'
export default {
	namespace: 'thesis',
	state: {
     list: [],
     page: {
      page: 0, //current page
      count: 500, //total
      page_limit: 20
     }
	},
	subscriptions: {
      setup({ dispatch, history }) {
      	history.listen((location) => {
      		if(location.pathname === '/thesis'){
            console.log(location)
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
      *preselAdd({ payload },{ call, put, select }) {
        let data = yield call(selectThesis, payload)
        console.log(data)
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