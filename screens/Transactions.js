import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionsList from './TransactionsList';
import TransactionDetail from './TransactionDetail';

const Stack = createStackNavigator();

export default function Transactions() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="TransactionsList" component={TransactionsList} />
            <Stack.Screen name="TransactionsDetail" component={TransactionDetail} />
        </Stack.Navigator>
    )
}