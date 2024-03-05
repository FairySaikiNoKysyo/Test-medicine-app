import { Suspense } from "react";
import { Outlet } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import { Header, LinkPage } from "./SharedLayout.styled";
import { Loader } from "components/Loader/Loader";

export const SharedLayout = () => {
    return(
        <>
            <Header>
                <nav>
                    <LinkPage to="/" end>Shop</LinkPage>
                    <LinkPage to="/order">Order</LinkPage>                   
                </nav>
            </Header>
            <main>              
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
            </main>            
            <Toaster position="top-right" />
        </>
    );
};
export default SharedLayout;