import dva from 'dva'
import createLoading from 'dva-loading'
import appModel from './models/app'
import router from './router'
import createHistory from 'history/createBrowserHistory'
import '../public/assets/css/material-dashboard.css'
// 1.Initialize
const app = dva({
  history: createHistory(),
  onError (err) {
  
  }
})
// 2.Model
app.model(appModel)
// 3.Router
app.router(router)
app.start('#app')