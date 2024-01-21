import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';

const Statistic = () => {
	const navigation: any = useNavigation();
	const dummyData = [
		{ steps: '1009', cal: '539', km: '12.3', weight: '-3.5', totalFalls: '3' },
		// Add more sets of data as needed
	];

	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<View style={styles.StatisticContainer}>
				<View>
					{/* <TouchableOpacity style={styles.containerBackIcon} >
						<Entypo name="chevron-thin-left" size={20} color="#fff" />
					</TouchableOpacity> */}
				</View>
				<View>
					<Text style={styles.StatisticContainerText}>General statistics</Text>
				</View>
				<View>
				</View>
			</View>
			<View style={styles.StatisticContainer2}>
				<View>
					<Text style={styles.StatisticContainerTime}>Time period</Text>
				</View>
				<View>

					<View  >
						<View style={styles.StatisticContainerTimeDay}>
							<Text style={styles.StatisticContainerTimeDay1}>Day</Text>
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
								<View style={[styles.StatisticContainerTimeDayflex2, styles.StatisTimeborder]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>3</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Total falls</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.StatisticContainer2}>
				<View>
					<Text style={styles.StatisticContainerTime}>Time period</Text>
				</View>
				<View>

					<View  >
						<View style={styles.StatisticContainerTimeDay}>
							<Text style={styles.StatisticContainerTimeDay1}>Week</Text>
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
								<View style={[styles.StatisticContainerTimeDayflex2, styles.StatisTimeborder]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>3</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Total falls</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.StatisticContainer2}>
				<View>
					<Text style={styles.StatisticContainerTime}>Time period</Text>
				</View>
				<View>

					<View  >
						<View style={styles.StatisticContainerTimeDay}>
							<Text style={styles.StatisticContainerTimeDay1}>Month</Text>
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
								<View style={[styles.StatisticContainerTimeDayflex2, styles.StatisTimeborder]}>
									<Text style={styles.StatisticContainerTimeDaySubText}>3</Text>
									<Text style={styles.StatisticContainerTimeDaySubText2}>Total falls</Text>
								</View>
							</View>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

export default Statistic

const styles = StyleSheet.create({

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
		borderColor: "#333333"
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
		width: "100%",
		backgroundColor: "#1E1E1E",
		marginTop: 30,
		borderRadius: 16,
		padding: 20,
		alignItems: 'flex-start'
	},

	StatisticContainerText: {
		fontFamily: "Poppins_800ExtraBold",
		fontSize: 18,
		color: "#333333"
	},
	containerBackIcon: {
		width: 32,
		height: 32,
		backgroundColor: "#1E1E1E",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
		borderRadius: 10,
	},

	StatisticContainer: {
		marginTop: 50,
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},


	scrollViewContainer: {
		flexGrow: 1,
		backgroundColor: "#fff",
		padding: 20,
	},
})