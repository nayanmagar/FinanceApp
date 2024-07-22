import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TransactionDetail({route}) {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.amountNameGroup}>
        <Text style={styles.amount}>${item.amount}</Text>
        <Text style={styles.name}>Spent on {item.name}</Text>
      </View>

      <View style={styles.dateGroup}>
        <Text style={styles.date}>Transaction Date: </Text>
        <Text>{item.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  amountNameGroup: {
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 22
  },
  amount: {
    fontSize: 50,
    fontWeight: 'condensed'
  },
  name: {
    fontSize: 16
  },
  dateGroup: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5

  },
  date: {
    fontSize: 16,
  },
});