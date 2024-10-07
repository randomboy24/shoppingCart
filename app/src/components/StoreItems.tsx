import { useContext, } from 'react'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

interface storeItemProps {
    name:string,
    imgUrl:string,
    price:number,
    id:number,
    quantity:number
}

export const StoreItems = ({name,imgUrl,price,id,quantity}:storeItemProps) => {
    console.log(quantity)
    
    const { setItems } = useContext(ShoppingCartContext);
    return (
        <div className='mt-10 md:w-[100%] w-[100%] flex justify-center  md:h-[100%] h-[100%] '>
            <div className='w-9/12  mb-10 shadow flex flex-col h-[100%]  '>
                <img className="h-2/3 w-full"src={`${imgUrl}`} />
                <div className='flex justify-between w-full'>
                    <div className='text-3xl font-serif md:mt-0 mt-4 pt-4 ml-4 pl-6 md:ml-0 md:pl-6'>
                        {name}
                    </div>
                    <div className='text-gray-600 text-xl md:mt-1 mt-4 pt-4 mr-4 pr-6 md:mr-0 md:pr-6'>
                        ${price}
                    </div>
                </div>
                {quantity>0?
                <div className='flex justify-center my-2 md:mt-10 '>
                    <button className='bg-blue-600 text-white w-12 h-12 text-4xl rounded-md ' onClick={() => {
                        setItems(prevItems => prevItems.map((item) => item.id === id? {...item,quantity:item.quantity- 1}:item ))
                    }}>-</button>
                    <span className='flex flex-col justify-center text-3xl ml-5'>{quantity}&nbsp; </span>
                    <span className='flex flex-col justify-center text-lg mt-2 mr-5'>in Cart</span>
                    <button className='bg-blue-600 text-white w-12 h-12 text-4xl rounded-md' onClick={() => {
                        setItems(PrevItems => PrevItems.map(item => item.id === id?{...item,quantity:item.quantity+1}:item))
                    }}>+</button>
                </div>
                :    <div className='flex justify-center my-2 md:mt-10'>
                        <button className='text-center bg-blue-500 h-[51px] text-white text-xl w-11/12 rounded-xl   ' onClick={() => {
                           setItems(prevItems => prevItems.map(item => item.id===id?{...item,quantity:item.quantity+1}:item))
                        }}>
                            + Add to Cart
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}