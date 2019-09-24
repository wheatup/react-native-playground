import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import theme from '../../constants/theme';

const Scene = ({ style, children, scrollable, ...rest }) => {
	let content = (
		<View style={{ ...styles.scene, ...style }} {...rest}>
			{children}
		</View>
	);
	return (
		scrollable ?
			<ScrollView contentContainerStyle={styles.scrollView} alwaysBounceVertical={false}>
				{content}
			</ScrollView>
			:
			content
	);
}

const styles = StyleSheet.create({
	scene: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: '6%',
		paddingVertical: '2%',
		// maxWidth: 480
	},
	scrollView: {
		alignItems: 'center'
	}
});

export default Scene;