import Slogan from "./label_light_mode";
import ArIcon from "./ar_icon";
import {View,StyleSheet} from "react-native";

export default function AdvertisementsHeader() {
    return (
        <View style={styles.container}>
            <Slogan />
            <ArIcon />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10
    }
});