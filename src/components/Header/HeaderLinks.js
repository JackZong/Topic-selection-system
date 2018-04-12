import React from 'react'
import Style from './headerlinks.less'
import {
  withStyles,
  IconButton,
  MenuItem,
  MenuList,
  Grow,
  Paper,
  ClickAwayListener,
  Hidden
} from "material-ui";
import { Person, Notifications, Dashboard, Search } from "material-ui-icons";
import CustomInput from 'components/CustomInput/CustomInput'
import classNames from 'classnames'
import { IconButton as SearchButton } from 'components'
import { Manager, Target, Popper } from "react-popper";
class HeaderLinks extends React.Component {
  constructor(props) {
  	super(props)
  	this.state = {
  	  open: false	
  	}
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  }
  handleClose = () => {
    this.setState({ open: false });
  }
  render() {
  	const { open } = this.state
  	return (
     <div>
       <CustomInput
         formControlProps={{
           className: Style.top + " " + Style.search
         }}
         inputProps={{
           placeholder: "Search",
           inputProps: {
             "aria-label": "Search"
           }
         }}
       />
       <SearchButton
         color="white"
         aria-label="edit"
         customClass={Style.top + " " + Style.searchButton}
       >
         <Search className={Style.searchIcon} />
       </SearchButton>
       <IconButton
         color="inherit"
         aria-label="Dashboard"
         className={Style.buttonLink}
       >
         <Dashboard className={Style.links} />
         <Hidden mdUp>
           <p className={Style.linkText}>Dashboard</p>
         </Hidden>
       </IconButton>
       <Manager style={{ display: "inline-block" }}>
         <Target>
           <IconButton
             color="inherit"
             aria-label="Notifications"
             aria-owns={open ? "menu-list" : null}
             aria-haspopup="true"
             onClick={this.handleClick}
             className={Style.buttonLink}
           >
             <Notifications className={Style.links} />
             <span className={Style.notifications}>5</span>
             <Hidden mdUp>
               <p onClick={this.handleClick} className={Style.linkText}>
                 Notification
               </p>
             </Hidden>
           </IconButton>
         </Target>
         <Popper
           placement="bottom-start"
           eventsEnabled={open}
           className={
             classNames({ [Style.popperClose]: !open }) +
             " " +
             Style.pooperResponsive
           }
         >
           <ClickAwayListener onClickAway={this.handleClose}>
             <Grow
               in={open}
               id="menu-list"
               style={{ transformOrigin: "0 0 0" }}
             >
               <Paper className={Style.dropdown}>
                 <MenuList role="menu">
                   <MenuItem
                     onClick={this.handleClose}
                     className={Style.dropdownItem}
                   >
                     Mike John responded to your email
                   </MenuItem>
                   <MenuItem
                     onClick={this.handleClose}
                     className={Style.dropdownItem}
                   >
                     You have 5 new tasks
                   </MenuItem>
                   <MenuItem
                     onClick={this.handleClose}
                     className={Style.dropdownItem}
                   >
                     You're now friend with Andrew
                   </MenuItem>
                   <MenuItem
                     onClick={this.handleClose}
                     className={Style.dropdownItem}
                   >
                     Another Notification
                   </MenuItem>
                   <MenuItem
                     onClick={this.handleClose}
                     className={Style.dropdownItem}
                   >
                     Another One
                   </MenuItem>
                 </MenuList>
               </Paper>
             </Grow>
           </ClickAwayListener>
         </Popper>
       </Manager>
       <IconButton
         color="inherit"
         aria-label="Person"
         className={Style.buttonLink}
       >
         <Person className={Style.links} />
         <Hidden mdUp>
           <p className={Style.linkText}>Profile</p>
         </Hidden>
       </IconButton>
     </div>
  	)
  }
}
export default HeaderLinks