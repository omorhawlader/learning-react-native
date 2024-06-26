import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, Text } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = (props: any) => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "tomato",
            height: 110,
          },
          headerTitleContainerStyle: {
            paddingTop: -20,
          },
          headerTitleStyle: {
            fontSize: 25,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="logout" component={LogOut} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Login = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Login</Text>
    </View>
  );
};
const LogOut = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LogOut</Text>
    </View>
  );
};

export default BottomTabNavigator;
