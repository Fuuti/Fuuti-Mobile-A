import React, { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import GoogleSVG from "../../assets/svg/GoogleSVG";
import { Formik } from "formik";
import * as Yup from 'yup'
import Toast from "../../components/Toast";
import { useAppDispatch, useAppSelector } from "../../hooks/useStore";
import { register, reset } from "../../features/authSlice";
import { MaterialIndicator } from "react-native-indicators";

const SignUp = () => {
	const dispatch = useAppDispatch()
	const navigation: any = useNavigation();
	const { dataR, isLoadingR, isErrorR, isSuccessR, messageR } = useAppSelector(
		(state: { auth: any; }) => state.auth)


	const [email, setEmail] = useState('');
	const [passwordShown, setPasswordShown] = useState(true);
	const [icons, setIcons] = useState<any>("eye-off-outline");
	const togglePasswordVisiblity = () => {
		setIcons(!icons ? "eye-outline" : "eye-off-outline");
		if (icons === "eye-off-outline" && passwordShown === true) {
			setIcons("eye-outline");
			setPasswordShown(false);
		} else {
			setIcons("eye-off-outline");
			setPasswordShown(true);
		}
	};
	const validate = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Required'),
		new_password: Yup.string()
			.min(8, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
		confirm_password: Yup.string()
			.nullable() // Explicitly mark the field as nullable
			.oneOf([Yup.ref("new_password"), null], "Password must match")
			.required("Confirm Password is required"),
	});

	useEffect(() => {
		if (isSuccessR) {
			// @ts-ignore 
			setTimeout(() => {
				navigation.replace("EnterOTP", { itemId: dataR?.data?.user, email: email })
			}, 3000);
		}
		dispatch(reset())
	}, [isSuccessR, messageR, navigation, dispatch])



	const onSubmitFormReg = (values: any) => {
		const value = { ...values };
		setEmail(value.email)
		// @ts-ignore 
		dispatch(register(value))
	}
	// onPress = {() => navigation.navigate("SignUp")}
	// onPress = {() => navigation.navigate("OTPVerification")}

	return (
		<View style={{ flex: 1 }}>
			<KeyboardAvoidingView
				style={styles.container1}
				behavior={Platform.OS === "ios" ? "padding" : "height"}>
				<View style={styles.logColor1}>
					<View style={styles.logColor2}>
						<Text style={styles.text1}>
							Create an{'\n'}account
						</Text>
					</View>

					<Formik
						enableReinitialize
						validationSchema={validate}
						initialValues={{
							email: '',
							new_password: '',
							confirm_password: '',
						}}
						onSubmit={onSubmitFormReg}>

						{({ values, errors, handleChange, handleSubmit }): any => (
							<View>
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
											onChangeText={handleChange('email')}
											value={values.email}
										/>
										{errors.email && <Text style={styles.errors}>{errors.email}</Text>}
									</View>
								</View>

								<View style={styles.userAltIconflex1}>
									<View style={styles.userAltIconflexsub1}>
										<Text>
											<MaterialIcons name="lock" size={25} color="#626262" />
										</Text>
									</View>
									<View>
										<TextInput
											secureTextEntry={passwordShown}
											placeholder="Password"
											placeholderTextColor="#626262"
											style={styles.logininput2}
											onChangeText={handleChange('new_password')}
											value={values.new_password}
										/>
										{errors.new_password && <Text style={styles.errors}>{errors.new_password}</Text>}
										<Ionicons
											name={icons}
											size={25}
											style={styles.eyeOutline}
											onPress={() => togglePasswordVisiblity()}
											color={"#626262"}
										/>
									</View>
								</View>
								<View style={[styles.userAltIconflex1, styles.userAltIconflex1Top]}>
									<View style={styles.userAltIconflexsub1}>
										<Text>
											<MaterialIcons name="lock" size={25} color="#626262" />
										</Text>
									</View>
									<View>
										<TextInput
											secureTextEntry={passwordShown}
											placeholder="Confirm Password"
											placeholderTextColor="#626262"
											style={styles.logininput2}
											onChangeText={handleChange('confirm_password')}
											value={values.confirm_password}
										/>
										{errors.confirm_password && <Text style={styles.errors}>{errors.confirm_password}</Text>}
										<Ionicons
											name={icons}
											size={25}
											style={styles.eyeOutline}
											onPress={() => togglePasswordVisiblity()}
											color={"#626262"}
										/>

									</View>
								</View>
								<View style={styles.loginForgot} >
									<Text >By clicking the Register button, you agree to the public offer</Text>
								</View>

								<View style={styles.signOutContainer}>
									<View style={styles.signOutContainersub}>
										<Text style={styles.signOutContainersubtext}>Register</Text>
										<View style={styles.signOutContainersubtextIcon}>
											{/* @ts-ignore */}
											<TouchableOpacity onPress={handleSubmit}>
												{isLoadingR ? <MaterialIndicator color='white' size={20} /> : < MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />}

											</TouchableOpacity>
										</View>
									</View>
								</View>
								<View style={styles.signOutContainerTwo}>
									<View style={styles.signOutContainerTwoSub}>
										<TouchableOpacity style={styles.signOutContainerTwoSubtext1} onPress={() => navigation.navigate("Login")}>
											<Text style={styles.signOutContainerTwoSubtextSign}>back to login</Text>
										</TouchableOpacity>
										{/* <View style={styles.signOutContainerTwoSubtext2}>
											<TouchableOpacity style={styles.signOutContainerTwoSubtext2box1} >
												<GoogleSVG />
											</TouchableOpacity>
											<TouchableOpacity style={styles.signOutContainerTwoSubtext2box1}>
												<Text>
													<Ionicons name="ios-logo-apple" size={24} color="#fff" />
												</Text>
											</TouchableOpacity>
											<TouchableOpacity style={styles.signOutContainerTwoSubtext2box1}>
												<Text>
													<FontAwesome name="facebook" size={26} color="#fff" />
												</Text>
											</TouchableOpacity>
										</View> */}
									</View>

								</View>


							</View>
						)}
					</Formik>
				</View>


			</KeyboardAvoidingView>
			<Toast isError={isErrorR} message={messageR} color={'#F84F31'} />
			<Toast isSuccess={isSuccessR} message={messageR} color={'#2ecc71'} />
		</View >
	)
}

