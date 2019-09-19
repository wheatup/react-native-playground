import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import theme from '../constants/theme';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.number}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderWidth: 1.5,
		borderColor: theme.color.primary,
		padding: 10,
		borderRadius: 10,
		marginTop: 10,
		alignItems: 'center',
		justifyContent: 'center'
	},
	number: {
		color: theme.color.primary,
		fontSize: 20
	}
});

export default NumberContainer;