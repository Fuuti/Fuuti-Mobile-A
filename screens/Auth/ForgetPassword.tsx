import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialIndicator } from 'react-native-indicators';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { forgetPassword, reset } from '../../features/authSlice';
import Toast from '../../components/Toast';

const ForgetPassword = () => {
	const dispatch = useAppDispatch()
	const navigation: any = useNavigation();
	const { forgetdata, forgetisLoading, forgetisError, forgetisSuccess, forgetmessage } = useAppSelector(
		(state: { auth: any; }) => state.auth)
	const [email, setEmail] = useState("");

	// navigation.navigate("LoginOTPVerification")

	const onSubmitFormReg = (values: any) => {
		const value = { email }
		// @ts-ignore 
		dispatch(forgetPassword(email))
	}
	useEffect(() => {
		if (forgetisSuccess) {
			navigation.replace("LoginOTPVerification")
			dispatch(reset())
		} else if (forgetisError) {
			dispatch(reset())
		}
	}, [forgetisError, forgetisSuccess, forgetmessage, navigation, dispatch])

	return (
		<KeyboardAvoidingView
			style={styles.container1}
			behavior={Platform.OS === "ios" ? "padding" : "height"}>
			<View style={styles.logColor1}>
				<View style={styles.logColor2}>
					<Text style={styles.text1}>
						Forgot
						{'\n'}password?
					</Text>
				</View>
				<View style={styles.userAltIconflex}>
					<View style={styles.userAltIconflexsub1}>
						<Text>
							<FontAwesome5 name="user-alt" size={24} color="#626262" />
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
						<Text style={styles.logininputTextStar}>*</Text> We will send you a message to set or reset your new password
					</Text>
				</View>
				<View style={styles.signOutContainersubContainer}>
					<View style={styles.signOutContainersubtextIcon}>
						<TouchableOpacity onPress={onSubmitFormReg}>
							{forgetisLoading ? <MaterialIndicator color='white' size={20} /> : < MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />}
						</TouchableOpacity>
					</View>
				</View>
				<TouchableOpacity style={styles.signOutContainerBack} onPress={() => navigation.navigate("Login")} >
					<Text style={styles.signOutContainerBackText}>Back</Text>
				</TouchableOpacity>
			</View>
			<Toast isError={forgetisError} message={forgetmessage} color={'#F84F31'} down={true} />
			<Toast isSuccess={forgetisSuccess} message={forgetmessage} color={'#2ecc71'} down={true} />
		</KeyboardAvoidingView>
	)
}

export default ForgetPassword

const styles = StyleSheet.create({

	signOutContainerBackText: {
		color: "#676767",
		fontSize: 16,
	},

	signOutContainerBack: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignSelf: "center",
		position: "absolute",
		bottom: 50,

	},
	signOutContainersubContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 70,
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

	logininputTextStar: {
		color: "#FF4B26"
	},
	logininputTextColor: {
		color: "#676767",
		fontSize: 16,
	},

	logininputText: {
		marginTop: 70,
		marginHorizontal: 47,

	},

	userAltIconflex: {
		position: "absolute",
		top: 200,
		display: "flex",
		flexDirection: "row",
		marginHorizontal: 30,
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
		width: 280,
		color: "#fff"
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