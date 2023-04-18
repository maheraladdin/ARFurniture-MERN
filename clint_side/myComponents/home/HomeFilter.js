import filters from "../../data/filters";
import {FlatList, StyleSheet, View} from "react-native";

export default function HomeFilter() {
    return (
        <FlatList
            data={filters}
            renderItem={({item}) => item.element}
            horizontal
            ItemSeparatorComponent={() => <View style={{width: 10}} />}
            style={styles.flatList}
        />
    )
}

const styles = StyleSheet.create({
    flatList: {
        height: 90
    }
});