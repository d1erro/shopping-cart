import React from 'react';
import Header from "../components/common/Header";
import ProductList from "../components/product/ProductList";
import Footer from "../components/common/Footer";

const ShopPage = () => {
    return (
        <>
            <Header/>
            <ProductList/>
            <Footer/>
        </>
    );
};

export default ShopPage;