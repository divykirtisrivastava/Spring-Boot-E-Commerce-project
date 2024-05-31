import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Table() {
  const [users, setUsers] = useState([])
  const {id} = useParams()

  useEffect(() => {
    // console.log("hello sdgdfghsdf sdfghfdg")
    loaderUser()
  }, [])

  const loaderUser = async () => {
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data)
  }


  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/user/${id}`)
    loaderUser()
  }






  
  return (
    <>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-black text-white">
                    <tr>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white-700"
                      >
                        <span>Product Name</span>
                      </th>
                      <th
                        scope="col"
                        className="px-12 py-3.5 text-left text-sm font-normal text-white-700"
                      >
                        Product Type
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white-700"
                      >
                        Product Color
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white-700"
                      >
                        Product Price
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3.5 text-left text-sm font-normal text-white-700"
                      >
                        Edit
                      </th>



                    </tr>
                  </thead>
                  <tbody className=" bg-white">
                    {users.map((user, index) => (
                      <tr key={index}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="flex items-center">

                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{user.product_name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-12 py-4">
                          <div className="text-sm text-gray-900 ">{user.product_type}</div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {user.product_color}
                          </span>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                            {user.product_price}
                          </span>
                        </td>
                        <td>
                          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
                            <Link
                              type="button"
                              to={`/admin/viewuser/${user.id}`}
                              className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                            >
                              View
                            </Link>
                            <Link
                            to={`/admin/edituser/${user.id}`}
                              type="button"
                              className="rounded-md border border-yellow-600 px-3 py-2 text-sm font-semibold text-yellow-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
                            >
                              Edit
                            </Link>
                            <button
                              type="button"
                              className="rounded-md border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                              onClick={()=> deleteUser(user.id)}
                            >
                              Delete
                            </button>
                         
                          </div>
                        </td>

                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
