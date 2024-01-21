import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const OTPVerification = () => {
	const navigation: any = useNavigation();
	const [email, setEmail] = useState("");


	return (
		<KeyboardAvoidingView
			style={styles.container1}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<View style={styles.logColor1}>
				<View style={styles.logColor2}>
					<Text style={styles.text1}>
						OTP
						{'\n'}
						Verification
					</Text>
				</View>
				<View style={styles.userAltIconflex}>
					<View style={styles.userAltIconflexsub1}>
						<Text>
							<FontAwesome5 name="phone-alt" size={24} color="#626262" />
						</Text>
					</View>
					<View>
						<TextInput
							placeholder="Username or Email"
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
				</View>
				<View style={styles.logininputText}>
					<Text style={styles.logininputTextColor}>
						We will send you one-time passowrd to your mobile number
					</Text>
				</View>
				<View style={styles.signOutContainer}>
					<View style={styles.signOutContainersub}>
						<Text style={styles.signOutContainersubtext}>Get password</Text>
						<View style={styles.signOutContainersubtextIcon}>
							<TouchableOpacity onPress={() => navigation.navigate("EnterOTP")}>
								<MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View style={styles.signOutContainerBack}>
					<View><Text>Or</Text></View>
					<TouchableOpacity onPress={() => navigation.navigate("Login")} style={styles.signOutContainerBackBorder}>
						<Text style={styles.signOutContainerBackText}>Turn back</Text>
					</TouchableOpacity>
				</View>
			</View>
		</KeyboardAvoidingView>
	)
}

export default OTPVerification

const styles = StyleSheet.create({
	signOutContainerBackBorder: {
		borderBottomColor: '#262626',
		borderBottomWidth: 1,
	},

	signOutContainersubtextIcon: {
		width: 51,
		height: 51,
		backgroundColor: "#000000",
		borderRadius: 50,
		display: "flex",
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5, // for Android


	},


	signOutContainersubtext: {
		fontSize: 24,
		fontWeight: "800",
		marginRight: 5,
	},


	signOutContainersub: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center"
	},

	signOutContainer: {
		width: "100%",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
		marginBottom: 50,

	},
	signOutContainerBackText: {
		color: "#676767",
		fontSize: 16,
	},

	signOutContainerBack: {
		display: "flex",
		justifyContent: "center",
		alignSelf: "center",
		alignItems: "center",
		gap: 5,

	},




	logininputTextColor: {
		color: "#676767",
		fontSize: 16,
	},

	logininputText: {
		marginTop: 21,
		marginHorizontal: 47,

	},

	userAltIconflex: {
		display: "flex",
		flexDirection: "row",
		marginHorizontal: 30,
		marginTop: 60,
		borderWidth: 2,
		borderColor: '#262626',
		padding: 1,
		alignItems: "center",
		backgroundColor: "#262626",
		borderRadius: 10,
	},
	userAltIconflexsub1: {
		width: "18%",
		textAlign: "center",
		padding: 20,
	},


	logininput: {
		height: 55,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		backgroundColor: "#262626",
		width: 280
	},
	container1: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},

	logColor1: {
		flex: 1,
		backgroundColor: "#FFF",
		width: "100%",
	},

	logColor2: {
		backgroundColor: "#1E1E1E",
		width: "100%",
		height: 232,
		borderBottomLeftRadius: 32,
		borderBottomRightRadius: 32,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",

	},


	text1: {
		color: "#fff",
		fontSize: 36,
		fontFamily: "Poppins_400Regular",
		margin: 25,
	},
})