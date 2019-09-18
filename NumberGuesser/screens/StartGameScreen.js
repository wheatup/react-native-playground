import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../components/Card';
import theme from '../constants/theme';

const StartGameSceen = () => {
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Start a New Game</Text>
			<Card style={styles.inputContainer}>
				<Text>Select a Number</Text>
				<TextInput />
				<View style={styles.buttonContainer}>
					<View style={styles.button}><Button color={theme.color.warning} title="Reset" onPress={() => { }} /></View>
					<View style={{...styles.button, marginLeft: 10}}><Button color={theme.color.primary} title="Confirm" onPress={() => { }} /></View>
				</View>
			</Card>
		</View >
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: theme.padding.gap,
		alignItems: 'center'
	},
	title: {
		fontSize: theme.fontSize.h1,
		marginVertical: theme.padding.gap
	},
	inputContainer: {
		width: '85%',
		minWidth: 200,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly'
	},
	button: {
		flex: 1
	}
});

export default StartGameSceen;