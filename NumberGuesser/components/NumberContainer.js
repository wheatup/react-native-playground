import React from 'react';
import { View, StyleSheet } from 'react-native';

import theme from '../constants/theme';
import Title from './common/Title';

const NumberContainer = ({ children }) => {
	return (
		<View style={styles.container}>
			<Title style={styles.number}>{children}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderColor: theme.color.primary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	number: {
		color: theme.color.primary,
		fontSize: 32,
		marginVertical: 0
	}
});

export default NumberContainer;