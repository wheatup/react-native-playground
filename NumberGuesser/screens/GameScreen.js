import React, { useState, useRef } from 'react';
import { View, StyleSheet, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import theme from '../constants/theme';
import Title from '../components/common/Title';
import defaultStyle from '../constants/defaultStyle';

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
		<View style={styles.screen}>
			<Text style={defaultStyle.h1} >My {numberToCount(attempts)} Guess</Text>
			<Card style={styles.card}>
				<NumberContainer>{currentGuess}</NumberContainer>
				<View style={styles.buttonContainer}>
					<Button title="Too Low" onPress={() => onNextGuess('higher')} />
					<Button title="Correct" onPress={() => onGameOver(attempts)} />
					<Button title="Too High" onPress={() => onNextGuess('lower')} />
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		paddingTop: 20
	},
	card: {
		alignItems: 'center',
		width: '85%'
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20,
	}
});

export default GameScreen;