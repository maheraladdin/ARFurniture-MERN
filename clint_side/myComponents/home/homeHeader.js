import LogTop from "./logo_top";
import Search from "../filter/light_mode/search";
import {View,StyleSheet} from "react-native";

export default function HomeHeader() {
    return (
        <View style={styles.logo}>
            <LogTop />
            <Search />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        margin: 15,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});