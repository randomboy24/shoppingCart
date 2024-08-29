import { useContext, useEffect, useState } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { X } from "lucide-react"


export const ShoppingCart = ({setIsShoppingCartOpen}:any) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        // Trigger visibility change when the component mounts
        setIsVisible(true);
    }, []);
    const {items} = useContext(ShoppingCartContext)
    const {setItems} = useContext(ShoppingCartContext)
    return (
        <div className={`fixed top-0 z-50 right-0 w-screen md:w-[30%] bg-white border-l border-l-black  h-screen pl-5 transition-transform duration-200 ease-in ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'} `}>
            <div className='mt-10 flex justify-between'>
                <div className="text-3xl">
                    Cart
                </div>
                {items.filter((item) => item.quantity > 0 ).length===0?
                <div className="h-screen flex flex-col justify-center items-center text-black text-3xl font-semibold mr-5 sm:mr-0">
                    Your cart is Empty
                </div>:null}
                <div>
                    <X size={44} className="text-gray-500 hover:cursor-pointer" onClick={() => {
                        setIsShoppingCartOpen(false)
                    }}/>
                </div>
            </div>
            {items.map(item => 
            item.quantity>0?
            <div className="flex justify-between mt-14 items-center">
                <div className="sm:w-52 sm:h-32 w-32 h-16 bg-gray-200 flex-shrink-0">
                    <img className="w-full h-full object-cover" src={item.imgUrl} alt={item.name} />
                </div>
                <div className="flex flex-col justify-center items-start flex-grow ml-4">
                    <div className="text-xl">{item.name}</div>
                    <div className="text-lg text-gray-500">${item.price.toFixed(2)}</div>
                </div>
                <div className="text-lg mr-3">
                    ${(item.price * item.quantity).toFixed(2)}
                </div>
                <div className="border">
                    <X className="text-gray-500 hover:cursor-pointer" onClick={() => {
                        setItems(preVitems => preVitems.map(items => items.id === item.id?{...items,quantity:0}: items))
                    }}/>
                </div>
            </div>:
            null
        
            )}
            {(items.filter(item => item.quantity>0)).length>0?
            <div className="flex justify-end mr-4 mt-4 text-3xl font-semibold "><div>Total:${(items.reduce((accumulator,item) => accumulator + item.quantity*item.price,0)).toFixed(2)}</div></div>:null}
            
           
        </div>
    )
}