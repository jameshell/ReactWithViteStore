import './styles.css';
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context";
import { OrderCard } from "../OrderCard";
import { v4 as uuidv4 } from 'uuid';

const CheckoutSideMenu = () => {
    const context = useContext(ShoppingCartContext);
    const handleDelete = (id) => {
        const filteredProducts = context.shoppingCartProducts.filter(product => product.id !== id);
        context.setShoppingCartProducts(filteredProducts);
    }
    
    console.log(context.shoppingCartProducts);
    return (
        <aside className={`${context.isCheckoutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div onClick={ context.closeCheckoutSideMenu } className='hover:bg-slate-300 rounded cursor-pointer'>
                    <XMarkIcon className='h-7 w-7 text-black'></XMarkIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.shoppingCartProducts.map((product) =>
                        <OrderCard 
                            key={uuidv4()}
                            id={product.id}
                            title={product.title}
                            imgUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    )
                }
            </div>
        </aside>
    );
};

export { CheckoutSideMenu };