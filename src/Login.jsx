import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'
import { auth, provider } from './firebase'
import './Login.css'

function Login() {
    const dispatch = useDispatch()
    const signIn = () =>{
        auth.signInWithPopup(provider).then(({user}) => 
        dispatch(login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
        }))
        ).catch(error => alert(error))
    }
  return (
    <div className='login'>
        <div className="login_container">
            <img src="https://cdn.vox-cdn.com/thumbor/8fWz6qpiMYMsZhY4vrc9Vhl5yL8=/0x110:1320x770/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" alt="logo" />
            <Button onClick={signIn} variant="contained" color="primary">Login</Button>
        </div>
    </div>
  )
}

export default Login