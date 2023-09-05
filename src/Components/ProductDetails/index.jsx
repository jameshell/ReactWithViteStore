import './styles.css';
import { XMarkIcon } from "@heroicons/react/24/outline";
import {useContext} from "react";
import {ShoppingCartContext} from "../../Context";

const ProductDetails = () => {
    const context = useContext(ShoppingCartContext);
    return (
        <aside className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-details flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    Details
                </h2>
                <div onClick={context.closeProductDetail} className='hover:bg-slate-300 rounded cursor-pointer'>
                    <XMarkIcon className='h-7 w-7 text-black'></XMarkIcon>
                </div>
            </div>
            <figure className='px-6'>
                <img
                    className='w-full h-full rounded-lg'
                     src={context.currentProductDetail.images?.[0]}
                    alt={context.currentProductDetail.title}
                />
            </figure>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>
                    ${context.currentProductDetail.price}
                </span>
                <span className='font-medium text-md'>
                    {context.currentProductDetail.title}
                </span>
                <span className='font-light text-sm'>
                    {context.currentProductDetail.description}
                </span>
            </p>
        </aside>
    )
};

export { ProductDetails };