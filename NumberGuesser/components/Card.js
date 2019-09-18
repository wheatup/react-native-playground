import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../constants/theme';

const Card = ({ children, style, ...rest }) => {
	return (
		<View style={{ ...styles.card, ...style }} {...rest}>{children}</View>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		padding: theme.spacing.rim,
		shadowColor: theme.color.dark,
		shadowOpacity: 0.2,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 5,
		elevation: 10,
		borderRadius: 5
	},
});

export default Card;