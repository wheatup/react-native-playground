import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import theme from '../constants/theme';

const GameOverScreen = ({ attempts, onGameRestart }) => {
	console.log(attempts);
	return (
		<View style={styles.screen}>
			<Text style={styles.title}>Game Over</Text>
			<Card style={styles.card}>
				<Text>Final attemps:</Text>
				<NumberContainer>{attempts}</NumberContainer>
				<View style={styles.button}><Button title="Try Again" onPress={onGameRestart} /></View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		marginTop: 40
	},
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%'
	},
	title: {
		fontSize: theme.fontSize.h1,
		marginBottom: 10
	},
	button: {
		marginTop: 10
	}
});

export default GameOverScreen;