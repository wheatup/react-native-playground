import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import theme from '../constants/theme';
import Title from '../components/common/Title';
import defaultStyle from '../constants/defaultStyle';

const GameOverScreen = ({ attempts, onGameRestart }) => {
	console.log(attempts);
	return (
		<View style={styles.screen}>
			<Text style={defaultStyle.h1}>Game Over</Text>
			<Card style={styles.card}>
				<View style={styles.imageContainer} >
					<Image style={styles.image} source={require('../../assets/success.png')} resizeMode="cover" />
				</View>
				<Text style={defaultStyle.h3}>Final attemps</Text>
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
		marginTop: 20
	},
	card: {
		justifyContent: 'center',
		alignItems: 'center',
		width: '85%'
	},
	button: {
		marginTop: 10
	},
	imageContainer: {
		borderRadius: 100,
		borderWidth: 2,
		borderColor: '#69a',
		width: 200,
		height: 200,
		overflow: 'hidden'
	},
	image: {
		width: '100%',
		height: '100%',
	}
});

export default GameOverScreen;