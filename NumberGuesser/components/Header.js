import React from 'react';

import { View, StyleSheet } from 'react-native';
import theme from '../constants/theme';
import Title from './common/Title';

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Title style={styles.title}>{title}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 32,
		backgroundColor: theme.color.headerBg,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 18,
		fontFamily: 'open-sans'
	}
});

export default Header;