import { useContext } from 'react'
import { StoreItems } from '../components/StoreItems'
import storeItems from '../data/items.json'
import { ShoppingCartContext } from '../context/ShoppingCartContext'

export const Store = () => {
    const {items} = useContext(ShoppingCartContext)
    return (
        <div>
            <div className='md:flex block md:flex-wrap h-screen md:mx-20'>
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