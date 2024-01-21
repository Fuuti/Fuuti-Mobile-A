import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { logoutUser } from '../../features/authSlice'
import { useAppDispatch } from '../../hooks/useStore';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ProfileSettings = () => {
	const navigation: any = useNavigation();
	const dispatch = useAppDispatch();
	const [email, setEmail] = useState("");

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<View style={styles.MainContainer}>
				<View style={styles.profileheaderContainer}>
					<View>
						<Text style={styles.profileheaderContainertext}></Text>
					</View>
					<View style={styles.profileContainerDown}>
						<Text style={styles.profileheaderContainertext}>Hello, <Text style={styles.profileContainerFontTest}>User101</Text></Text>
						<Text style={styles.profileheaderContainertext}>Beginner</Text>
					</View>
					<TouchableOpacity onPress={() => navigation.navigate("SettingsScreen")}>
						<Text style={styles.profileheaderContainertext}>
							<Feather name="settings" size={24} color="white" />
						</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.profileheaderContainertextCircle}>
					<View style={styles.profileheaderContainertextCircleimage}>
						{/* <Image
							style={styles.profileImage}
							source={require("../../assets/Profile.png")}
						/> */}
					</View>
				</View>
				<View style={styles.profileheaderName}>
					<Text style={styles.profileheaderNameText}>
						Change Picture
					</Text>
				</View>

				<View>
					<View style={styles.userAltIconflex}>
						<View style={styles.userAltIconflexsub1}>
							<Text style={styles.buttonTextInput}>
								Username
							</Text>
						</View>
						<View>
							<TextInput
								placeholder="Username"
								placeholderTextColor="#626262"
								style={styles.logininput}
								value={email}
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
					</View>
					<View style={styles.userAltIconflex}>
						<View style={styles.userAltIconflexsub1}>
							<Text style={styles.buttonTextInput}>
								Your Email
							</Text>
						</View>
						<View>
							<TextInput
								placeholder=" Email"
								placeholderTextColor="#626262"
								style={styles.logininput}
								value={email}
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
					</View>
					<View style={styles.userAltIconflex}>
						<View style={styles.userAltIconflexsub1}>
							<Text style={styles.buttonTextInput}>
								Phone Number
							</Text>
						</View>
						<View>
							<TextInput
								placeholder="+14987889999"
								placeholderTextColor="#626262"
								style={styles.logininput}
								value={email}
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
					</View>
					<View style={styles.userAltIconflex}>
						<View style={styles.userAltIconflexsub1}>
							<Text style={styles.buttonTextInput}>
								Password
							</Text>
						</View>
						<View>
							<TextInput
								placeholder="Password"
								placeholderTextColor="#626262"
								style={styles.logininput}
								value={email}
								onChangeText={(text) => setEmail(text)}
							/>
						</View>
					</View>
					<View style={styles.logininputButtonContainer}>
						<TouchableOpacity style={styles.logininputButton}>
							<Text style={styles.buttonText}>Update</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView >
	)
}

export default ProfileSettings



const styles = StyleSheet.create({
	scrollViewContainer: {
		flexGrow: 1,
	},

	profileheaderNameText: {
		fontFamily: "Poppins_400Regular",
	},

	buttonTextInput: {
		paddingBottom: 3,
		fontFamily: "Poppins_600SemiBold",
	},


	buttonText: {
		color: 'white',
		fontSize: 16,
		fontFamily: "Poppins_800ExtraBold",
	},
	logininputButtonContainer: {
		marginHorizontal: 50,

	},

	logininputButton: {
		width: "100%",
		height: 40,
		backgroundColor: "#171F1D",
		borderRadius: 8,
		marginTop: 40,
		justifyContent: 'center',
		alignItems: 'center',

	},

	userAltIconflex: {
		marginHorizontal: 30,
		marginBottom: 20,
	},
	userAltIconflexsub1: {

	},

	logininput: {
		height: 50,
		paddingLeft: 12,
		fontSize: 16,
		borderWidth: 2,
		borderColor: '#A9A9A9',
		fontFamily: "Poppins_400Regular",
		width: "100%",
		borderRadius: 8,
	},
	profileheaderName: {
		marginTop: 70,
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 20,
	},

	profileContainerFontTest: {
		fontFamily: "Poppins_400Regular",
	},

	profileContainerDown: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center"
	},

	profileImage: {
		width: "100%",
		height: "100%",
	},

	profileheaderContainertextCircleimage: {
		width: 135,
		height: 134,
		backgroundColor: "black",
		borderRadius: 100,
		borderWidth: 5,
		borderColor: "#FFF",
		display: "flex",
		flexDirection: "row",
	},

	MainContainer: {
		position: "relative"
	},

	profileheaderContainertextCircle: {
		width: "100%",
		position: "absolute",
		top: 120,
		display: "flex",
		flexDirection: 'row',
		justifyContent: "center",
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
		justifyContent: "space-between",
		alignItems: "center",
		paddingTop: 1,
		paddingHorizontal: 21,
		borderBottomLeftRadius: 15,
		borderBottomRightRadius: 15,
	},

	infoInputButton: {
		width: 255,
		height: 39,
		backgroundColor: "#FEEAEA",
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 26,
		alignSelf: 'center',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#f5b9b9",
	},

	infoInputSaveButton: {
		fontWeight: 'bold',
		color: "#FF4622",
	},
})


// < TouchableOpacity style = { styles.infoInputButton } onPress = {() => dispatch(logoutUser())} >
// 	<Text style={styles.infoInputSaveButton}>Logout</Text>
// 		</ >