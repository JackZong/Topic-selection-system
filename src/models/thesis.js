import { list } from '../services/thesis'
export default {
	namespace: 'thesis',
	state: {

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
         if(data) {
         	
         }
      }
	},
	reducers: {

	}
}