import { React, useState, useEffect } from "react";
import Menu from "../../components/Menu";
import ProductItem from "../../components/ProductItem";
import URL_SERVER from "../../util/servers";

const ListProducts = () => {

    useEffect(() => {
        async function getProducts() {
          const result = await fetch(`${URL_SERVER}/produtos`);
          const data = await result.json();
          setProducts(data);
        }
    
        getProducts();
    }, [])

    const [products, setProducts] = useState([]);

    return (
        <>
        <Menu title="Lista de produtos" />
        <div className="products-container">
        {products.map((item) => (
            <ProductItem name={item.name} cost={item.cost} description={item.description} img={item.URLimage} index={item.id} supplier={item.supplier} group={item.group} />
        ))}
        </div>
        </>
    )
}

export default ListProducts;