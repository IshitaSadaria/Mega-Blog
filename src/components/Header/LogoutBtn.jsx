import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authService from '../../appwrite/config'

const LogoutBtn = () => {
    const dispatch = useDispatch();
    const logoutHandler = () => {
        //when we call authservice logout, we get promise so we can use then to dispatch the logout action
        authService.logout().then(() => {
            dispatch(logout());     //dispatch the logout action to the store so that we can update the state of the application
        })
    }
  return (
    <>
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
    </>
  )
}

export default LogoutBtn