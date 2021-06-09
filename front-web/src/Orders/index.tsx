import {useEffect, useState} from "react";
import './styles.css';
import StepsHeaders from "./StepsHeaders";
import ProductList from "./ProductList";
import {Product} from "./types";
import {fetchProducts} from "../api";
import OrderLocation from "./OrderLocation";


function Orders() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))

    }, []);

    return (
        <div className="orders-container">
            <StepsHeaders/>
            <ProductList products={products}/>
            <OrderLocation/>
        </div>

    )


}

export default Orders;