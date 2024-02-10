import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type GreetProps = {
	name: string;
};

const Greet = ({ name }: GreetProps) => {
	return (
		<View>
			<Text>Hello {name}!</Text>
		</View>
	);
};

export default Greet;

const styles = StyleSheet.create({});
