import React from 'react'
import { Redirect, Route, Switch, routerRedux } from 'dva/router'
import App from 'routes/app'
import enUS from 'antd/lib/locale-provider/en_US'
import { LocaleProvider } from 'antd'
import dynamic from 'dva/dynamic'
const { ConnectedRouter } = routerRedux
const Routers = function({ history, app}) {
	const routes = [
	  {
	  	path: '/login',
	  	models: () => [require('./models/login')],
	  	component: () => require('./routes/login')
	  }
	]
	return (
      <ConnectedRouter history={history}>
        <LocaleProvider locale={enUS}>
          <App>
            <Switch>
              <Route exact path="/" render={ () => (<Redirect to="/login" />)}>
                {
                	routes.map(({ path, ...dynamics }, key) =>(

                		<Route key={key} exact path={path} component={dynamic({
                			app,
                			...dynamics
                		})} />
                	))
                }
              </Route>
            </Switch>
          </App>
        </LocaleProvider>
      </ConnectedRouter>
	)
}
