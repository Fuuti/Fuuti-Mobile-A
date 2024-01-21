import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import ToggleSwitch from '../../components/ToggleSwitch';
import { MaterialIcons } from '@expo/vector-icons';
import { logoutUser } from '../../features/authSlice';
import { useAppDispatch } from '../../hooks/useStore';


const Settings = () => {
	const navigation: any = useNavigation();
	const dispatch = useAppDispatch();

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<TouchableOpacity style={styles.containerBackIcon} onPress={() => navigation.navigate({ name: "ProfileSettings" })}>
				<Entypo name="chevron-thin-left" size={24} color="#fff" />
			</TouchableOpacity>
			<View style={styles.containerBackIconText}>
				<Text style={styles.containerBackIconTextColor}>Settings</Text>
			</View>
			<View style={styles.ContainerImage}>
				<View style={styles.profileheaderContainertextCircle}>
					<View style={styles.profileheaderContainertextCircleimage}>
						{/* <Image
							style={styles.profileImage}
							source={require("../../assets/Profile.png")}
						/> */}
					</View>
				</View>
				<View >
					<View style={styles.profileImageText}>
						<View>
							<Text style={styles.profileImageIconEmailOne}>Tona Joy King</Text>
						</View>
						<View style={styles.profileImageIcon}>
							<Text>
								<AntDesign name="edit" size={24} color="#fff" />
							</Text>
						</View>
					</View>
					<View style={styles.profileImageIconEmail}>
						<Text style={styles.profileImageIconEmailText}>louisejoyk@email.com</Text>
					</View>
				</View>
			</View>

			<View style={styles.profileSettingsCenter}>
				<View style={styles.profileSettingsCenterdiv}>

					<View style={styles.profileSettingsCenterdivItem}>
						<View style={styles.profileSettingsLocation}>
							<Text>
								<Ionicons name="location-sharp" size={24} color="#fff" />
							</Text>
						</View>
						<View >
							<Text>Share Your Location</Text>
						</View>
					</View>

					<View>
						<ToggleSwitch />
					</View>
				</View>

				<View style={styles.profileSettingsLine} />
				<View style={styles.profileSettingsCenterdivItem}>
					<View style={styles.profileSettingsLocation}>
						<Text>
							<MaterialIcons name="perm-contact-calendar" size={24} color="#fff" />
						</Text>
					</View>
					<View>
						<Text>Emergency Contacts</Text>
					</View>
				</View>
				<View style={styles.profileSettingsLine} />
			</View>

			<View style={styles.profileSettingsCentertwo}>
				<View style={styles.profileSettingsCenterdiv}>
					<View style={styles.profileSettingsCenterdivItem}>
						<View style={styles.profileSettingsLocation}>
							<Text>
								<Entypo name="help" size={24} color="#fff" />
							</Text>
						</View>
						<View >
							<Text>Help</Text>
						</View>
					</View>
				</View>

				<View style={styles.profileSettingsLine} />
				<TouchableOpacity style={styles.profileSettingsCenterdivItem} onPress={() => dispatch(logoutUser())}>
					<View style={styles.profileSettingsLocation} >
						<MaterialIcons name="logout" size={24} color="#fff" />
					</View>
					<View>
						<Text>Log Out</Text>
					</View>
				</TouchableOpacity>
				<View style={styles.profileSettingsLine} />
			</View>
		</ScrollView>
	)
}

export default Settings

const styles = StyleSheet.create({
	scrollViewContainer: {
		flexGrow: 1,
		padding: 24
	},
	profileSettingsLine: {
		width: "100%",
		borderBottomWidth: 2,
		borderColor: "#E1E1E1",
		marginLeft: 50,
	},
	profileSettingsLocationone: {

	},

	profileSettingsLocation: {
		width: 40,
		height: 40,
		backgroundColor: "#1E1E1E",
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 50
	},
	profileSettingsCenterdivItem: {
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		gap: 10,
	},

	profileSettingsCenterdiv: {
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "space-between",
	},

	profileSettingsCenter: {
		marginTop: 80,
		backgroundColor: "#fff",
		height: 105,
		paddingLeft: 10,
		paddingTop: 5,
		overflow: "hidden",
		borderRadius: 10,
	},
	profileSettingsCentertwo: {
		marginTop: 80,
		backgroundColor: "#fff",
		height: 95,
		paddingLeft: 10,
		paddingTop: 5,
		overflow: "hidden",
		borderRadius: 10,
	},

	profileImageIconEmailOne: {
		fontFamily: "Poppins_800ExtraBold",
		fontSize: 20,
	},

	profileImageIconEmailText: {
		color: "#2F2F2F",
		fontFamily: "Poppins_600SemiBold"
	},

	profileImageIconEmail: {
		marginTop: 5,
	},

	profileImageIcon: {
		width: 50,
		height: 50,
		backgroundColor: "#1F1F1F",
		borderRadius: 50,
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		justifyContent: "center"
	},

	profileImageText: {
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		gap: 10
	},

	ContainerImage: {
		display: "flex",
		flexDirection: 'row',
		alignItems: "center",
		gap: 10
	},

	profileImage: {
		width: "100%",
		height: "100%",
	},

	profileheaderContainertextCircleimage: {
		width: 120,
		height: 120,
		backgroundColor: "black",
		borderRadius: 100,
		borderWidth: 1,
		borderColor: "#FFF",
		display: "flex",
		flexDirection: "row",
	},


	profileheaderContainertextCircle: {
		// width: "100%", 
	},


	containerBackIconTextColor: {
		fontFamily: "Poppins_800ExtraBold",
		fontSize: 26,
	},

	containerBackIconText: {
		marginVertical: 35,
		marginHorizontal: 30,
	},


	containerBackIcon: {
		marginTop: 60,
		width: 50,
		height: 50,
		backgroundColor: "#1E1E1E",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		borderRadius: 10,
	}

})