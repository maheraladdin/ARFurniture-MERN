import { StyleSheet, View } from "react-native";
import WifiOff from "../myComponents/home/offline";

export default function wifiOff() {
    // this activity appears when no connection to internet
    return (
        <View style={styles.container}>
            <WifiOff />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    }
});
