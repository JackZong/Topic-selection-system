import React from 'react'
import { Router, Route, Switch, routerRedux, Redirect } from 'dva/router'
import App from './routes/app'
import AppRoutes from './routes/appRoutes'
import Login from './routes/login'
const { ConnectedRouter } = routerRedux
import dynamic from 'dva/dynamic'
function RouterConfig({ history, app }) {
  const error = dynamic({
    app,
    component: () => require('./routes/error'),
  })
  return (
    <Router history={history}>
        <Switch>
        <Route path="/" exact render={() => (<Redirect to='/dashboard' />)} />
        {AppRoutes.map(({path,...dynamics},index,arr) =>{
            if (path === '/login') {
              return <Route exact path={path} component={dynamic({app,...dynamics})} key={path} />
            }
          }
        )}
        <App>
          <Route path="/" exact render={() => (<Redirect to='/dashboard' />)} />
          {AppRoutes.map(({path,...dynamics},index,arr) =>{
              if (path !== '/login') {
                return <Route exact path={path} component={dynamic({app,...dynamics})} key={path} />
              }
            }
          )}
        </App>
        <Route component={error} />
        </Switch>
    </Router>
  )
}
export default RouterConfig
