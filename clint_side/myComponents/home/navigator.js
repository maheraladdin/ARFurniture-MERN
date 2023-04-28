import {View,StyleSheet} from "react-native";
import HomeIcon from "../navBar/home_icon";
import HomeIconFilled from "../navBar/home_icon_filled";
import WhiteHeart from "../navBar/white_heart";
import WhiteHeartFilled from "../navBar/white_heart_filled";
import ShoppingCart from "../navBar/shopping_cart";
import ShoppingCartFilled from "../navBar/shopping_cart_filled";
import Avatar from "../navBar/avatar";
import AvatarFilled from "../navBar/avatar_filled";
import {useRouter} from "expo-router";

export default Navigator = ({setNavigate,navigate}) => {

    const router = useRouter();

    return (
        <View
            style={styles.navigator}
        >
            {/* navigator */}
            {navigate === "home" ? <HomeIconFilled/> : <HomeIcon router={router} setNavigate={setNavigate}/>}
            {navigate === "wishList" ? <WhiteHeartFilled/> : <WhiteHeart router={router} setNavigate={setNavigate}/> }
            {navigate === "cart" ? <ShoppingCartFilled/> : <ShoppingCart router={router} setNavigate={setNavigate}/> }
            {navigate === "profile" ? <AvatarFilled/> : <Avatar router={router} setNavigate={setNavigate}/>}
        </View>
    )
}

const styles = StyleSheet.create({
    navigator: {
        backgroundColor: "#518379",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: 50,
        margin: 10,
        borderRadius: 20,
    }
});