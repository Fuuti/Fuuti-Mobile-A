import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import MapContainer from '../Map/MapContainer'

const Home = () => {
	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>

			<View style={styles.StatisticContainer}>
				<View>
				</View>
				<View>
					<Text style={styles.StatisticContainerText}>Currently walking</Text>
				</View>
				<View style={styles.containerBackIcon}>
					<View style={styles.IconGps}>
						<Text>GPS</Text>
					</View>
					<View style={styles.IconGps1}>
					</View>
					<View style={styles.IconGps2}>
					</View>
					<View style={styles.IconGps3}>
					</View>
				</View>
			</View>

			<View style={styles.StatisticContainer2}>
				<View>
					<Text style={styles.StatisticContainerTime}>Walking time</Text>
				</View>
				<View>

					<View >
						<View style={styles.StatisticContainerTimeDay}>
							<Text style={styles.StatisticContainerTimeDay1}>01:09:44</Text>
							<Text style={styles.StatisticContainerTimeDay2}>10.21.2023</Text>
						</View>
						<View style={styles.StatisticContainerTimeDay3}>
							<View style={styles.StatisticContainerTimeDayflex}>
								<View style={styles.StatisticContainerTimeDaySub}>
									<Text style={styles.StatisticContainerTimeDaySubText}>1009</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Steps</Text>
								</View>
								<View style={[styles.StatisticContainerTimeDaySub, styles.StatisTimeborder]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>539</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Cal</Text>
								</View>
								<View style={[styles.StatisticContainerTimeDaySub, styles.StatisTimeborder]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>12,3</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Km</Text>
								</View>
							</View>
							<View style={styles.StatisticContainerTimeDayflex1}>
								<View style={styles.StatisticContainerTimeDayflex2}>
									<View style={styles.StatisticContainerTimeDaySub1}>
										<Text style={styles.StatisticContainerTimeDaySubText}>-3,5</Text>
										<Text style={styles.StatisticContainerTimeDaySubText2}>Kg</Text>
									</View>
									<View>
										<Text>Weight</Text>
									</View>
								</View>
								<View style={[styles.StatisticContainerTimeDayflex2, styles.StatisTimeborder2]}>
									<View style={styles.StatisticContainerTimeDaySub1}>
										<Text style={styles.StatisticContainerTimeDaySubText}>-3,5</Text>
										<Text style={styles.StatisticContainerTimeDaySubText2}>Kg</Text>
									</View>
									<View>
										<Text>Avg. Heart rate</Text>
									</View>
								</View>

								<View style={[styles.StatisticContainerTimeDayflex2]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>3</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>cadence</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.StatisticHomeImage}>

				<MapContainer />
			</View>
		</ScrollView>
	)
}

export default Home

const styles = StyleSheet.create({

	Image: {
		width: "100%",
		height: "100%",
	},

	StatisticHomeImage: {
		width: "100%",
		backgroundColor: "#33333339",
		flex: 1,
		height: '100%',
		zIndex: 0,
	},


	StatisTimeborder2: {
		// borderRightWidth: 1,
		// borderColor: "#33333339"
	},
	StatisticContainerTimeDaySubText2: {
		color: "#333333",
	},

	StatisticContainerTimeDaySubText: {
		fontFamily: "Poppins_800ExtraBold",
		color: "#333333",
		fontSize: 20,
	},

	StatisTimeborder: {
		borderLeftWidth: 1,
		borderColor: "#33333339"
	},
	StatisticContainerTimeDayflex2: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: 163,
		height: 60,
		justifyContent: "center",

	},

	StatisticContainerTimeDayflex1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",

	},

	StatisticContainerTimeDaySub: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: 110,
		height: 55,

	},
	StatisticContainerTimeDaySub1: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},

	StatisticContainerTimeDayflex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
		padding: 8,

	},

	StatisticContainerTimeDay3: {
		backgroundColor: "#fff",
		width: "100%",
		height: 140,
		borderRadius: 10,
	},

	StatisticContainerTimeDay2: {
		color: "#ffffff9f",
		fontSize: 18,
	},

	StatisticContainerTimeDay1: {
		fontFamily: "Poppins_800ExtraBold",
		color: "#fff",
		fontSize: 20,
	},
	StatisticContainerTimeDay: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 30,
		marginTop: 20,
		marginBottom: 10
	},

	StatisticContainerTime: {
		color: "#fff",
		fontSize: 16,
	},

	StatisticContainer2: {
		width: "90%",
		backgroundColor: "#1E1E1E",
		marginTop: 30,
		borderRadius: 16,
		padding: 20,
		marginHorizontal: 20,
		position: 'absolute',
		top: 70,
		left: 0,
		right: 0,
		zIndex: 1,
		alignItems: 'flex-start'
	},
	IconGps: {

	},

	IconGps1: {
		width: 2,
		height: 5,
		backgroundColor: "#78D868"
	},
	IconGps2: {
		width: 2,
		height: 8,
		backgroundColor: "#78D868"
	},
	IconGps3: {
		width: 2,
		height: 11,
		backgroundColor: "#78D868"
	},
	StatisticContainerText: {
		fontFamily: "Poppins_800ExtraBold",
		fontSize: 18,
		color: "#333333"
	},

	containerBackIcon: {
		width: "auto",
		height: 25,
		backgroundColor: "#fff",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 2,
		padding: 5,
		borderRadius: 7
	},

	StatisticContainer: {
		// marginTop: 20,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginHorizontal: 20,
		height: 150
	},

	scrollViewContainer: {
		flexGrow: 1,
		backgroundColor: "#F3F7FF",
		// padding: 20,
	},
})