import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameSceen from './screens/StartGameScreen';

const NumberGuesser = () => {
	return (
		<View style={styles.screen}>
			<Header title="Guess a Number" />
			<StartGameSceen />
		</View>
	);
}


const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});

export default NumberGuesser;