import { MinusCircleIcon } from "@heroicons/react/24/outline";
const OrderCard = props => {
    const { title, imgUrl, price, handleDelete, id } = props;
    return (
        <div className='flex justify-between items-center mb-2'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-cover' src={imgUrl?.[0]} alt={title}/>
                </figure>
                <p className='text-sm font-light'>{title}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>${price}</p>
                <MinusCircleIcon onClick={() => handleDelete(id)} className='h-5 w-5 text-red-700 hover:bg-red-300 rounded cursor-pointer'></MinusCircleIcon>
            </div>
        </div>
    )
}

export { OrderCard }