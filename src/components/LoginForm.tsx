import React from 'react';
import { StyleSheet, TextInput, View, Text, Button } from 'react-native';

const LoginForm = () => {
	return (
		<View>
			<TextInput placeholder='Username' />
			<TextInput placeholder='Password' />
			<Button
				title='Login'
				onPress={() => {
					console.log('Login button pressed');
				}}
			/>
		</View>
	);
};

export default LoginForm;

const styles = StyleSheet.create({});
