import { list } from '../services/thesis'
export default {
	namespace: 'thesis',
	state: {
     list: []
	},
	subscriptions: {
      setup({ dispatch, history }) {
      	history.listen((location) => {
      		if(location.pathname === '/thesis'){
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
                  list: data.data
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