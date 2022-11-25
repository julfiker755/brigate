import React, { useState } from 'react'
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { AiOutlineShoppingCart } from "react-icons/ai";
import SingleCard from './SingleCard';
import { useSelector} from 'react-redux'
import { selectcount, selecttotal, toalquantiy } from '../../Redux/slice';



const DrawerCos = ({allCarts}) => {
  const [drawer, setdrawer] = useState(false)
  const cartitems=useSelector(selectcount)
  const totalprice=useSelector(selecttotal)
  const toalquantiyi=useSelector(toalquantiy)
  const toggleDrawer=()=>{
    setdrawer(!drawer)
  }
  const totleAmount= () => {
    let sum = 0;
    for (let i = 0; i < allCarts.length; i++) {
        sum += allCarts[i].totlePrice;
    }
    return sum;
  }


  return (
    <>
    
    <button onClick={toggleDrawer} className="fixed bottom-10 right-0 bg-[#DFC4AF] p-5 text-2xl z-50" >
       {/* <span> {allCarts.length} </span> */}
       <span> 
            <span className="flex items-center justify-center absolute top-0 right-0 p-1 bg-white font-bold w-8 h-8 text-sm rounded-full">
                {toalquantiyi}
            </span>
        </span>
       <span> <AiOutlineShoppingCart /> </span>
    </button>
        <Drawer
            open={drawer}
            onClose={toggleDrawer}
            direction='right'
            className='bla bla bla'
        >
            <div className='bg-[#FAF6F4] w-full h-full px-2 py-5'>
                <div className=' cartDIv'>
                {
                   cartitems.map(u=><SingleCard {...u}></SingleCard>)
                }

                {
                    allCarts.length === 0 && 
                        <p className='text-center text-lg'> Cart is Empty!!! </p>
                }

                </div>
                <div>
                <hr />
                <hr />
                    <div className='flex flex-col justify-between gap-3'>
                        <div className='flex justify-between pt-4'>
                            <p className='font-bold text-black'>Totle</p>
                            <p className='font-bold text-black'>=</p>
                            <p className='font-bold text-black'>
                                {/* toalamout */}
                            {
                               totalprice
                            }
                            </p>
                            
                        </div>
                        <div>
                            <button className="bg-black mx-auto text-white w-full py-3 block">BUY</button>
                        </div>
                    </div>
                </div>
            </div>
        </Drawer>
    </>
  )
}

export default DrawerCos