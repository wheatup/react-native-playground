import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import theme from '../constants/theme';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 32,
		backgroundColor: theme.color.dark,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		color: theme.color.light,
		fontSize: 18
	}
});

export default Header;