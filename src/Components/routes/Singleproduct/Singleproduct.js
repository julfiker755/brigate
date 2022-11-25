import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectuser } from '../../../Redux/authslice';


const Singleproduct = () => {
    const {singleid}=useParams()
    const navigate=useNavigate()
    const [product,setproduct]=useState(null)
    const [img,setimg]=useState(null)
    const loginuser=useSelector(selectuser)
    // product loded
    useEffect(()=>{
        const url=`https://www.course-api.com/react-store-single-product?id=${singleid}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setproduct(data))
    },[singleid])
    // set-image
    useEffect(()=>{
       if(product){
        setimg(product?.images[0]?.url)
       }
    },[product])
    const {description,price,stars}=product || {}
    return (
        <div className='container mx-auto mb-[40px]'>
           <div className='text-center'>
           <h1 className='text-[40px] font-bold'>Hello this is single products-{loginuser?.displayName}</h1>
           </div>
            <div className='flex flex-wrap gap-[20px]'>
                <div className='w-[600px] h-[400px]'>
                <img className='w-full h-full' src={img}/>
                <div className='flex flex-wrap gap-4 mt-3'>
                    {product?.images.map((imge,index)=>(
                        <img onClick={()=>setimg(imge.thumbnails.full.url)} className='w-[105px] h-[60px] cursor-pointer' key={index} src={imge.thumbnails.full.url}/>
                    ))}
                </div>
                </div>
                <div className='w-[500px] h-auto'>
                    <p className='text-black text-[20px] text-wrap'>{description}</p>
                    <h1 className='text-[20px] font-bold'>Price:{price}</h1>
                    <h1  className='text-[20px] font-bold'>Star:{stars}</h1>
                </div>
            </div>
            {console.log(product)}
            {/* navigate button */}
            <div className='text-center my-3'>
            <button onClick={()=>navigate(`/`)} className='bg-[green] py-2 px-6 text-white rounded-md'>Products</button>
            </div>
        </div>
    );
};

export default Singleproduct;