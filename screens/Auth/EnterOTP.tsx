import { Keyboard, KeyboardAvoidingView, NativeSyntheticEvent, Platform, Pressable, StatusBar, StyleSheet, Text, TextInput, TextInputKeyPressEventData, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ButtonContainer, ButtonText } from '../../components/styles';
import OTPInput from '../../components/OTPInput';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { MaterialIndicator } from 'react-native-indicators';
import Toast from '../../components/Toast';
import { RegenerateOTP, reset, verifyOTP } from '../../features/authSlice';


const EnterOTP = () => {
	const dispatch = useAppDispatch()
	const route: any = useRoute();
	const { itemId, email: emails } = route.params;
	const { verifyOTPisLoading, verifyOTPisError, verifyOTPisSuccess, verifyOTPmessage } = useAppSelector((state: { auth: any; }) => state.auth)
	const { RegenerateOTPisLoading, RegenerateOTPisError, RegenerateOTPisSuccess, RegenerateOTPmessage } = useAppSelector((state: { auth: any; }) => state.auth)

	console.log('emails', emails)

	const navigation: any = useNavigation();
	const [email, setEmail] = useState("");
	const [isLoading, setLoading] = useState<any>(false);
	const [error, setError] = useState<any>(false);
	const [message, setMessage] = useState<any>("");
	const [otpCode, setOTPCode] = useState("");
	const [isPinReady, setIsPinReady] = useState(false);
	const maximumCodeLength = 6;
	const [input, setInput] = useState<any>({
		otp: "",
		user_id: ""
	})


	console.log('route', route)

	useEffect(() => {
		if (verifyOTPisSuccess) {
			navigation.replace("Login")
		} else if (verifyOTPisError) {
			dispatch(reset())
		} else if (RegenerateOTPisError) {
			dispatch(reset())
		} else if (RegenerateOTPisSuccess) {
			setTimeout(() => {
				dispatch(reset())
			}, 3000);
		}
	}, [verifyOTPisError, RegenerateOTPisError, verifyOTPisSuccess, message, navigation, dispatch])


	useEffect(() => {
		setInput((prevState: any) => {
			return ({
				...prevState,
				otp: otpCode,
				user_id: itemId,
			});
		});
	}, [itemId, setInput]);


	const onSubmitRegenerateg = () => {
		const value = { email: emails };
		// @ts-ignore 
		dispatch(RegenerateOTP(value))
	}

	const onSubmitFormReg = () => {
		const value = { ...input };
		// @ts-ignore 
		dispatch(verifyOTP(value))
	}

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
				<View style={styles.EnterText}>
					<Text>
						Enter the OTP sent to your <Text style={styles.EnterTextnum}>Email!</Text>
					</Text>
				</View>
				<View style={styles.userAltIconflex}>

					{/* {inputs.map((value, index) => (
						<View key={index}>
							<TextInput
								maxLength={1}
								placeholderTextColor="#626262"
								style={styles.logininput}
								value={value}
								onChangeText={(text) => handleInput(index, text)}
								onKeyPress={(e) => handleKeyPress(e, index)}
								// @ts-ignore
								onPaste={(e: { nativeEvent: { text: { preventDefault: () => void; clipboardData: { getData: (arg0: string) => any; }; }; }; }) => handlePaste(e.nativeEvent.text)}
							/>
						</View>
					))} */}
					{/* <View>
						<TextInput
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
					<View>
						<TextInput
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
					<View>
						<TextInput
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
					<View>
						<TextInput
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View>
					<View>
						<TextInput
							placeholderTextColor="#626262"
							style={styles.logininput}
							value={email}
							onChangeText={(text) => setEmail(text)}
						/>
					</View> */}
					{/* onPress={Keyboard.dismiss} */}
					<Pressable style={styles.container} onPress={Keyboard.dismiss}>
						<OTPInput
							code={otpCode}
							setCode={setOTPCode}
							maximumLength={maximumCodeLength}
							setIsPinReady={setIsPinReady}
						/>

						{/* <ButtonContainer
							disabled={!isPinReady}
							style={{
								backgroundColor: !isPinReady ? "grey" : "#000000",
							}}
						>
							<ButtonText
								style={{
									color: !isPinReady ? "black" : "#EEEEEE",
								}}
							>
								Login
							</ButtonText>
						</ButtonContainer> */}
						<StatusBar />
					</Pressable>
				</View>
				<View style={styles.logininputTextContainer}>
					<View>
						{RegenerateOTPisSuccess ? "" :
							<Text style={styles.logininputTextColor}>
								Didn’t you recive the SMS?
							</Text>}
					</View>
					{RegenerateOTPisSuccess ? <Text>OTP have been sent to your mail</Text> :
						<TouchableOpacity style={styles.logininputTextResendSup} onPress={onSubmitRegenerateg}>
							<Text style={styles.logininputTextResend}>Resend SMS</Text>
						</TouchableOpacity>}

				</View>
				<View style={styles.signOutContainer}>
					<View style={styles.signOutContainersub}>
						<Text style={styles.signOutContainersubtext}>Verify</Text>
						<View style={styles.signOutContainersubtextIcon}>
							<TouchableOpacity onPress={onSubmitFormReg} disabled={!isPinReady}>
								{verifyOTPisLoading ? <MaterialIndicator color='white' size={20} /> : <MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />}

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
				<Toast isError={verifyOTPisError} message={verifyOTPmessage} color={'#F84F31'} down={true} />
				<Toast isError={RegenerateOTPisError} message={RegenerateOTPmessage} color={'#F84F31'} down={true} />
				<Toast isSuccess={verifyOTPisSuccess} message={verifyOTPmessage} color={'#2ecc71'} down={true} />
				<Toast isSuccess={RegenerateOTPisSuccess} message={"OTP have been sent to your mail"} color={'#2ecc71'} down={true} />
			</View>
		</KeyboardAvoidingView>
	)
}

export default EnterOTP

const styles = StyleSheet.create({
	signOutContainerBackBorder: {
		borderBottomColor: '#262626',
		borderBottomWidth: 1,
	},
	logininputTextContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: 'center',
		gap: 2,
		marginTop: 20,
	},

	container: {
		flex: 1,
		// backgroundColor: "#141414",
		alignItems: "center",
		justifyContent: "center",
	},

	logininputTextResend: {
		// marginBottom: 30,
		// borderBottomColor: 'red',
		// borderBottomWidth: 1,
	},
	logininputTextResendSup: {
		borderBottomColor: '#262626',
		borderBottomWidth: 1,
	},

	EnterTextnum: {
		fontWeight: "800"
	},

	EnterText: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 35,
		marginBottom: 15,

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
		marginTop: 20,
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
		justifyContent: "center",
		gap: 10,
		padding: 1,
		alignItems: "center",
		// backgroundColor: "#262626",
		borderRadius: 10,
	},


	logininput: {
		height: 55,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		backgroundColor: "#262626",
		width: 50,
		borderRadius: 10
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

