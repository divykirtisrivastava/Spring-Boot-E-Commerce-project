import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Table from './components/Table.jsx'
import AddUser from './components/AddUser.jsx'
import EditUser from './components/EditUser.jsx'
import ViewUser from './components/ViewUser.jsx'
import Main from './components/Main.jsx'
import Adminmain from './Adminmain.jsx'
import Signin from './components/Signin.jsx'
import Cart from './components/Cart.jsx'
import Protected from './components/Protected.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <>
      <Route path='/' element={<App />}>
        <Route path='' element={<Main />} />
        <Route path='/cart' element={<Cart />} />


      </Route>

      {/* <Route path='/adminlogin' element={<Signin />}/> */}
   
      
      <Route path='/admin' element={<Adminmain/>}>
        <Route path='' element={
        <Protected>
         <Table/>
        </Protected>
        }/>
        <Route path='/admin/login' element={<Signin />} />
        <Route path='/admin/adduser' element={
        <Protected>
          <AddUser />
        </Protected>
        } />
        <Route path='/admin/edituser/:id' element={<EditUser />} />
        <Route path='/admin/viewuser/:id' element={<ViewUser />} />


      </Route>
      
    </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)