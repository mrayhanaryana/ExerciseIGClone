import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
import {Login} from './Login';
import { ForgotPw } from './ForgotPw';
import { SignUp} from './SignUp';

const Stack = createStackNavigator()

const screenOptions={
    headerShown: false,
}

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' 
        screenOptions={screenOptions}
        >
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
            <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }}/>
            <Stack.Screen name="ForgotPw" component={ForgotPw}/>
            <Stack.Screen name="SignUp" component={SignUp}/>
        </Stack.Navigator>
    </NavigationContainer>    
)

export default SignedInStack