import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ProgressBarChart from '../../components/ProgressBarChart';
import { FontAwesome5 } from '@expo/vector-icons';
import MapContainer from '../Map/MapContainer';

const Location = () => {
	const navigation: any = useNavigation();


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
				<View style={styles.profileContainerProgressflex1}>
					<View style={styles.profileContainerProgressflex2}>
						<Text style={styles.profileProgresstext1}>Week goal</Text><Text style={styles.profileProgresstext1}>50 km</Text>
					</View>
					<View>
						<Entypo name="chevron-thin-right" size={20} color="#333333" />
					</View>
				</View>
				<View style={styles.profileContainerProgressflex3}>
					<View><Text style={styles.profileProgresstext2}>35 km done</Text></View>
					<View><Text style={styles.profileProgresstext2}>15 km left</Text></View>
				</View>
				<ProgressBarChart />
			</View>
			<View style={styles.profileContainerLocation}>
				<MapContainer />
			</View>

			<View style={styles.profileContainerLocationText}>
				<View>
					<Text style={styles.profileActivityText}>Recent activity</Text>
				</View>
				<TouchableOpacity onPress={() => navigation.navigate("LocationMap")}>
					<Text style={styles.profileActivityText1}>All</Text>
				</TouchableOpacity>
			</View>


			<View style={styles.profileActivityWalking}>
				<View style={styles.profileActivityWalking1}>
					<View style={styles.profileActivityWalkingbg}>
						<FontAwesome5 name="walking" size={34} color="black" />
					</View>
					<View>
						<View>
							<Text style={styles.profileActivityWalkingText}>Currently walking</Text>
						</View>
						<View>
							<Text style={styles.profileActivityText2}>01:09:44</Text>
						</View>
					</View>
				</View>
				<View style={styles.profileActivityWalking2}>
					<View>
						<Text style={styles.profileActivityWalkingText}>10,9 km</Text>
					</View>
					<View>
						<Text style={styles.profileActivityText2}>539 kcal</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

export default Location

const styles = StyleSheet.create({

	profileActivityText2: {
		fontSize: 14,
		fontFamily: "Poppins_400Regular",
		color: "#F3F7FF"
	},

	profileActivityWalking2: {
		marginRight: 20
	},


	profileActivityWalkingText: {
		fontSize: 14,
		fontFamily: "Poppins_800ExtraBold",
		color: "#fff",
		marginBottom: 10,
	},


	profileActivityWalkingbg: {
		width: 60,
		height: 60,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#fff",
		borderRadius: 50,
	},

	profileActivityWalking1: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 10
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
		flexDirection: "row",
		marginHorizontal: 30,
		justifyContent: "space-between",
		marginTop: 30,
	},

	profileContainerLocation: {
		width: "90%",
		height: 300,
		backgroundColor: "#B6B9BF",
		marginHorizontal: 20,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: "#1E1E1E",
		marginTop: 140,
	},

	profileProgresstext2: {
		color: "#333333"
	},

	profileProgresstext1: {
		fontSize: 16,
		fontFamily: "Poppins_800ExtraBold",
		color: "#333333"
	},

	profileContainerProgressflex3: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 7,
	},

	profileContainerProgressflex2: {
		display: "flex",
		flexDirection: "row",
		gap: 20,
		marginBottom: 28,
	},

	profileContainerProgressflex1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between"
	},

	profileContainerProgress: {
		width: "90%",
		height: 120,
		backgroundColor: "#fff",
		position: "absolute",
		top: 150,
		marginHorizontal: 20,
		borderRadius: 16,
		padding: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
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