import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from "formik";
import * as Yup from 'yup'
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { reset, verifyPassword } from '../../features/authSlice';
import { MaterialIndicator } from 'react-native-indicators';
import { Ionicons } from '@expo/vector-icons';
import Toast from '../../components/Toast';


const LoginOTPVerification = () => {
	const dispatch = useAppDispatch()
	const navigation: any = useNavigation();
	const { verifyPasswordisLoading, verifyPasswordisError, verifyPasswordisSuccess, verifyPasswordmessage } = useAppSelector(
		(state: { auth: any; }) => state.auth)


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
		otp: Yup.string().required('otp is Required'),
		new_password: Yup.string().min(8, ({ min }) => `Password must be at least ${min} characters`)
			.required('Password is required'),
		confirm_password: Yup.string()
			.nullable()
			.oneOf([Yup.ref("new_password"), null], "Password must match")
			.required("Confirm Password is required"),
	});

	useEffect(() => {
		if (verifyPasswordisSuccess) {
			// @ts-ignore 
			setTimeout(() => {
				navigation.replace("Login")
			}, 3000);
		}
		dispatch(reset())
	}, [verifyPasswordisSuccess, verifyPasswordmessage, navigation, dispatch])



	const onSubmitFormReg = (values: any) => {
		const value = { ...values };

		// @ts-ignore 
		dispatch(verifyPassword(value))
	}

	return (
		<View style={{ flex: 1 }}>
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


					<Formik
						enableReinitialize
						validationSchema={validate}
						initialValues={{
							email: '',
							otp: '',
							new_password: '',
							confirm_password: '',
						}}
						onSubmit={onSubmitFormReg}>

						{({ values, errors, handleChange, handleSubmit }): any => (
							<View>
								<View style={[styles.userAltIconflex1, styles.userAltIconflex1Top]}>
									<View style={styles.userAltIconflexsub1}>
										<Text>
											<FontAwesome5 name="user-alt" size={24} color="#626262" />
										</Text>
									</View>
									<View>
										<TextInput
											placeholder="Email"
											placeholderTextColor="#626262"
											style={styles.logininput2}
											onChangeText={handleChange('email')}
											value={values.email}
										/>
										{errors.email && <Text style={styles.errors}>{errors.email}</Text>}
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
											placeholder="OTP"
											placeholderTextColor="#626262"
											style={styles.logininput2}
											onChangeText={handleChange('otp')}
											value={values.otp}
										/>
										{errors.otp && <Text style={styles.errors}>{errors.otp}</Text>}
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
										<Text style={styles.signOutContainersubtext}>Verify</Text>
										<View style={styles.signOutContainersubtextIcon}>
											{/* @ts-ignore */}
											<TouchableOpacity onPress={handleSubmit}>
												{verifyPasswordisLoading ? <MaterialIndicator color='white' size={20} /> : < MaterialCommunityIcons name="arrow-right" size={24} color="#fff" />}

											</TouchableOpacity>
										</View>
									</View>
								</View>
								{/* <View style={styles.signOutContainerTwo}>
								<View style={styles.signOutContainerTwoSub}>
									<TouchableOpacity style={styles.signOutContainerTwoSubtext1} onPress={() => navigation.navigate("Login")}>
										<Text style={styles.signOutContainerTwoSubtextSign}>back to login</Text>
									</TouchableOpacity>
								</View>

							</View> */}


							</View>
						)}
					</Formik>
				</View>
			</KeyboardAvoidingView>
			<Toast isError={verifyPasswordisError} message={verifyPasswordmessage} color={'#F84F31'} down={true} />
			<Toast isSuccess={verifyPasswordisSuccess} message={verifyPasswordmessage} color={'#2ecc71'} down={true} />
		</View>
	)
}

export default LoginOTPVerification

const styles = StyleSheet.create({

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
		marginTop: 20,
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

	// signOutContainersubtextIcon: {
	// 	width: 51,
	// 	height: 51,
	// 	backgroundColor: "#000000",
	// 	borderRadius: 50,
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	flexDirection: "row",
	// 	alignItems: "center",
	// 	shadowColor: "#000",
	// 	shadowOffset: {
	// 		width: 0,
	// 		height: 2,
	// 	},
	// 	shadowOpacity: 0.25,
	// 	shadowRadius: 3.84,
	// 	elevation: 5, // for Android


	// },


	// signOutContainersubtext: {
	// 	fontSize: 24,
	// 	fontWeight: "800",
	// 	marginRight: 5,
	// },


	// signOutContainersub: {
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	alignItems: "center"
	// },

	// signOutContainer: {
	// 	width: "100%",
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	justifyContent: "center",
	// 	marginTop: 20,
	// 	marginBottom: 50,

	// },
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

	// userAltIconflex: {
	// 	display: "flex",
	// 	flexDirection: "row",
	// 	justifyContent: "center",
	// 	gap: 10,
	// 	padding: 1,
	// 	alignItems: "center",
	// 	// backgroundColor: "#262626",
	// 	borderRadius: 10,
	// },


	logininput: {
		height: 55,
		padding: 1,
		fontSize: 16,
		borderColor: "#262626",
		fontFamily: "Poppins_400Regular",
		backgroundColor: "#262626",
		width: 50,
		borderRadius: 10,
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