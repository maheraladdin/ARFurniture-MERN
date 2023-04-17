import PagerView from "react-native-pager-view";
import {Dimensions,StyleSheet, Image, TouchableOpacity, View} from "react-native";
import {useEffect, useRef, useState} from "react";



export default function AdvertisementsViewPager() {

    // images
    const [advertisements, setAdvertisements] = useState([]);

    // page number
    const [pageNumber, setPageNumber] = useState(0);

    // pager ref
    const pagerRef = useRef(null);

    // handle page change
    const handlePageChange = pageNumber => {
        setPageNumber(pageNumber);
        pagerRef.current.setPage(pageNumber);
    };

    useEffect(() => {
        // fetch advertisement from server
        fetch("http://192.168.1.18:3000/api/advertisements")
            .then((response) => response.json())
            .then((data) => {
                setAdvertisements(data);
            })
            .catch((error) => console.log("error", error));
    },[]);

    return (
    <>
        {/* viewPager */}
        <PagerView
            style={styles.viewPager}
            initialPage={0}
            ref={pagerRef}
            onPageScroll={(event) => {
                setPageNumber(event.nativeEvent.position);
            }}
        >
            {

                advertisements.map((image) => {
                    console.log(image.imageURI)
                    return (
                        <View style={styles.page} key={image._id}>
                            <Image
                                source={{uri: image.imageURI}}
                                style={{width: Dimensions.get("window").width, height: "100%"}}
                            />
                        </View>
                    );
                })
            }
        </PagerView>

        {/* change pages */}
        <View style={styles.navigation}>
            {
                advertisements.map((image, index) => {
                    return (
                        <TouchableOpacity key={image._id} onPress={() => handlePageChange(index)}>
                            <View style={{
                                width: 30,
                                height: 30,
                                borderRadius: "50%",
                                backgroundColor: index === pageNumber ? "#518379" : "#E0E0E0"
                            }}>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    viewPager: {
        flex: 1,
        alignSelf: "stretch",
        marginLeft: 10,
        marginRight: 10
    },
    page: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    navigation: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 30
    }
});

