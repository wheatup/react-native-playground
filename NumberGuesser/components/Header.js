import React from 'react';

import { View, StyleSheet, Platform } from 'react-native';
import theme from '../constants/theme';
import Title from './common/Title';

const Header = ({ title }) => {
	return (
		<View style={{...styles.header, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
			<Title style={styles.title}>{title}</Title>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 24,
		backgroundColor: theme.color.headerBg,
		alignItems: 'center',
		justifyContent: 'center'
	},
	headerIOS: {
		paddingTop: 32,
	},
	headerAndroid: {
		paddingTop: 24,
	},
	title: {
		fontSize: 18,
		fontFamily: 'open-sans'
	}
});

export default Header;