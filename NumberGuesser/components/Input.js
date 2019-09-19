import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import theme from '../constants/theme';

const Input = ({ style, ...rest }) => {
	return (
		<TextInput style={{ ...styles.input, ...style }} {...rest} />
	);
}

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'gray',
		borderBottomWidth: 1,
		marginVertical: 10
	}
});

export default Input;