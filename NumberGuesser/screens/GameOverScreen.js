import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Title from '../components/common/Title';
import Scene from '../components/common/Scene';

import Button from '../components/common/Button';

const GameOverScreen = ({ attempts, onGameRestart }) => {
	console.log(attempts);
	return (
		<Scene>
			<Title>Game Over</Title>
			<Card style={styles.card}>
				<View style={styles.imageContainer} >
					<Image
						source={require('../../assets/success.png')} 
						// source={{ uri: 'https://picsum.photos/640/480' }}
						style={styles.image}
						resizeMode="cover"
					/>
				</View>
				<Title type="h2">Final attemps</Title>
				<NumberContainer>{attempts}</NumberContainer>
				<View style={styles.button}><Button onPress={onGameRestart} >Try Again</Button></View>
			</Card>
		</Scene>
	);
}

const styles = StyleSheet.create({
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