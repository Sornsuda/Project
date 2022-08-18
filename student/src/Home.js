import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ProductItem from "./Productltem";
export default function Home(){

const [productTypes, setProductTypes] = useState([]);
const [productTypeId, setProductTypeId] = useState(0);
const [products, setProducts] = useState([]);



useEffect(() => {
    async function fetchData() {
        const response = await fetch(
            "http://localhost:8080/api/product_type/" + productTypeId,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    'Content-Type': 'application/json',
                    Authorization: "Bearer " + localStorage.getItem("access_token")
                }
            }
        );
        const json = await response.json();
        setProductTypes(json.data);
    }
        fetchData();
}, [productTypeId]);

    if (localStorage.getItem("accsee_token")) {
        console.log(localStorage.getItem("access_token"));
    
        return(
            <>Home page</>
        );
    }
    return(
        
        <>
        <div className="container">
            <select value={productTypeId} onChange={(e)=> setProductTypeId(e.target.value)}>
                <option value={0}>ทุกประเภทสินค้า</option>
            {
            productTypes.map(item => (
                <option key={item.product_type_id} value={item.product_type_id}>{item.product_type_name}</option>
            ))
        }
        </select>

        <Link to={"/product/add"} className="btn btn-outline-primary me-3">เพิ่ม</Link>
    <div className="rmt-3">
    {
        products.map(item => (
            <ProductItem key={item.product_id} data={item} />
        ))
    }
    </div>

</div>
        </>
    );
}





