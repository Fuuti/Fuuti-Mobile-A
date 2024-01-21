import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';

const ProgressBarChart = () => {



	return (
		<View style={styles.container}>
			<Progress.Bar progress={0.3} width={335} color='#1E1E1E' unfilledColor={"#33333327"} borderWidth={0} />
		</View>
	)
}

export default ProgressBarChart

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
})