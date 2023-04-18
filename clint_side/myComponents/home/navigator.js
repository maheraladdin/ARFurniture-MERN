import WhiteHeart from "../navBar/white_heart";
import Shopping from "../navBar/shopping_cart";
import Avatar from "../navBar/avatar";
import {View,StyleSheet} from "react-native";
import HomeIcon from "../navBar/home_icon";

export default Navigator = () => {

    return (
        <View
            style={styles.navigator}
        >
            {/* navigator */}
            <HomeIcon />
            <WhiteHeart />
            <Shopping  />
            <Avatar />
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