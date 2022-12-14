import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
//import ProductItem from "./Productltem";
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
        <h1>admin</h1>
        </>
    );
}





