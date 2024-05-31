import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
export default function ViewUser() {
  
  const [user,setUser] = useState({
    product_name:"",
    product_type:"",
    product_color:"",
    product_price:""
  })
  
  
  const {id} = useParams()
  useEffect(()=>{
    loadUser()
  },[])

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data)
  }
  
  return (
 
      <div id='card'>
       <div className="absolute w-[300px] rounded-md border">
         <img
           src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
           alt="Laptop"
           className="h-[200px] w-full rounded-md object-cover"
         />
         <div className="p-4 flex flex-col items-center">
           <h1 className="text-lg font-bold  text-center">User Details</h1>
           <p className="mt-3 text-sm  text-center text-gray-600">
             Product id: <span className='font-bold'>{user.id}</span>
           </p>
           <p className="mt-3 text-sm font-bold text-center text-black">
             Product Name: <span className='font-bold  text-gray-600'>{user.product_name}</span>
           </p>
           <p className="mt-3 text-sm font-bold text-center text-black">
           Product type: <span className='font-bold  text-gray-600'>{user.product_type}</span>
           </p>
           <p className="mt-3 text-sm font-bold text-center text-black">
           Product color: <span className='font-bold  text-gray-600'>{user.product_color}</span>
           </p>
           <p className="mt-3 text-sm font-bold text-center text-black">
           Product price: <span className='font-bold  text-gray-600'>{user.product_price}</span>
           </p>
           <Link
             type="button"
             to='/admin'
             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
           >
            Back to Admin
           </Link>
         </div>
       </div>
       </div>
        
  )
}
