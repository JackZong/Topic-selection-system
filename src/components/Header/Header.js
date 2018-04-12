import React from 'react'
import Style from './header.less'
import HeaderLinks from "./HeaderLinks";
import {
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button
} from "material-ui";
const Header = ({...props}) => {
    function makeBrand() {
    props.routes.map((prop, key) => {
      if (prop.path === window.location.pathname) {
        name = prop.navbarName;
      }
      return null;
    });
    return name;
  }
	return (
    <AppBar className={Style.appBar + Style.appBarClasses}>
      <Toolbar className={Style.container}>
        <div className={Style.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Button href="#" className={Style.title}>
            {makeBrand()}
          </Button>
        </div>
        <Hidden smDown implementation="css">
         <HeaderLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={Style.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
	)
}
export default Header