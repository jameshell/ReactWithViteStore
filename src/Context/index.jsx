import {createContext, useState} from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0);
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const [currentProductDetail, setCurrentProductDetail] = useState({});
    const [shoppingCartProducts, setShoppingCartProducts] = useState([]);
    const [isCheckoutSideMenuOpen, SetIsCheckoutSideMenuOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    const openCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => SetIsCheckoutSideMenuOpen(false);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            currentProductDetail,
            setCurrentProductDetail,
            shoppingCartProducts,
            setShoppingCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}