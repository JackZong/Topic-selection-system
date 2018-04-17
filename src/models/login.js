import { routerRedux } from 'dva/router'
import { login } from '../services/login'
export default {
	namespace: 'login',
	state: {},
	subscriptions: {

	},
	effects: {
      *checklogin({ payload }, { call, put, select }){
      	let data = yield call(login,payload)
      	console.log(data)
      	if (data.code === 1) {
      	  yield put(routerRedux.push('/dashboard'))
      	} else {

      	}
      }
	},
	reducers: {

	}
}