import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const Label = ({ children, style, ...rest }) => {
	return (
		<Text style={{ ...styles.label, ...style }} {...rest}>{children}</Text>
	);
}

const styles = StyleSheet.create({
	label: {
		fontFamily: 'open-sans',
		color: theme.color.text
	}
});

export default Label;