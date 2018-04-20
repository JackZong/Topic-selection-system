import { routerRedux } from 'dva/router'
import { login } from '../services/login'
import { setCookie } from '../utils/'
export default {
	namespace: 'login',
	state: {},
	subscriptions: {

	},
	effects: {
      *checklogin({ payload }, { call, put, select }){
      	let data = yield call(login,payload)
      	if (data.code === 1) {
      	  setCookie('username',data.data.username,1)
      	  yield put(routerRedux.push('/dashboard'))

      	} else {

      	}
      }
	},
	reducers: {

	}
}