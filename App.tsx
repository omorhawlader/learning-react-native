import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "./components/home";
import BottomTabNavigator from "./components/BottomTabNavigator";
import { Button, Text, TouchableOpacity } from "react-native";
import TopTabNavigator from "./components/topTabNavigator";
import SinglePost from "./components/singlePost";
import FlatListWithApi from "./components/FlatListWithApi";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "cornflowerblue" },
          headerTitleStyle: {
            fontSize: 24,
            color: "#ddd",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Main",
            headerLeft: () => (
              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: 35,
                    margin: 10,
                    marginBottom: 20,
                  }}
                >
                  😎
                </Text>
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity>
                <Text
                  style={{
                    color: "white",
                    fontSize: 35,
                    margin: 10,
                    marginBottom: 20,
                  }}
                >
                  →
                </Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
        />
        <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
        <Stack.Screen name="SinglePost" component={SinglePost} />
        <Stack.Screen name="FlatListWithApi" component={FlatListWithApi} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
