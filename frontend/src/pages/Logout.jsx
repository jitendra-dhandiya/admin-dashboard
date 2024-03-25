import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Navigate} from 'react-router-dom'
import { selectLoggedInUser, signOutUserAsync } from '../Redux-Toolkit/auth/authSlice';


const Logout = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser)

  useEffect(() => {
    dispatch(signOutUserAsync())
  }, [dispatch])
  
  return (
    <div>
      {!user && <Navigate to={'/'} replace={true}></Navigate>}
    </div>
  )
}

export default Logout;