export default SignUp

const styles = StyleSheet.create({
	errors: { color: "red" },
	erorrinput: { color: "red" },
	userAltIconflex1Top: {
		marginTop: 30,
	},
	signOutContainerTwoSubtextSign: {
		fontSize: 20,
		fontWeight: "300",
		color: "#676767"
	},


	signOutContainerTwoSubtext2box1: {
		width: 48,
		height: 48,
		backgroundColor: "#262626",
		display: "flex",
		justifyContent: "center",
		borderRadius: 50,
		alignItems: "center"
	},

	signOutContainerTwoSubtext2: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 40,
	},

	signOutContainerTwoSubtext1: {
		margin: 10,
	},

	signOutContainerTwoSub: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},

	signOutContainerTwo: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
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
		marginTop: 60,
		marginBottom: 50,

	},

	userAltIconflexsub1: {
		width: "18%",
		textAlign: "center",
		padding: 20,
	},

	userAltIconflex: {
		display: "flex",
		flexDirection: "row",
		margin: 30,
		borderWidth: 2,
		borderColor: '#262626',
		padding: 1,
		alignItems: "center",
		backgroundColor: "#262626",
		borderRadius: 10,
	},

	userAltIconflex1: {
		display: "flex",
		flexDirection: "row",
		marginHorizontal: 30,
		marginVertical: 1,
		borderWidth: 2,
		borderColor: '#262626',
		padding: 1,
		alignItems: "center",
		backgroundColor: "#262626",
		borderRadius: 10,
	},

	userAltIcon: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: '#F0F0F0',
		borderRadius: 8,
		marginVertical: 10,
	},
	icon: {
		marginRight: 12,
	},

	loginForgot: {
		fontSize: 17,
		marginLeft: 30,
		marginRight: 60,
		marginTop: 20,
	},


	errorText: {
		fontSize: 10,
		color: 'red',
		marginLeft: 45,
	},
	eyeOutline: {
		position: "absolute",
		right: -28,
		bottom: 15,
	},

	container1: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},



	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: "bold",
		letterSpacing: 0.25,
		color: "white",
		fontFamily: "Poppins_600SemiBold",
	},
	text3: {
		fontSize: 16,
		textAlign: "center",
		color: "#20549D",
		marginTop: 30,
		fontFamily: "Poppins_600SemiBold",
	},

	logininput: {
		height: 56,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		backgroundColor: "#262626",
		width: 280,
		color: "#fff"
	},
	logininput2: {
		height: 56,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		backgroundColor: "#262626",
		width: 240,
		color: "#fff"
	},

	logintext1: {
		fontSize: 20,
		textAlign: "center",
		marginTop: 20,
		color: "#20549D",
		fontWeight: "400",
		fontFamily: "Poppins_800ExtraBold",
	},
	logintext2: {
		fontSize: 15,
		textAlign: "center",
		color: "#20549D",
		fontFamily: "Poppins_400Regular",
	},



	text1: {
		color: "#fff",
		fontSize: 36,
		fontFamily: "Poppins_400Regular",
		margin: 25,
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
})