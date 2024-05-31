import React from 'react'

import { Outlet } from 'react-router-dom'
import Navbarnew from './components/Navbarnew'
import UserContextProvider2 from './context/UserContextProvider2'

export default function Adminmain() {
  return (
   <>
   <UserContextProvider2>
   <Navbarnew/>
   <Outlet/>
   </UserContextProvider2>

   </>
  )
}