import { useContext } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
import { X } from "lucide-react"


export const ShoppingCart = () => {
    const {items} = useContext(ShoppingCartContext)
    const {setItems} = useContext(ShoppingCartContext)
    return (
        <div className="fixed top-0 z-50 right-0 w-[30%] bg-white border-l border-l-black  h-screen pl-5">
            <div className='mt-10 text-3xl '>
                Cart
            </div>
            {items.map(item => 
            item.quantity>0?
            <div className="flex justify-between mt-14 items-center">
                <div className="w-52 h-32 bg-gray-200 flex-shrink-0">
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