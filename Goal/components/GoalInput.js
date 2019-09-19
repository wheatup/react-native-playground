import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Modal } from 'react-native';
import Button from '../../NumberGuesser/components/common/Button';

const GoalInput = ({ onAddGoal, onCancelAddGoal, ...rest }) => {
	const [enteredGoal, onGoalInput] = useState('');

	return (
		<Modal animationType="slide" {...rest}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					onChangeText={text => onGoalInput(text)}
					value={enteredGoal}
				/>
				<View style={styles.buttons}>
					<View style={styles.button}>
						<Button
							title="Cancel"
							color="#f43"
							onPress={onCancelAddGoal}
						/>
					</View>
					<View style={styles.button}>
						<Button
							disabled={!enteredGoal}
							title="ADD"
							onPress={() => {
								if (enteredGoal.trim()) {
									onAddGoal(enteredGoal);
									onGoalInput('');
								}
							}}
						/>
					</View>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1
	},
	input: {
		width: '80%',
		borderColor: '#ccc',
		borderWidth: 1,
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 5,
		borderRadius: 5
	},
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	button: {
		flex: 1,
		marginHorizontal: 2
	}
});

export default GoalInput;