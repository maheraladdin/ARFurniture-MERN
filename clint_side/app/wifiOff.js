import { StyleSheet, View } from "react-native";
import WifiOff from "../myComponents/home/offline";
import {useRouter} from "expo-router";
import {getNetworkStateAsync} from "expo-network";
import {useEffect, useState} from "react";

export default function wifiOff() {

    // router to navigate between activities
    const router = useRouter();

    // store state of connection
    const [isConnected, setIsConnected] = useState(null);

    // recheck if connected to internet every 5 seconds
    useEffect(() => {
        // wait one second then go to next activity
        const checkNetwork = setInterval(() => {
            // check if connected to internet
            (() => getNetworkStateAsync())().then((result) =>
                setIsConnected(result.isConnected)
            );

            // if connection exist go advertisement activity
            if (isConnected === true) {
                router.push("/advertisement");
                clearInterval(checkNetwork);
            }

        }, 5000);
    }, [isConnected]);

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
