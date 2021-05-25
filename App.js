import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from './src/AppContext';
import Scanner from './src/Scanner';
import Animal from './src/Animal';
import About from './src/About';
import {Image} from 'react-native'
import { StatusBar } from 'expo-status-bar';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default class App extends React.Component {

  render() {
    return (
      <AppContext.Provider>
          <NavigationContainer 
            screenOptions={{
              headerStyle: {
                backgroundColor: "#9AC4F8",
              },
              headerTintColor: "white"
            }}>
              <Tab.Navigator>
                <Tab.Screen options={{
                  tabBarLabel: 'Home',
                  tabBarIcon: ({focused, color, size}) => (
                    <Image
                      source={
                        focused
                          ? require('./assets/home.png')
                          : require('./assets/home-inactive.png')
                      }
                      style={{
                        width: 20,
                        height: 20
                      }}
                    />
                  ),
                }} name="Home" component={HomeScreen} />
                <Tab.Screen name="About" component={About}  
                  options={{
                    tabBarLabel: 'About',
                    tabBarIcon: ({focused, color, size}) => (
                      <Image
                        source={
                          focused
                            ? require('./assets/about.png')
                            : require('./assets/about-inactive.png')
                        }
                        style={{
                          width: 20,
                          height: 20
                        }}
                      />
                    ),
                  }}/>
              </Tab.Navigator>
              <StatusBar style="auto" />
          </NavigationContainer>
      </AppContext.Provider>
    );
  } 
}

class HomeScreen extends React.Component{
  render(){
    return(
              <Stack.Navigator>
                <Stack.Screen name="ZOO Scanner" component={Scanner} />
                <Stack.Screen name="Animal Information" component={Animal} />
              </Stack.Navigator>
    )
  }
}
