import { StyleSheet, View,TouchableOpacity,Image,Dimensions} from "react-native";
import ArIcon from "../myComponents/adv_page/ar_icon";
import Slogan from "../myComponents/adv_page/label_light_mode";
import ContinueButton from "../myComponents/buttons/continue_button";
import { useRouter } from "expo-router";
import PagerView from "react-native-pager-view";
import { useEffect,useState } from "react";


export default function advertisement() {
	// router to navigate between activities
	const router = useRouter();

	// images
	const [images, setImages] = useState([]);

	useEffect(() => {
		// fetch advertisement from server
		fetch("http://192.168.1.18:3000/api/advertisements")
			.then((response) => response.json())
			.then((data) => {
				setImages(data);
			})
			.catch((error) => console.log("error", error));
	},[]);

	return (
		<View style={styles.activity}>

			{/* header */}
			<View style={styles.container}>
				<Slogan />
				<ArIcon />
			</View>

			{/* viewPager */}
			<PagerView style={styles.viewPager} initialPage={0}>
				{

					images.map((image) => {
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

			{/* continue button */}
			<TouchableOpacity onPress={() => router.push("home")}>
				<ContinueButton />
			</TouchableOpacity>

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
	},
	activity: {
		marginTop: 20,
		marginBottom: 20,
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		gap: 20,
	},
	viewPager: {
		flex: 1,
		alignSelf: "stretch",
		marginLeft: 10,
		marginRight: 10
	},
	page: {
		justifyContent: 'center',
		alignItems: 'center',
	}
});
