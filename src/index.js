import dva from 'dva'
import { message } from 'antd'
import createLoading from 'dva-loading'
import appModel from './models/app'
import router from './router'
import createHistory from 'history/createBrowserHistory'
// 1.Initialize
const app = dva({
  history: createHistory(),
  onError (err) {
  	message.error(error.message)
  }
})
// 2.Model
app.model(appModel)
// 3.Router
app.router(router)
app.start('#app')