import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { firebase } from './src/config/config';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from './src/screens/Login/LoginScreen';
import RegistrationScreen from './src/screens/Registration/RegistrationScreen';
import Home from './src/screens/Home';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  // if (loading) {	
  //   return (	
  //     <></>	
  //   )	
  // }

  useEffect(() => {
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data()
            setLoading(false)
            setUser(userData)
          })
          .catch((error) => {
            setLoading(false)
          });
      } else {
        setLoading(false)
      }
    });
  }, []);

  const authScreens = {
    Login: LoginScreen,
    Registration: RegistrationScreen,
  };
  
  const userScreens = {
    Home: Home
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName={(user? "Landing" : "Login")}
      >
        {/* {Object.entries({
          // Use some screens conditionally based on some condition
          ...(user ? userScreens : authScreens),
        }).map(([name, component]) => (
          <Stack.Screen name={name} component={component} />
        ))} */}
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Landing">
          {props => <Home {...props} />}
        </Stack.Screen>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}