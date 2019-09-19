import React, { useState } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import theme from '../constants/theme';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Title from '../components/common/Title';
import Scene from '../components/common/Scene';

import Button from '../components/common/Button';

const StartGameSceen = ({ onGameStart }) => {
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState(NaN);

	const onNumberInput = text => {
		setEnteredValue(text.replace(/[^\d]/g, ''));
	};

	const onRestInput = () => {
		setEnteredValue('');
		setConfirmed(false);
	}

	const onConfirmInput = () => {
		let number = parseInt(enteredValue);
		Keyboard.dismiss();
		if (isNaN(number) || number < 0 || number > 999) {
			Alert.alert('Invalid Number!', isNaN(number) ?
				'The number you entered is invalid!' :
				number < 0 ?
					'The number must be a positive number' :
					'The number must be smaller than 100!',
				[{ text: 'Got it', style: 'destructive', onPress: onRestInput }]);
			return;
		}
		setConfirmed(true);
		setEnteredValue('');
		setSelectedNumber(number);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<Scene>
				<Title>Start a New Game</Title>
				<Card style={styles.inputContainer}>
					<Title type="h2">Select a Number</Title>
					<Input
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={3}
						onChangeText={onNumberInput}
						value={enteredValue}
						keyboardAppearance="dark"
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								onPress={onRestInput}
							/>
						</View>
						<View style={{ ...styles.button, marginLeft: 10 }}>
							<Button
								title="Confirm"
								onPress={onConfirmInput}
								disabled={!enteredValue}
							/>
						</View>
					</View>
				</Card>
				{confirmed &&
					<Card style={styles.summaryContainer}>
						<Title type="h2">You choosed</Title>
						<NumberContainer>{selectedNumber}</NumberContainer>
						<View style={styles.summaryButton}>
							<Button title="Start Game" onPress={() => onGameStart(selectedNumber)} />
						</View>
					</Card>
				}
			</Scene>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: '85%',
		minWidth: 200,
		alignItems: 'center'
	},
	buttonContainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly',
		marginTop: 10
	},
	button: {
		flex: 1
	},
	input: {
		width: 50,
		textAlign: 'center'
	},
	summaryContainer: {
		width: '85%',
		marginTop: 20,
		alignItems: 'center'
	},
	summaryButton: {
		marginTop: 10
	}
});

export default StartGameSceen;