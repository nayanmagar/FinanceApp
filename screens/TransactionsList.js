import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
export default function TransactionsList({ expenses, navigation }) {
  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('TransactionDetailScreen', { item })}
    >
      <View style={styles.detailsContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <View style={styles.amountmodule}> 
      <Text style={styles.amount}>${item.amount}</Text>
      <Icon name="chevron-forward" size={20} color="black"/>
      </View>
      </View>
      <Text style={styles.date}>
        {item.date}
      </Text>
    </TouchableOpacity>
  );
  

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    margin: 5,
  },
  item: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'semibold',
  },
  amount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountmodule: {
    flexDirection: 'row',
    alignItems: 'center',
  }

})
