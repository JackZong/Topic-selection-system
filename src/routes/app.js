import React from 'react'
import { connect } from 'dva'
import { BackTop, Layout, Menu, Icon } from 'antd'
import { withRouter } from 'dva/router'
import './app.less'
import Header1 from '../components/Header/Header'

const { Content, Footer, Sider, Header } = Layout
const SubMenu = Menu.SubMenu
const appRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  {
    path: "/table",
    sidebarName: "Table List",
    navbarName: "Table List",
    icon: ContentPaste,
    component: TableList
  },
  {
    path: "/typography",
    sidebarName: "Typography",
    navbarName: "Typography",
    icon: LibraryBooks,
    component: Typography
  },
  {
    path: "/icons",
    sidebarName: "Icons",
    navbarName: "Icons",
    icon: BubbleChart,
    component: Icons
  },
  {
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];
const App = ({ children, dispatch, app, loading, location }) => {
	let { pathname } = location
	pathname = pathname.startsWith('/') ? pathname : `/${pathname}`
	return (
	  <Layout style={{ minHeight: '100vh' }}>
	    <Sider>
	    <div className="logo"></div>
        <Header1 routes={appRoutes}/>
	    </Sider>
	    <Layout>
	    <Header style={{ background: '#fff', padding: 0 }}>Header</Header>
	    <Content>Content</Content>
	    <Footer>Footer</Footer>
	    </Layout>
	  </Layout>
	)
}
export default withRouter(connect(({app,loading})=>({app,loading}))(App))