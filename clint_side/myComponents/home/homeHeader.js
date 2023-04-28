import LogTop from "./logo_top";
import {View, StyleSheet} from "react-native";

export default function HomeHeader() {


    return (
        <View style={styles.logo}>
            <LogTop />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
    }
});