import React from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import Sidebar from '../components/Sidebar/Sidebar'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Content from '../components/Content/Content'
const App = ({ children, dispatch, app, loading, location }) => {
	return (
	  <div className="wrapper">
	    <Sidebar />
	    <div className="main-panel">
	      <Header />
          <div className="content">
            <Content />
          </div>
          <Footer />
	    </div>
	  </div>
	)
}
export default withRouter(connect(({app,loading})=>({app,loading}))(App))