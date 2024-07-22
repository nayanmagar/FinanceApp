import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Summary from './screens/Summary';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import { Expenses } from './data/Expenses';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="TransactionsListScreen"
        >
          {(props) => <TransactionsList {...props} expenses={Expenses}/>}
    </Stack.Screen>
      <Stack.Screen 
        name="TransactionDetailScreen" 
        component={TransactionDetail} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Transaction"
          options={{
            headerShown: false,
            tabBarIcon: ({color,size}) => (
                <Icon name="list" size={size} color={color} />
            )}
          } 
          component={TransactionsStack} />
        <Tab.Screen 
          name="Summary" 
          component={Summary}
          options={{
            tabBarIcon: ({color,size}) => (
              <Icon name="stats-chart" size={size} color={color} />
            ),
          }} />
      </Tab.Navigator>
      <StatusBar style="auto" />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
