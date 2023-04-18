import Product from "./product";
import {FlatList} from "react-native";
import {useEffect, useState} from "react";

export default function Products() {

    const [DATA, setDATA] = useState([]);

    useEffect(() => {
        fetch("http://192.168.1.18:3000/api/products")
            .then((response) => response.json())
            .then((data) => {
                setDATA(data);
            })
            .catch((error) => console.log("error", error));
    },[])


    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Product image={item.imageURI} title={item.productName} price={item.productPrice} />}
            numColumns={2}
        />
    )
}