import React, { Component, useState } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import StartGameSceen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default class NumberGuesser extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userNumber: null,
			attempts: 0,
			finished: false,
			rounds: 0
		}
	}

	onGameStart = number => this.setState(prevState => ({
		userNumber: number,
		finished: false
	}));

	onGameOver = attempts => this.setState(prevState => ({
		rounds: prevState.rounds + 1,
		attempts,
		finished: true
	}));

	onGameRestart = () => this.setState(prevState => ({
		userNumber: null,
		finished: false
	}));

	getScreen = () => {
		const { userNumber, attempts, finished, rounds } = this.state;
		if (userNumber === null) {
			return <StartGameSceen onGameStart={this.onGameStart} />;
		} else if (!finished) {
			return <GameScreen onGameOver={this.onGameOver} choice={userNumber} />;
		} else {
			return <GameOverScreen onGameRestart={this.onGameRestart} attempts={attempts} />;
		}
	};

	render() {
		return (
			<View style={styles.screen}>
				<Header title="Guess a Number" />
				{this.getScreen()}
			</View>
		);
	};
}


const styles = StyleSheet.create({
	screen: {
		flex: 1
	}
});