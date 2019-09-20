import React, { useState, useRef } from 'react';
import { View, StyleSheet, Alert, FlatList } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Title from '../components/common/Title';
import Scene from '../components/common/Scene';

import Button from '../components/common/Button';
import { Ionicons } from '@expo/vector-icons';
import Label from '../components/common/Label';
import theme from '../constants/theme';


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

	const [guessHistory, setGuessHistory] = useState([getRandomNumber(min.current, max.current)]);

	const onNextGuess = hint => {
		let prevMax = max.current;
		let prevMin = min.current;

		if (hint === 'lower') {
			max.current = guessHistory[0];
		} else {
			min.current = guessHistory[0];
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
		setGuessHistory([number, ...guessHistory]);
	}

	return (
		<Scene>
			<Title>My {numberToCount(guessHistory.length)} Guess</Title>
			<Card style={styles.card}>
				<NumberContainer>{guessHistory[0]}</NumberContainer>
				<View style={styles.buttonArea}>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button style={{ backgroundColor: theme.color.secondary }} onPress={() => onNextGuess('lower')}><Ionicons name="md-remove" size={24} color="#eee" /></Button>
						</View>
						<View style={{ ...styles.button, marginLeft: 10 }}>
							<Button style={{ backgroundColor: theme.color.tertiary }} onPress={() => onNextGuess('higher')}><Ionicons name="md-add" size={24} color="#eee" /></Button>
						</View>
					</View>
					<Button onPress={() => onGameOver(guessHistory.length)}>Correct</Button>
				</View>
			</Card>
			<View style={styles.listContainer}>
				<FlatList contentContainerStyle={styles.list} data={guessHistory} keyExtractor={guess => `guess#${guess}`} renderItem={({ item, index }) => (
					<Card style={styles.listItem}>
						<Title type="h1">{numberToCount(guessHistory.length - index) + ' Guess:'}</Title>
						<Title type="h1">{item}</Title>
					</Card>
				)} />
			</View>
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
	},
	listContainer: {
		width: '85%',
		flex: 1,
		marginTop: 10,
		borderRadius: 5,
		overflow: 'hidden'
	},
	list: {
		// flexDirection: 'column-reverse'
	},
	listItem: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingVertical: 0,
		marginBottom: 10
	}
});

export default GameScreen;