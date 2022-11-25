import { FaCartPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ShopItem = ({ id, image, company, name, price, handelClick,exisis }) => {
  const navigate=useNavigate()
  return (
    <>
      <div className=' bg-red relative lg:w-3/12 md:w-4/12 sm:w-6/12 w-full mb-10'>
        <div className="mx-4 bg-[#faf6f4] rounded-lg overflow-hidden">
          <img onClick={()=>navigate(`/products/${id}`)}  className='object-cover w-full h-[230px] cursor-pointer' src={image} alt="shop1" />
          <div className='p-3'>
            <p className="text-xs capitalize">{company}</p>
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
            <div className="flex justify-between items-center mt-3">
              <p className='text-gray-600 text-base'>${price}</p>
            {/* how to exsis button */}
              {exisis (id) ? (
                <button className='bg-[#ac2748] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                <FaCartPlus size={16} />
              </button>
              ):(
                <button onClick={handelClick} className='bg-[#94634b] text-white rounded-full w-10 h-10 flex justify-center items-center'>
                    <FaCartPlus size={16} />
                  </button>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopItem