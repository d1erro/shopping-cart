import React from 'react';
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import ProductOverview from "../components/product/ProductOverview.jsx";
import {useParams} from "react-router-dom";

const ProductPage = () => {
    const  {id}= useParams();
    return (
        <>
            <Header/>
            <ProductOverview id={id}/>
            <Footer/>
        </>
    );
};

export default ProductPage;