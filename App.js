import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Goal from './Goal/Goal';

export default function App() {
	return (
		<View style={styles.screen}>
			<Goal />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingVertical: 40,
		paddingHorizontal: 20
	}
});