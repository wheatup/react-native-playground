import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ data, onDelete, ...rest }) => {
	return (
		<TouchableOpacity onPress={() => onDelete(data)} {...rest}>
			<View style={styles.listItem}>
				<Text>{data.value}</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	listItem: {
		padding: 10,
		backgroundColor: '#ccc',
		borderColor: '#999',
		borderWidth: 1,
		marginTop: 5,
		textAlign: "center"
	}
});

export default GoalItem;