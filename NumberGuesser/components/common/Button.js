import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
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

	let ButtonCompnent = TouchableOpacity;
	if(Platform.OS === 'android' && Platform.Version >= 21) {
		ButtonCompnent = TouchableNativeFeedback;
	}

	return (
		<ButtonCompnent {...rest}>
			<View style={buttonStyle}>
				<Title type="h3" style={textStyle}>{children}</Title>
			</View>
		</ButtonCompnent>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: theme.color.primary,
		paddingVertical: 7,
		paddingHorizontal: 20,
		borderRadius: 100
	},
	text: {
		fontFamily: 'open-sans-bold',
		color: theme.color.text,
		textAlign: 'center'
	}
});

export default Button;