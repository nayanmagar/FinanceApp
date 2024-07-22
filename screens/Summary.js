import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Expenses } from '../data/Expenses';

export default function Summary() {
    const numberOfTransactions = Expenses.length;
    const totalSum = Expenses.reduce((total, item) => {
        return total + parseFloat(item.amount);
    }, 0);

    const amounts = Expenses.map(item => parseFloat(item.amount));
    const highestSpending = Math.max(...amounts);
    const lowestSpending = Math.min(...amounts);

    const highestItems = Expenses.filter(item => parseFloat(item.amount) === highestSpending);
    const lowestItems = Expenses.filter(item => parseFloat(item.amount) === lowestSpending);

    return(
        <View style={styles.container}>
            <View style={styles.transactionsGroup}>
                <Text style={styles.label}>Transactions</Text>
                <Text style={styles.value}>{numberOfTransactions}</Text>
            </View>

            <View style={styles.amountGroup}>
                <Text style={styles.label}>Balance</Text>
                <Text style={styles.value}>${totalSum}</Text>
            </View>

                <Text>Highest Spending</Text>
                <View style={styles.spendingGroup}>
                    {highestItems.map((item, index) => (
                        <Text key={index} style={styles.label}>{item.name}</Text>
                    ))}
                    <Text style={styles.value}>${highestSpending}</Text>
                </View>

                <Text >Lowest Spending</Text>
                    <View style={styles.spendingGroup}>
                    {lowestItems.map((item, index) => (
                        <Text key={index} style={styles.label}>{item.name}</Text>
                    ))}
                    <Text style={styles.value}>${lowestSpending}</Text>
                </View>

        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgrey'
    },
    transactionsGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    amountGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    spendingGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    label: {
        fontSize: 20,
        fontWeight: 'bold',

    },
    value: {
        fontSize: 20,
        fontWeight: 'normal',
        marginTop: 5,
    },
});