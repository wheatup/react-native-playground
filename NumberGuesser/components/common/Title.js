import React from 'react';
import { StyleSheet } from 'react-native';

import Label from './Label';

const Title = ({ type, style, children, ...rest }) => {
	return (
		<Label style={{ ...styles[type || 'h1'], ...style }} {...rest}>{children}</Label>
	);
}

const styles = StyleSheet.create({
	h1: {
		width: '100%',
		textAlign: 'center',
		fontSize: 20,
		fontFamily: 'open-sans-bold',
		marginVertical: 10
	},
	h2: {
		width: '100%',
		textAlign: 'center',
		fontSize: 16,
		fontFamily: 'open-sans-bold',
		marginVertical: 6
	},
	h3: {
		width: '100%',
		textAlign: 'center',
		fontSize: 14,
		fontFamily: 'open-sans-bold',
		marginVertical: 4
	},
	h4: {
		width: '100%',
		textAlign: 'center',
		fontSize: 12,
		fontFamily: 'open-sans-bold'
	}
});

export default Title;