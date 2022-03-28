import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../views/Home'
import Criar from '../views/Criar'
import Lista from '../views/Lista'

const Stack = createNativeStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Criar" component={Criar}/>
        <Stack.Screen name="Lista" component={Lista}/>
    </Stack.Navigator>
)
