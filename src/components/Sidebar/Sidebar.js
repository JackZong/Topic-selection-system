import React from 'react'
import Style from './sidebar.less'
import { Link } from 'dva/router'
import image from "PUBLIC/assets/img/sidebar-2.jpg";
import logo from "PUBLIC/assets/img/reactlogo.png";
import cx from 'classnames'
import {
	withStyles,
	Drawer,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from 'material-ui'
import {
  Dashboard,
  Person,
  ContentPaste,
  LibraryBooks,
  BubbleChart,
  LocationOn,
  Notifications,
  ExpandLess,
  ExpandMore
} from "material-ui-icons";
import Collapse from 'material-ui/transitions/Collapse';
class SideBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      logoText: this.props.logoText,
      routes: this.props.routes,
      location: this.props.location,
      color: this.props.color,
      open: false
    }
  }
  activeRoute = (routeName) => {
    return this.props.location.pathname === routeName ? true : false;
  }
  handleClick = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    const { logoText, routes, color, location, open } = this.state
    return (
              <div>
              <Drawer 
                variant="permanent"
                anchor="left"
              >
                <div className={Style.logo}>
                  <a href="#" className={Style.logoLink}>
                    <div className={Style.logoImage}>
                      <img src={logo} alt="logo" className={Style.img} />
                    </div>
                    {logoText}
                  </a>
                </div>
                <div className={Style.sidebarWrapper}>
                <List className={Style.list}>
                {
                  routes.map((item,index,arr) => {
                    if (item.path === '/login' || !item.icon) {
                      return null;
                    }
                    const listItemClasses = cx({
                      [" " + Style[color]]: this.activeRoute(item.path),
                      [Style.itemLink]: true
                    });
                    const whiteFontClasses = cx({
                      [" " + Style.whiteFont]: this.activeRoute(item.path),
                      [Style.itemIcon]: true
                    });
                    if(item.children) {
                        return (
                          <div>
                            <ListItem button className={listItemClasses} onClick={this.handleClick}>
                              <ListItemIcon className={whiteFontClasses}>
                               <item.icon />
                              </ListItemIcon>
                              <ListItemText
                                primary={item.sidebarName}
                                className={Style.itemText}
                                disableTypography={true}
                              />
                              <ListItemIcon className={whiteFontClasses}>
                              {this.state.open ? <ExpandLess /> : <ExpandMore />} 
                              </ListItemIcon>
                            </ListItem>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                               <List component="div" disablePadding>
                               {item.children.map((item2,index2,arr2) => {
                                 return (<Link
                                    to={item2.path}
                                    className={Style.item}
                                    activeclassname="active"
                                    key={index2}
                                  >
                                 <ListItem button className={listItemClasses}>
                                   <ListItemText inset={true} primary={item2.sidebarName} className={Style.itemText}/>
                                 </ListItem>
                                 </Link>)
                               })}
                               </List>
                             </Collapse>
                            </div>
                        )
                    } else {
                      return (
                        <Link
                          to={item.path}
                          className={Style.item}
                          activeclassname="active"
                          key={index}
                        >
                          <ListItem button className={listItemClasses}>
                            <ListItemIcon className={whiteFontClasses}>
                             <item.icon />
                            </ListItemIcon>
                            <ListItemText
                              primary={item.sidebarName}
                              className={Style.itemText}
                              disableTypography={true}
                            />
                          </ListItem>
                        </Link>
                      )
                    }
                  })
                }
                </List>
                </div>
                  <div
                    className={Style.background}
                    style={{ backgroundImage: "url(" + image + ")" }}
                  />
              </Drawer>
          </div>
    )
  }	
}
export default SideBar