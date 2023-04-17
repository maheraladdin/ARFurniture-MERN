import {StyleSheet, View} from "react-native";
import ContinueButton from "../myComponents/buttons/continue_button";
import AdvertisementsViewPager from "../myComponents/adv_page/advertisementsViewPager";
import AdvertisementsHeader from "../myComponents/adv_page/advertisementsHeader";


export default function advertisement() {
	return (
		<View style={styles.activity}>
			{/* header */}
			<AdvertisementsHeader />

			{/* viewPager */}
			<AdvertisementsViewPager />

			{/* continue button */}
			<ContinueButton activity="home"/>
		</View>
	);
}

const styles = StyleSheet.create({
	activity: {
		marginTop: 20,
		marginBottom: 20,
		flex: 1,
		justifyContent: "space-between",
		alignItems: "center",
		gap: 20,
	}
});
