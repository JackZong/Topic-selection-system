import { routerRedux } from 'dva/router'
import { login } from '../services/login'
export default {
	namespace: 'login',
	state: {},
	subscriptions: {

	},
	effects: {
      *checklogin({ payload }, { call, put, select }){
      	console.log(login)
      }
	},
	reducers: {

	}
}