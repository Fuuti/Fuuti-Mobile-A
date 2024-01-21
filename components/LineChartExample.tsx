import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const LineChartExample = () => {
	return (
		<View  >
			<LineChart
				data={{
					labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
					datasets: [
						{
							data: [20, 45, 28, 80, 99, 43],
							strokeWidth: 2,
						},
					],
				}}
				width={Dimensions.get('window').width - 80}
				height={170}
				chartConfig={{
					backgroundColor: '#1cc910',
					backgroundGradientFrom: '#eff3ff',
					backgroundGradientTo: '#efefef',
					decimalPlaces: 2,
					color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
					style: {
						borderRadius: 16,
					},
				}}
				style={{
					// marginVertical: 8, 
					borderRadius: 16,
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({


});

export default LineChartExample;
