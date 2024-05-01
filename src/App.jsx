
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { data } from 'autoprefixer'
import Product from './Components/Product'

function App() {

  const [products,setProducts] = useState([])

  const [cart,setCart] = useState([])

  useEffect( ()=>{
    fetch('../public/ProductFake.json')
    .then(res=> res.json())
    .then(data=> setProducts(data))
  },[])

  const handleCard = (product) =>{
  const isExist = cart.find(cartProduct => cartProduct.id ==product.id)
  if(!isExist){
    setCart([...cart,product]);
  }
  else{
    alert('Already in Cart')
  }
  }

  const handleRemove = (id) =>{
    const newCart= cart.filter((item)=> item.id !== id)
    setCart(newCart)
  }


  return (
    <>
    <h3 className='my-6 w-11/12 mx-auto text-4xl font-bold bg-gray-600 p-4 rounded-xl text-green-500 text-center'>Simple Shoping Cart With React Concept</h3>
      <div className="main-container w-11/12 mx-auto my-4 flex justify-between">
        <div className="cards-container w-9/12 grid grid-cols-3 gap-4">
          {
            products.map(product =>( <Product key={product.id} handleCard={handleCard} product= {product}></Product>))
          }
        </div>

        <div className="card-container w-3/12 text-center ">
          <h1 className='text-3xl font-bold'>This is card</h1>
          <div className='flex justify-between'>
            <h3 className='ml-8'>Product Name</h3>
            <h3>Price</h3>
          </div>
          <div>
            {
              cart.map((cartItem,idx) =>(
                <div key={cartItem.id} className='flex justify-between font-semibold ml-4 mb-4'>
                  <span>{idx+1}</span>
                  <h3>{cartItem.title.slice(0,20)}</h3>
                  <h3>{cartItem.price} $</h3>
                  <button onClick={()=>handleRemove(cartItem.id)} className='bg-red-400 px-2 rounded-md'>Delet</button>
                </div>
              ))
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default App
