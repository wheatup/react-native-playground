import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import theme from '../constants/theme';
import Input from '../components/Input';

const StartGameSceen = () => {
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
		if (isNaN(number) || number < 0 || number > 99) {
			Alert.alert('Invalid Number!', isNaN(number) ?
				'The number you entered is invalid!' :
				number < 0 ?
					'The number must be a positive number' :
					'The number must be smaller than 100!',
				[{text: 'Got it', style: 'destructive', onPress: onRestInput}]);
			return;
		}
		setConfirmed(true);
		setEnteredValue('');
		setSelectedNumber(number);
	}

	return (
		<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
			<View style={styles.screen}>
				<Text style={styles.title}>Start a New Game</Text>
				<Card style={styles.inputContainer}>
					<Text>Select a Number</Text>
					<Input
						style={styles.input}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="number-pad"
						maxLength={2}
						onChangeText={onNumberInput}
						value={enteredValue}
					/>
					<View style={styles.buttonContainer}>
						<View style={styles.button}>
							<Button
								title="Reset"
								color={theme.color.warning}
								onPress={onRestInput}
							/>
						</View>
						<View style={{ ...styles.button, marginLeft: 10 }}>
							<Button
								title="Confirm"
								color={theme.color.primary}
								onPress={onConfirmInput}
								disabled={!enteredValue}
							/>
						</View>
					</View>
				</Card>
				{confirmed && <Text>Chosen Number: {selectedNumber}</Text>}
			</View >
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: theme.spacing.gap,
		alignItems: 'center'
	},
	title: {
		fontSize: theme.fontSize.h1,
		marginVertical: theme.spacing.gap
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
	},
	input: {
		width: 50,
		textAlign: 'center'
	}
});

export default StartGameSceen;