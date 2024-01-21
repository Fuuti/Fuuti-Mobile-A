import React, {
	useEffect,
	useState,
} from 'react';
import { Snackbar } from 'react-native-paper';
import * as Haptics from 'expo-haptics';



export default function Toast({ isError, message, isSuccess, color, down, }: any) {

	const [messagetext, setMessagetext] = React.useState("");
	const [visible, setVisible] = React.useState(false);
	const onDismissSnackBar = () => setVisible(false);

	useEffect(() => {
		if (isError) {
			setVisible(true)
			setMessagetext(message)
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error)
			setTimeout(() => {
				setMessagetext('')
			}, 30000);
		} else if (isSuccess) {
			setVisible(true)
			setMessagetext(message)
			Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success)
			setTimeout(() => {
				setMessagetext('')
			}, 30000);
		}

	}, [isError, isSuccess, message])



	return (
		<>

			<Snackbar
				wrapperStyle={down ? { bottom: 0 } : { top: 0 }}
				theme={{
					colors: {
						onSurface: color,
						surface: "#fff",
					},
				}}
				visible={visible}
				onDismiss={onDismissSnackBar}
				action={{
					label: 'Undo',
					onPress: () => {
						// Do something
					},
				}}>
				{messagetext}
			</Snackbar>
		</>
	);
};