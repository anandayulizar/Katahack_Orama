import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './Home/Index';
import AchievementScreen from './Achievement/Index';
import LeaderboardScreen from './Leaderboard/Index';
import ProfileScreen from './Profile/Index';

const Tab = createBottomTabNavigator();

export default function Home({ route, navigation }) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeBackgroundColor: '#C5CC6D0',
        style: {
          height: 60,
          paddingBottom: 8,
          backgroundColor: '#181919',
        },
        labelStyle: {
          fontFamily: "open-dyslexic",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabIcon}
              source={require('../../assets/icon-home.png')
              } />
          ),
        }}
      />
      <Tab.Screen
        name="Achievement"
        component={AchievementScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabIcon}
              source={require('../../assets/icon-achievement.png')
              } />
          ),
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={LeaderboardScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabIcon}
              source={require('../../assets/icon-leaderboard.png')
              } />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={styles.tabIcon}
              source={require('../../assets/icon-profile.png')
              } />
          ),
        }}
      />
    </Tab.Navigator >
  );
}

const styles = StyleSheet.create({
  tabIcon: {
    width: 25,
    height: 25
  }
})
