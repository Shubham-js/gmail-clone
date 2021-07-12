import React from 'react';
import './Header.css';
import ListIcon from '@material-ui/icons/List';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useSelector, useDispatch} from 'react-redux';
import {selectUser, logout} from './features/userSlice';
import { auth } from './firebase';
function Header(){
     const user = useSelector(selectUser);
     const dispatch = useDispatch();
     const signOut = ()=> {
         auth.signOut().then(()=>{
            dispatch(logout())
         });
       
     };
     return(
        <div className="header">
            <div className="header__left">
                <IconButton>
                <ListIcon/>
                </IconButton>
                <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
                 alt="/"></img>
                
            </div>
            <div className="header__middle">
                <SearchIcon/>
                <input placeholder="Search Mail" type="text"></input>
                <ArrowDropDownIcon className="header__inputCharet" />
            </div>
            <div className="header__right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick ={signOut} src={user?.photoUrl}/>
            </div>
           
        </div>
     );
 }
 export default Header
 