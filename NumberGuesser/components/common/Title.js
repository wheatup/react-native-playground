import React, { useState } from 'react';
import { Text, StyleSheet } from 'react-native';
import defaultStyle from '../../constants/defaultStyle';


const Title = ({ type, children, ...rest }) => {
	let style = styles[type];
	return (
		<Text style={{ ...defaultStyle.text, ...style }} {...rest}>{children}</Text>
	);
}

const styles = StyleSheet.create({
	h1: {
		fontSize: 20,
		fontFamily: 'open-sans-bold',
		marginVertical: 10
	},
	h2: {
		fontSize: 16,
		fontFamily: 'open-sans-bold',
		marginVertical: 6
	},
	h3: {
		fontSize: 14,
		fontFamily: 'open-sans-bold',
		marginVertical: 4
	},
	h4: {
		fontSize: 12,
		fontFamily: 'open-sans-bold'
	}
});

export default Title;