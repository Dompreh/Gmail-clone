import React from 'react'
import './Header.css'
import {Avatar, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout } from './features/userSlice'
import { auth } from "./firebase"


function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () =>{
        auth.signOut().then(() => {
            dispatch(logout())
        })
    }

    
  return (
    <div className='header'>
        <div className="header_left">
            <IconButton>
                <MenuIcon/>
            </IconButton>
            <img src='https://i.pinimg.com/originals/ae/47/fa/ae47fa9a8fd263aa364018517020552d.png' alt='gmail logo'/>
        </div>

        <div className="header_middle">
            <SearchIcon className="header_searchicon"/>
            <input placeholder='Search mail' type="text" />
            <ArrowDropDownIcon className='header_dropdown'/>
        </div>

        <div className="header_right">
            <IconButton>
                <AppsIcon/>
            </IconButton>
            <IconButton>
                <NotificationsIcon/>
            </IconButton>
            <Avatar onClick={signOut} className="header_avatar" src={user?.photoUrl}/>
        </div>
    </div>
  )
}

export default Header