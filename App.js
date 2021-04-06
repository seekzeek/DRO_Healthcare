import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { useFonts, FontDisplay } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Product from "./screens/Product";
import ProductDetails from "./screens/ProductDetails";

const { width, height } = Dimensions.get("window");
const BAR_HEIGHT = StatusBar.currentHeight;

const App = () => {
  const [loaded] = useFonts({
    Montserrat: require("./assets/fonts/Montserrat-Black.ttf"),
    "Montserrat-Thin": {
      uri: require("./assets/fonts/Montserrat-Thin.ttf"),
      display: FontDisplay.FALLBACK,
    },
    "Montserrat-ExtraLight": {
      uri: require("./assets/fonts/Montserrat-ExtraLight.ttf"),
      display: FontDisplay.FALLBACK,
    },
    "Montserrat-Regular": {
      uri: require("./assets/fonts/Montserrat-Regular.ttf"),
      display: FontDisplay.FALLBACK,
    },
    "Montserrat-SemiBold": {
      uri: require("./assets/fonts/Montserrat-SemiBold.ttf"),
      display: FontDisplay.FALLBACK,
    },
    "Montserrat-Medium": {
      uri: require("./assets/fonts/Montserrat-Medium.ttf"),
      display: FontDisplay.FALLBACK,
    },
  });

  if (!loaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <React.Fragment>
      <NavigationContainer>
        <View style={styles.container}>
          <Stack.Navigator initialRouteName="Product">
            <Stack.Screen
              name="Product"
              component={Product}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProductDetails"
              component={ProductDetails}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
      <View style={styles.StatusBar}>
        <StatusBar backgroundColor="#7b4397" color="white" />
      </View>
    </React.Fragment>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width,
    height,
  },
  StatusBar: { height: BAR_HEIGHT, backgroundColor: "#7b4397" },
});
