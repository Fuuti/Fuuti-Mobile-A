import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import LineChartExample from '../../components/LineChartExample';


const WeightMeasure = () => {
	return (
		<ScrollView contentContainerStyle={styles.scrollViewContainer}>
			<View style={styles.StatisticContainer}>
				<View>
					{/* <TouchableOpacity style={styles.containerBackIcon} >
						<Entypo name="chevron-thin-left" size={20} color="#fff" />
					</TouchableOpacity> */}
				</View>
				<View>
					<Text style={styles.StatisticContainerText}>Weight Measure</Text>
				</View>
				<View>
				</View>
			</View>
			<View style={styles.StatisticContainer2}>
				<View style={styles.StatisticContainerTimeDay}>
					<View>
						<Text style={styles.StatisticContainerTimeDay1}>weight measure</Text>
					</View>
					<View style={styles.StatisticContainerbox}>
						<Text style={styles.StatisticContainerTimeDay2}>
							<Entypo name="plus" size={24} color="#fff" />
						</Text>
					</View>
				</View>

				<View style={styles.StatisticContainerCircle}>
					<LinearGradient colors={['#1E1E1E', '#393838', '#fff']} style={styles.StatisticContainerCircleColor}>
						<View style={styles.StatisticContainerCircleSmail}>
							<View><Text style={styles.StatisticContainerInnerText}>72 kg</Text></View>
							<View><Text style={styles.StatisticInnerText}>Since Jan 2023:</Text></View>
							<View style={styles.StatisticInnerTextflex}>
								<View><Text style={styles.StatisticInnerText1}>-3.1 Kg</Text></View>
								<View><Text style={styles.StatisticInnerText1}>-5% Body fat</Text></View>
							</View>
						</View>
					</LinearGradient>
				</View>
				<View>
					<View  >
						<View style={styles.StatisticContainerTimeDay3}>
							<LineChartExample />
						</View>
					</View>
				</View>
			</View>

			<View style={styles.StatisticContainerBottom}>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>72.2 kg</Text>
					<Text style={styles.StatisticBottomColorText2}>Weight</Text>
				</View>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>19.1</Text>
					<Text style={styles.StatisticBottomColorText2}>BMI</Text>
				</View>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>59.2%</Text>
					<Text style={styles.StatisticBottomColorText2}>Body Fat</Text>
				</View>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>56.3%</Text>
					<Text style={styles.StatisticBottomColorText2}>Body water</Text>
				</View>
			</View>
			<View style={styles.StatisticContainerBottom2}>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>43.3%</Text>
					<Text style={styles.StatisticBottomColorText2}>Sceletal Muscle</Text>
				</View>
				<View style={styles.StatisticContainerBottomColor}>
					<Text style={styles.StatisticBottomColorText1}>2.2 kg</Text>
					<Text style={styles.StatisticBottomColorText2}>Bone Mass</Text>
				</View>
			</View>
		</ScrollView>
	)
}

export default WeightMeasure

const styles = StyleSheet.create({

	StatisticInnerText1: {
		color: "#fff",
		fontSize: 10,
	},

	StatisticInnerTextflex: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		gap: 20,
	},

	StatisticInnerText: {
		color: "#ffffff9f",
	},

	StatisticContainerInnerText: {
		fontFamily: "Poppins_800ExtraBold",
		color: "#fff",
		fontSize: 30,
	},

	StatisticBottomColorText2: {
		color: "#ffffff68"
	},
	StatisticBottomColorText1: {
		color: "#fff"
	},

	StatisticContainerBottomColor: {
		width: "auto",
		height: 60,
		backgroundColor: "#1E1E1E",
		padding: 10,
		borderRadius: 10,
		marginTop: 20,
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center"
	},

	StatisticContainerBottom2: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginHorizontal: 20,
		gap: 20
	},
	StatisticContainerBottom: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 20,
	},

	StatisticContainerbox: {
		width: 40,
		height: 40,
		backgroundColor: "#4E4E4E",
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
	},


	StatisticContainerCircleSmail: {
		width: 200,
		height: 200,
		borderRadius: 100,
		backgroundColor: "#1E1E1E",
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},

	StatisticContainerCircleColor: {
		width: 207,
		height: 207,
		borderRadius: 100,
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},

	StatisticContainerCircle: {

		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		marginBottom: 20,
	},

	StatisticContainer2: {
		width: "100%",
		height: "auto",
		backgroundColor: "#1E1E1E",
		marginTop: 30,
		borderRadius: 16,
		padding: 20,

	},

	StatisticContainerTimeDay3: {
		backgroundColor: "#fff",
		width: "100%",
		height: 170,
		borderRadius: 10,
	},

	StatisticContainerTimeDay2: {
		color: "#ffffff9f",
		fontSize: 18,
	},

	StatisticContainerTimeDay1: {
		color: "#ffffff9f",
		fontSize: 15,
	},
	StatisticContainerTimeDay: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		marginBottom: 20
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