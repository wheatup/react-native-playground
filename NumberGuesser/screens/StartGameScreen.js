import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert, KeyboardAvoidingView, Dimensions } from 'react-native';
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

	useEffect(()=>{
		const updateLayout = () => {
			console.log('Update layout')
		}
		Dimensions.addEventListener('change', updateLayout);
		return () => {
			Dimensions.removeEventListener('change', updateLayout);
		}
	});

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
		<Scene scrollable={true}>
			<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
				<KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
					<Title style={{ marginTop: 0 }}>Start a New Game</Title>
					<Card style={styles.inputContainer}>
						<Title type="h2" style={{ marginVertical: 0 }}>Select a Number</Title>
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
								<Button onPress={onRestInput}>Reset</Button>
							</View>
							<View style={{ ...styles.button, marginLeft: 10 }}>
								<Button onPress={onConfirmInput} disabled={!enteredValue}>Confirm</Button>
							</View>
						</View>
					</Card>
					{confirmed &&
						<Card style={styles.summaryContainer}>
							<Title type="h2" style={{ marginVertical: 0 }}>You choosed</Title>
							<NumberContainer>{selectedNumber}</NumberContainer>
							<View style={styles.summaryButton}>
								<Button onPress={() => onGameStart(selectedNumber)}>Start Game</Button>
							</View>
						</Card>
					}
				</KeyboardAvoidingView>
			</TouchableWithoutFeedback>
		</Scene>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: '100%',
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
		width: 60,
		textAlign: 'center'
	},
	summaryContainer: {
		width: '100%',
		marginTop: '5%',
		alignItems: 'center'
	},
	summaryButton: {
		marginTop: 10
	}
});

export default StartGameSceen;