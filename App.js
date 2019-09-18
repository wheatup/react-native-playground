import React from 'react';
import { StyleSheet, View } from 'react-native';
import Goal from './Goal/Goal';
import NumberGuesser from './NumberGuesser/NumberGuesser';
import theme from './NumberGuesser/constants/theme';

export default function App() {
	return (
		<View style={styles.app}>
			{/* <Goal /> */}
			<NumberGuesser />
		</View>
	);
}

const styles = StyleSheet.create({
	app: {
		flex: 1,
		backgroundColor: theme.color.light
	}
});