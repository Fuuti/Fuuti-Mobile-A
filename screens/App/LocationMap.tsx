import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView, TextInput, Switch } from 'react-native'
import React, { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ToggleSwitch from '../../components/ToggleSwitch';
import MapContainer from '../Map/MapContainer';


const LocationMap = () => {
	const navigation: any = useNavigation();
	const [email, setEmail] = useState("");

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<View style={styles.profileheaderContainer}>
				<View style={styles.profileheaderContainertextCircleimage}>
					{/* <Image
						style={styles.profileImage}
						source={require("../../assets/Profile.png")}
					/> */}
				</View>
				<View style={styles.profileContainerDown}>
					<Text style={styles.profileheaderContainertext}>Hello,
						<Text style={styles.profileContainerFontTest}>Tona</Text></Text>
					<Text style={styles.profileheaderContainertext}>Beginner</Text>
				</View>
			</View>
			<View style={styles.profileContainerProgress}>
				<TextInput
					placeholder="Search your friends.."
					placeholderTextColor="#626262"
					style={styles.logininput}
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Ionicons name="ios-search-sharp" size={30} color="black" />
			</View>
			<View style={styles.profileContainerLocation}>
				<MapContainer />
			</View>

			<View style={styles.profileContainerLocationText}>
				<View>
					<Text style={styles.profileActivityText}>Share your location with friends</Text>
				</View>
				<ToggleSwitch />
			</View>


		</ScrollView>
	)
}

export default LocationMap

const styles = StyleSheet.create({
	logininput: {
		height: 40,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		width: 300,
	},

	profileContainerProgress: {
		width: "90%",
		height: 70,
		backgroundColor: "#fff",
		position: "absolute",
		top: 160,
		marginHorizontal: 20,
		borderRadius: 16,
		padding: 20,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},

	profileActivityWalking: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: 20,
		backgroundColor: "#1E1E1E",
		marginHorizontal: 20,
		padding: 10,
		borderRadius: 100,
	},

	profileActivityText1: {
		fontSize: 16,
		fontFamily: "Poppins_400Regular",
		color: "#5D63D1"
	},
	profileActivityText: {
		fontSize: 16,
		fontFamily: "Poppins_800ExtraBold",
		color: "#333333"
	},

	profileContainerLocationText: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		marginHorizontal: 30,
		marginTop: 30,
		gap: 10,
	},

	profileContainerLocation: {
		width: "90%",
		height: 480,
		backgroundColor: "#B6B9BF",
		marginHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#1E1E1E",
		marginTop: 60,
	},


	scrollViewContainer: {
		flexGrow: 1,
	},
	profileImage: {
		width: "100%",
		height: "100%",
	},
	profileheaderContainertextCircleimage: {
		width: 50,
		height: 50,
		backgroundColor: "black",
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "#1E1E1E",
		display: "flex",
		flexDirection: "row",
	},



	profileheaderContainertext: {
		color: "#fff"
	},

	profileheaderContainer: {
		width: "100%",
		height: 192,
		backgroundColor: "#1E1E1E",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		paddingTop: 1,
		paddingHorizontal: 21,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
		gap: 10
	},
	profileContainerDown: {
		display: "flex",
		flexDirection: "column",
	},

	profileContainerFontTest: {
		fontFamily: "Poppins_400Regular",
	},

})