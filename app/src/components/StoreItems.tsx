import storeItems from '../data/items.json'

interface storeItemProps {
    name:string,
    imgUrl:string,
    price:number
}

export const StoreItems = ({name,imgUrl,price}:storeItemProps) => {
    let isClicked = false;
    return (
        <div className='md:w-1/3 w-screen flex justify-center  md:h-3/6 h-3/5'>
            <div className='w-9/12 border mb-10'>
                <img className="h-2/3 w-full"src={`${imgUrl}`} />
                <div className='flex justify-between w-full'>
                    <div className='text-3xl font-serif mt-4 pt-4 ml-4 pl-6 md:ml-0 md:pl-6'>
                        {name}
                    </div>
                    <div className='text-gray-600 text-xl mt-4 pt-4 mr-4 pr-6 md:mr-0 md:pr-6'>
                        ${price}
                    </div>
                </div>
                {isClicked?null:
                    <div className='flex justify-center mt-5 h-12'>
                        <button className='text-center bg-blue-500 h-full text-white text-xl w-11/12 rounded-xl' onClick={() => {
                            isClicked = !isClicked;
                        }}>
                            + Add to Cart
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}