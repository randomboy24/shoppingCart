import { createContext, ReactNode, useState } from "react";
import storeItems from '../data/items.json';



interface itemsTypes {
    id:number,
    name:string,
    imgUrl:string,
    price:number,
    quantity:number
}

interface ShoppingCartContextTypes {
    items:itemsTypes[],
    setItems:React.Dispatch<React.SetStateAction<itemsTypes[]>>
}
// Create a context with default values
export const ShoppingCartContext = createContext<ShoppingCartContextTypes>({
    items: [],
    setItems: () => {}
});

export const ShoppingCartProvider = ({ children }:any) => {
    const [items,setItems] = useState( storeItems.map(item => {
        return {
            ...item,
            quantity:0
        }
    }))

    return (
        <ShoppingCartContext.Provider value={{ items, setItems }}>
            {children}
        </ShoppingCartContext.Provider>
    );
};
