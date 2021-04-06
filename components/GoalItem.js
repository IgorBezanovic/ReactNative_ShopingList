import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {

    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
      padding: 10, 
      backgroundColor: '#aaf0d1', 
      borderColor: '#F3E9C8',
      borderWidth: 1, 
      borderRadius: 15,
      marginVertical: 5
    }

});

export default GoalItem;