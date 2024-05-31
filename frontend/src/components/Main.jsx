import React, { useContext, useEffect, useState } from 'react'

import axios from 'axios'
import '../App.css'
import UserContext from '../context/UserContext'


export default function Main() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
console.log(users)
  useEffect(() => {
    All();
  }, []);

  const All = async () => {
    const result = await axios.get("http://localhost:8080/users");
    setUsers(result.data);
  };
  const puma = async () => {
    const result = await axios.get("http://localhost:8080/puma");
    setUsers(result.data);
  };
  const nike = async () => {
    const result = await axios.get("http://localhost:8080/nike");
    setUsers(result.data);
  };
  const search = async () => {
    const result = await axios.get(`http://localhost:8080/search/${searchValue}`);
    setUsers(result.data);
  };
  const range = async () => {
    const result = await axios.get("http://localhost:8080/range");
    setUsers(result.data);
  };

  const { setUser } = useContext(UserContext);



  const addCart = async (user) => {
    try {
      const response = await axios.post('http://localhost:8080/cart', {
        product_name: user.product_name,
        product_type: user.product_type,
        product_color: user.product_color,
        product_price: user.product_price,
        image: user.image,

      });

      console.log('Product added to MySQL:', response.data);

      setUser(response.data.id);
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <>

      <aside className="fixed flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">

        <div className="mt-6 flex flex-1 flex-col justify-between">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Search Product</label>

              <input
                className="flex h-10 w-[200px] rounded-md bg-gray-100 px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Serach"
                value={searchValue}
                onChange={(e)=>setSearchValue(e.target.value)}
              ></input>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-black bg-white transition-colors duration-300  hover:text-red-700"
                onClick={search}
              >

                Search
              </button>


            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Product Name</label>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                onClick={puma}
              >

                Puma
              </button>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                onClick={nike}
              >

                nike
              </button>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                onClick={All}
              >

                All
              </button>

            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Price Range</label>
              <button
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
                onClick={range}
              >

                3000 Rs. - 4000 Rs. 
              </button>
            

            </div>
            <div className="space-y-3 ">
              <label className="px-3 text-xs font-semibold uppercase text-white">Color</label>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >

                <span className="mx-2 text-sm font-medium">Red</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Black</span>
              </a>
              <a
                className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <span className="mx-2 text-sm font-medium">Blue</span>
              </a>
            </div>

            
          </nav>
        </div>
      </aside>









      {users.map((user, index) => (
       
        <div id='card' key={index}>
          <div className="absolute w-[300px] rounded-md border">
            <img
              src={`data:image/jpeg;base64,${user.image}`}
              className="h-[200px] w-full rounded-md object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h1 className="text-lg font-bold  text-center">User Details</h1>
              <p className="mt-3 text-sm  text-center text-gray-600">
                Product id: <span className='font-bold'>{user.id}</span>
              </p>
              <p className="mt-3 text-sm font-bold text-center text-black">
                Product Name: <span className='font-bold  text-gray-600' onSubmit={() => { user.product_name }}>{user.product_name}</span>
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
              <button
                type="submit"
                to='/'
                className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black "
                onClick={() => addCart(user)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
