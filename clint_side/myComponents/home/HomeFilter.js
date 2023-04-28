import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {useState,useEffect} from "react";
import AllActive from "../filter/active/all";
import AllUnActiveLightMode from "../filter/light_mode/all";
import ChairActive from "../filter/active/chair";
import ChairUnActiveLightMode from "../filter/light_mode/chair";
import CupboardActive from "../filter/active/cupboard";
import CupboardUnActiveLightMode from "../filter/light_mode/cupboard";
import LampActive from "../filter/active/lamp";
import LampUnActiveLightMode from "../filter/light_mode/lamp";
import getAllProducts from "../../logic/Queries/products/getAllProducts";
import getProductsByCategory from "../../logic/Queries/products/getProductsByCategory";

export default function HomeFilter({setDATA}) {
    const [filters, setFilters] = useState("all");
    const [data, setData] = useState([]);

    // get all products
    const QueryAllProducts = () => {
        // query products
        getAllProducts(setDATA);
        // set filters
        setFilters("all")
    }

    // query products based on category
    const queryProductsBasedOnCategory = async (category) => {
        // query products
        getProductsByCategory(setDATA,category);
        // set filters
        setFilters(category)
    }

    useEffect(() => {
        setData([
            {
                id: "1",
                element: filters === "all" ? <AllActive/> : <AllUnActiveLightMode/>,
                active: QueryAllProducts,
            },
            {
                id: "2",
                element: filters === "chair" ? <ChairActive/> : <ChairUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("chair"),
            },
            {
                id: "3",
                element: filters === "cupboard" ? <CupboardActive/> : <CupboardUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("cupboard"),
            },
            {
                id: "4",
                element: filters === "lampshade" ? <LampActive/> : <LampUnActiveLightMode/>,
                active: () => queryProductsBasedOnCategory("lampshade"),
            }
        ])

    }, [filters]);

    useEffect(QueryAllProducts, []);




    return (
        <FlatList
            data={data}
            renderItem={({item}) =>
                <TouchableOpacity onPress={item.active}>
                    {item.element}
                </TouchableOpacity>
        }
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        height: 90,
        marginHorizontal: 10,
    }
});