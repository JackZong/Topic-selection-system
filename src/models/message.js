import { newMessage } from '../services/message'
import Swal from 'sweetalert2'
export default {
	namespace: 'message',
	state: {

	},
	subscriptions: {
      setup({ dispatch, history }) {
      	history.listen((location) => {
      		if(location.pathname === '/message'){
             
      		}
      	})
      }
	},
	effects: {
      *newMessage({ payload },{ call, put, select }) {
      	 let data  = yield call(newMessage,payload)
      	 if(data.code === 1) {
           Swal({
             title: '发送消息成功',
             type: 'success',
             timer: 2000
           })
      	 }
      }
	},
	reducers: {

	}
}