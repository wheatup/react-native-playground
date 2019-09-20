import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import theme from '../../constants/theme';
import Title from './Title';

const Button = ({ children, style, color, disabled, ...rest }) => {
	const textStyle = color ? { ...styles.text, color } : styles.text;
	const buttonStyle = { ...styles.button, ...style };
	if (disabled) {
		buttonStyle.backgroundColor = theme.color.disabled;
		textStyle.color = theme.color.gray;
		if (rest.onPress) {
			let org = rest.onPress;
			rest.onPress = disabled ? () => { } : org;
		}
	}
	return (
		<TouchableOpacity {...rest}>
			<View style={buttonStyle}>
				<Title type="h3" style={textStyle}>{children}</Title>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.color.primary,
		paddingVertical: 10,
		paddingHorizontal: 20,
		borderRadius: 30
	},
	text: {
		fontFamily: 'open-sans-bold',
		color: theme.color.text,
		textAlign: 'center'
	}
});

export default Button;