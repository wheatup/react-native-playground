import React from 'react';
import { View, StyleSheet } from 'react-native';
import theme from '../../constants/theme';

const Scene = ({ style, children, ...rest }) => {
	return (
		<View style={{ ...styles.scene, ...style }} {...rest}>{children}</View>
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		backgroundColor: theme.color.sceneBg
	}
});

export default Scene;