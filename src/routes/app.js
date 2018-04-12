import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'
import AppRoutes from '../routes/appRoutes'
import Style from '../themes/app.less'
const App = ({ children, dispatch, app, loading, location }) => {
	console.log(location)
	const HeaderProps = {
	  routes: AppRoutes
	}
	return (
	  <div className={Style.wrapper}>
	    <Sidebar 
	      logoText="Material Design"
	      routes={AppRoutes}
	      location={location}
	      color="blue"
	    />
	    <div className={Style.mainPanel}>
	     <Header {...HeaderProps}/>
          <div className={Style.content}>
           <div className={Style.container}>
            {children}
           </div>
          </div>
          <Footer />
	    </div>
	  </div>
	)
}
export default withRouter(connect()(App))