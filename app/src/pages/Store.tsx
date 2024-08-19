import { StoreItems } from '../components/StoreItems'
import storeItems from '../data/items.json'

export const Store = () => {
    return (
        <div>
            <div className='md:flex block md:flex-wrap h-screen md:mx-20'>
                {storeItems.map(item => 
                    <StoreItems 
                        key={item.id}
                        name={item.name}
                        imgUrl={item.imgUrl}
                        price={item.price}
                    />
                )}
            </div>
        </div>
    )
}