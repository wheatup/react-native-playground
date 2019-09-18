import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

const Goal = () => {
	const [courseGoals, setCourseGoals] = useState([]);
	const [isAddMode, setIsAddMode] = useState(false);

	const onAddGoal = enteredGoal => {
		setCourseGoals(prevGoals => [...prevGoals, { id: `goal_${enteredGoal}_${Math.random().toString().substr(2, 4)}`, value: enteredGoal }]);
		exitAddGoal();
	};

	const exitAddGoal = () => {
		setIsAddMode(false);
	}

	const onRemoveGoal = ({ id }) => {
		setCourseGoals(prevGoals => prevGoals.filter(g => g.id !== id));
	};

	return (
		<View style={styles.screen}>
			<Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
			<GoalInput onCancelAddGoal={exitAddGoal} visible={isAddMode} onAddGoal={onAddGoal} />
			<FlatList
				data={courseGoals}
				keyExtractor={(item, index) => item.id}
				renderItem={itemData => <GoalItem onDelete={onRemoveGoal} data={itemData.item} />}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		paddingVertical: 40,
		paddingHorizontal: 20,
		flex: 1
	}
});

export default Goal;