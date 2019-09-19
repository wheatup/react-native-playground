import React, { useState } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import Goal from './Goal/Goal';
import NumberGuesser from './NumberGuesser/NumberGuesser';
import theme from './NumberGuesser/constants/theme';

const fetchFonts = () => {
	return Font.loadAsync({
		'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
	});
};

export default function App() {
	const [loaded, setLoaded] = useState(false);

	if (!loaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => setLoaded(true)}
				onError={err => console.error(err)}
			/>
		);
	}

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