import React, { useEffect, useState } from 'react'
import Shopitem from './Shopitem';
import { Bars } from  'react-loader-spinner';
import DrawerCos from './Drawer';
import { useSelector, useDispatch } from 'react-redux'
import { additem, selectcount } from '../../Redux/slice';

const Shop = () => {
  const [products, setproducts] = useState([])
  const [loadedProducts, setLoadedProducts] = useState([])
  const [carts, setcarts] = useState([])
  const dispach=useDispatch()
  const cartitems=useSelector(selectcount)
 
  const createPagination = (items, limet = 8, offset = 0)=>{
      let arr = [];
      items.forEach((element, index) => {
        if(index >= offset && index < limet + offset){
          arr.push(element)
        }
      });
      return arr ;
  }
  const getProducts = async () => {
    const respons = await fetch('https://course-api.com/react-store-products').then(data => data.json())
    respons.map((e,i)=>{
      return (
        e.cart = 1,
        e.shop = false,
        e.totlePrice = e.price
      )
    })
    setproducts(respons);
    setLoadedProducts(createPagination(respons));
  }
  const loadMore = () =>{
    if(loadedProducts.length === products.length) return
    const newProducts = createPagination(products, 8, loadedProducts.length);
    setLoadedProducts([...loadedProducts, ...newProducts])
  }
 
  // items add redux
  const handelClick = (products) =>{
     dispach(additem({
        ...products,
        quantity:1,
     }))
  
  }
  // exsis item
  function exsisitem(id){
    const find=cartitems.filter(u=>u.id == id)
    return !!find.length
  }

  const cartTime = (id) => {
    let allCarts = carts ;
    setcarts([...allCarts.filter(item => item.id !== id)])
    let allProducts = products;
    allProducts?.map( product => (
      product.id === id ? product.shop = false : product
    ))
    setproducts([...allProducts])
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  return (
    <>
      <section className='block h-auto'>
        <div className="container md:w-5/6 mx-auto px-2 md:px-0">
          <div className='grid md:grid-cols-2 grid-cols-1 justify-center items-center gap-9 my-12'>
            <h2 className='text-5xl font-bold leading-tight '>Shop by Product</h2>
          </div>
          <div>
            <div className='flex flex-wrap'>
            {
              !!loadedProducts &&
              loadedProducts?.map((product, i) => (
                <Shopitem key={i} {...product} exisis={exsisitem} handelClick={()=>handelClick(product)} />
              ))
            }
            {
              loadedProducts.length !== products.length &&
              <button onClick={loadMore} className="bg-black mx-auto text-white px-11 py-3 block">Load More</button>
            }
            
            </div>
          </div>
        </div>
      </section>

      <DrawerCos allCarts={carts}  />
      
    </>
  )
}


export default Shop