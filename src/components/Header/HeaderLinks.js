import React from 'react'
import Style from './headerlinks.less'
import { setCookie } from '../../utils/'
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
  	  open: false,
      userOpen: false,
      msg: null
  	}
  }
  handleClick = (item) => {
    this.setState({ [item]: !this.state[item] });
  }
  handleClose = (item) => {
    this.setState({ [item]: false });
  }
  toDashboard = () => {
    window.open('/','_self')
  }
  handleLogout = () => {
    setCookie('username','')
    window.open('/login','_self')
  }
  toProfile = () => {
    window.open('/profile','_self')
  }
  componentDidMount(){
    let msg = JSON.parse(localStorage.getItem('msg'))
    this.setState({
      msg: msg
    })
  }
  render() {
  	const { open, userOpen, msg } = this.state
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
         onClick={this.toDashboard}
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
             onClick={() =>this.handleClick('open')}
             className={Style.buttonLink}
           >
             <Notifications className={Style.links} />
             <span className={Style.notifications}>{msg ? msg.length : 0}</span>
             <Hidden mdUp>
               <p onClick={() =>this.handleClick('open')} className={Style.linkText}>
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
           <ClickAwayListener onClickAway={() => this.handleClose('open')}>
             <Grow
               in={open}
               id="menu-list"
               style={{ transformOrigin: "0 0 0" }}
             >
               <Paper className={Style.dropdown}>
                 <MenuList role="menu">
                 {msg ? msg.map((item) => {
                   return (
                    <MenuItem
                      onClick={() => this.handleClose('open')}
                      className={Style.dropdownItem}
                    >
                     {item.msg_content}
                    </MenuItem>
                    )
                 }) : ''}
                 
                 </MenuList>
               </Paper>
             </Grow>
           </ClickAwayListener>
         </Popper>
       </Manager>
{/*     <IconButton
         color="inherit"
         aria-label="Person"
         className={Style.buttonLink}
       >
         <Person className={Style.links} />
         <Hidden mdUp>
           <p className={Style.linkText}>Profile</p>
         </Hidden>
       </IconButton>*/}
       <Manager style={{ display: "inline-block" }}>
         <Target>
           <IconButton
             color="inherit"
             aria-label="Notifications"
             aria-owns={userOpen ? "menu-list" : null}
             aria-haspopup="true"
             onClick={() => this.handleClick('userOpen')}
             className={Style.buttonLink}
           >
             <Person className={Style.links} />
             <Hidden mdUp>
               <p onClick={() => this.handleClick('userOpen')} className={Style.linkText}>
                 Notification
               </p>
             </Hidden>
           </IconButton>
         </Target>
         <Popper
           placement="bottom-start"
           eventsEnabled={userOpen}
           className={
             classNames({ [Style.popperClose]: !userOpen }) +
             " " +
             Style.pooperResponsive
           }
         >
           <ClickAwayListener onClickAway={() =>this.handleClose('userOpen')}>
             <Grow
               in={userOpen}
               id="menu-list"
               style={{ transformOrigin: "0 0 0" }}
             >
               <Paper className={Style.dropdown}>
                 <MenuList role="menu">
                   <MenuItem
                     onClick={this.toProfile}
                     className={Style.dropdownItem}
                   >
                     Profile
                   </MenuItem>
                   <MenuItem
                     onClick={this.handleLogout}
                     className={Style.dropdownItem}
                   >
                     Logout
                   </MenuItem>
                 </MenuList>
               </Paper>
             </Grow>
           </ClickAwayListener>
         </Popper>
       </Manager>
     </div>
  	)
  }
}
export default HeaderLinks