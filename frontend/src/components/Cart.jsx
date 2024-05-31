import React, { useContext, useEffect, useState } from 'react'
import { Trash, Heart } from 'lucide-react'
import '../App.css'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import UserContext from '../context/UserContext'

// const products = [
//   {
//     id: 1,
//     name: 'Nike Air Force 1 07 LV8',
//     href: '#',
//     price: '₹47,199',
//     originalPrice: '₹48,900',
//     discount: '5% Off',
//     color: 'Orange',
//     size: '8 UK',
//     imageSrc:
//       'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png',
//   }
// ]                                                                      

export default function Cart() {


  const [users, setUsers] = useState([])

console.log(users)

  useEffect(() => {
    // console.log("hello sdgdfghsdf sdfghfdg")
    loaderUser()
  }, [])

  const loaderUser = async () => {
    const result = await axios.get("http://localhost:8080/cart")
    setUsers(result.data)
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/cart/${id}`)
    loaderUser()
  }
 
  return (
    <div className="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2" >
      <h2 className="text-3xl font-bold" id='cart'>Your cart</h2>
      <p className="mt-3 text-sm font-medium text-gray-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius repellat ipsam, sit
        praesentium incidunt.
      </p>
      <ul className="flex flex-col divide-y divide-gray-200">
        {users.map((data) => (
          <li key={data.id} className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img
                className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
                src={`data:image/jpeg;base64,${data.image}`}
                alt={data.product_name}
              />
              <div className="flex w-full flex-col justify-between pb-4">
                <div className="flex w-full justify-between space-x-2 pb-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{data.product_name}</h3>
                    <p className="text-sm">{data.product_color}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{data.product_price}</p>
                  </div>
                </div>
                <div className="flex divide-x text-sm">
                  <button type="button" className="flex items-center space-x-2 px-2 py-1 pl-0"
                  onClick={()=> deleteUser(data.id)}>
                    <Trash size={16} />
                    <span>Remove</span>
                  </button>
                  <button type="button" className="flex items-center space-x-2 px-2 py-1">
                    <Heart size={16} />
                    <span>Add to favorites</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="space-y-1 text-right">
        <p>
          Total amount:{parseInt(users.reduce((total, user) => total + parseInt(user.product_price), 0))}
            {/* {users.map((data)=(

              <span className="font-semibold">{data.product_price}</span>
            ))} */}
          

           
        </p>
      </div>
      <div className="flex justify-end space-x-4">
        <Link
        to='/'
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Back to shop
        </Link>
        <button
          type="button"
          className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Checkout
        </button>
      </div>
    </div>
  )
}
