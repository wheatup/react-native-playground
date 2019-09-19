import React, { useState, useRef } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Title from '../components/common/Title';
import Scene from '../components/common/Scene';

import Button from '../components/common/Button';


const getRandomNumber = (min, max) => {
	return min + Math.ceil(Math.random() * (max - min - 1));
};

const numberToCount = num => {
	if (num % 10 === 1 && num % 100 !== 11) {
		return `${num}st`;
	} else if (num % 10 === 2 && num % 100 !== 12) {
		return `${num}nd`;
	} else if (num % 10 === 3 && num % 100 !== 13) {
		return `${num}rd`;
	} else {
		return `${num}th`;
	}
}

const GameScreen = ({ onGameOver }) => {
	const min = useRef(-1);
	const max = useRef(1000);

	const [attempts, setAttemps] = useState(1);
	const [currentGuess, setCurrentGuess] = useState(getRandomNumber(min.current, max.current));

	const onNextGuess = hint => {
		let prevMax = max.current;
		let prevMin = min.current;

		if (hint === 'lower') {
			max.current = currentGuess;
		} else {
			min.current = currentGuess;
		}

		if (max.current - min.current <= 1) {
			Alert.alert('Cheater', `Do not cheat!`, [
				{ text: 'Okay', style: 'default' },
			]);
			max.current = prevMax;
			min.current = prevMin;
			return;
		}

		const number = getRandomNumber(min.current, max.current);
		setAttemps(attempts + 1);
		setCurrentGuess(number);
	}

	return (
		<Scene>
			<Title>My {numberToCount(attempts)} Guess</Title>
			<Card style={styles.card}>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonArea}>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button title="Too Low" style={{backgroundColor: '#396'}} onPress={() => onNextGuess('higher')} />
						</View>
						<View style={{...styles.button, marginLeft: 10}}>
							<Button title="Too High" style={{backgroundColor: '#a63'}} onPress={() => onNextGuess('lower')} />
						</View>
					</View>
					<Button title="Correct" onPress={() => onGameOver(attempts)} />
				</View>
			</Card>
		</Scene>
	);
}

const styles = StyleSheet.create({
	card: {
		alignItems: 'center',
		width: '85%'
	},
	buttonArea: {
		width: '100%'
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		marginBottom: 10
	},
	button: {
		flex: 1
	}
});

export default GameScreen;