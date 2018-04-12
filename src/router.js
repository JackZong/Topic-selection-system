import React from 'react'
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router'
import App from './routes/app'
import AppRoutes from './routes/appRoutes'
const { ConnectedRouter } = routerRedux
function RouterConfig({ history }) {
  return (
    <Router history={history}>
        <App>
        <Switch>
          <Route path="/" exact render={() => (<Redirect to='/dashboard' />)} />
          {AppRoutes.map((item,index,arr) =>
            (
              <Route exact path={item.path} component={item.component} key={item.path} />
            )  
          )}
        </Switch>
        </App>
    </Router>
  )
}
export default RouterConfig
