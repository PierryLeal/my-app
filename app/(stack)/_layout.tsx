import React from "react";
import { Text } from "react-native";
import { Stack } from "expo-router";

const StackLayout: React.FC = () => {
	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='explore' options={{ headerShown: false }} />
		</Stack>
	);
};

export default StackLayout;
