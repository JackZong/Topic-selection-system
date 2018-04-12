import dva from 'dva'
import createLoading from 'dva-loading'
import appModel from './models/app'
import createHistory from 'history/createBrowserHistory'
import Routers from './router'
// 1.Initialize
const app = dva({
  history: createHistory()
})
// 2.Model
app.use(createLoading())
// 3.Router
app.router(require('./router').default)
app.start('#app')