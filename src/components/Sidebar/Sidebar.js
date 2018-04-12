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
  Notifications
} from "material-ui-icons";
const SideBar = ({...props}) => {
  const { logoText, routes, location, color } = props
  function activeRoute(routeName) {
    return props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }
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
                  const listItemClasses = cx({
                    [" " + Style[color]]: activeRoute(item.path),
                    [Style.itemLink]: true
                  });
                  const whiteFontClasses = cx({
                    [" " + Style.whiteFont]: activeRoute(item.path),
                    [Style.itemIcon]: true
                  });
                  return (
                    <Link
                      to={item.path}
                      className={Style.item}
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
export default SideBar