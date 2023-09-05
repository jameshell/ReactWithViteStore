import { BrowserRouter, useRoutes } from 'react-router-dom';
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SignIn from "../SignIn";
import { NavBar } from "../../Components/NavBar/";
import { ShoppingCartProvider } from "../../Context";
import './App.css';
import { CheckoutSideMenu } from "../../Components/CheckoutSideMenu";

const AppRoutes = () => {
    return useRoutes(
        [
            {path: '/', element: <Home/>},
            {path: '/my-account', element: <MyAccount/>},
            {path: '/my-order', element: <MyOrder/>},
            {path: '/my-orders', element: <MyOrders/>},
            {path: '*', element: <NotFound/>},
            {path: '/sign-in', element: <SignIn/>}
        ]
    );
}

const App = () => {
  return (
    <>
        <ShoppingCartProvider>
            <BrowserRouter>
                <AppRoutes />
                <NavBar/>
                <CheckoutSideMenu/>
            </BrowserRouter>
        </ShoppingCartProvider>
    </>
  )
}

export default App;
