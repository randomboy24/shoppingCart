import { Link } from "react-router-dom"
import { CartIcon } from "./CartIcon"
export const Navbar = () => {
    return (
        <div>
            <div className="flex h-20 shadow-lg bg-white justify-between">
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
                <div className="flex flex-col justify-center mr-10 border w-20 rounded-full border-gray-500 pl-3 h-20">
                    <div className="bg-red-600 h-6 w-7 absolute top-auto ml-7 mt-16 rounded-full mr-2 text-white pl-2
                    pr-1 border-white font-semibold">
                        3
                    </div>
                    <div>
                        <CartIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}