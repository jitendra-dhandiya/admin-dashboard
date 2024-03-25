import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectLoggedInUser } from '../Redux-Toolkit/auth/authSlice'


const Protected = ({children}) => {
    const user = useSelector(selectLoggedInUser)
  if(!user){
    return <Navigate to={'/'} replace={true}></Navigate>
  }
  return children;
}

export default Protected