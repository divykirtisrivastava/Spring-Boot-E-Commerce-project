import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../context/UserContext'

export default function Protected({children}) {
  const {pass} = useContext(UserContext)

 if(pass){
  return children
 }else{
  return <Navigate to={"/admin/login"}/>
 }
}
