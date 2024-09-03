import { Link } from "react-router-dom"
import { CartIcon } from "./CartIcon"
import { ShoppingCart } from "./ShoppingCart"
import { useContext, useState } from "react"
import { ShoppingCartContext } from "../context/ShoppingCartContext"
export const Navbar = () => {
    const [isShoppingCartOpen,setIsShoppingCartOpen] = useState(false)
    const { items } = useContext(ShoppingCartContext);
    return (
        <div>{isShoppingCartOpen?<ShoppingCart setIsShoppingCartOpen={setIsShoppingCartOpen} />:null}
            <div className="flex h-20 shadow-lg bg-white  border-b border-black justify-between sticky">
                <div className="flex ">
                    <div className="flex flex-col justify-center ml-6 text-2xl ">
                        <Link to={'/'}>
                            Home 
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center ml-6 text-2xl ">
                        <Link to={'/store'}>
                            Store
                        </Link>
                    </div>
                    <div className="flex flex-col justify-center ml-6 text-2xl ">
                        <Link to={'/about'}>
                            About
                        </Link>
                    </div>
                </div>
                <div className="pt-[3px]">  
                    <div className="flex flex-col justify-center mr-10 border w-[75px]
                        rounded-full border-gray-500 pl-3 h-[75px] cursor-pointer" onClick={() => setIsShoppingCartOpen(true) }>
                        <div className="bg-red-600 h-[24px] w-[24px] absolute top-auto ml-7 mt-16 rounded-full mr-2 text-white pl-2
                        pr-1 border-white font-semibold">
                            {(items.filter(item => item.quantity>0)).length}
                        </div>
                        <div>
                            <CartIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}