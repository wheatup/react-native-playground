import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';
import GoalInput from './GoalInput';
import GoalItem from './GoalItem';

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
		<View>
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

export default Goal;