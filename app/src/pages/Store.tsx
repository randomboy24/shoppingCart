import { useContext } from 'react'
import { StoreItems } from '../components/StoreItems'
import storeItems from '../data/items.json'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

export const Store = () => {
    const {items} = useContext(ShoppingCartContext)
    return (
        <div className='flex justify'>
            <div className='lg:grid lg:grid-cols-3 md:grid grid gap-y-5 md:grid-cols-2 overflow-x-hidden overflow-y-hidden h-auto'>
                {items.map(item => 
                    <StoreItems
                        key={item.id}
                        name={item.name}
                        imgUrl={item.imgUrl}
                        price={item.price}
                        quantity={item.quantity}
                        id={item.id}
                    />
                )}
            </div>
        </div>
    )
}