import React from 'react';
import {View, Text, Button, Platform , StyleSheet} from 'react-native';
import styles from './Style';

class CounterComponent extends React.Component {
  render() {
    return (
        <View style={styles.container}>
        <Text
          style={styles.header}>
          Redux Saga Tutorial
        </Text>
        <View style={styles.bodyView}>
          <Button
            style={styles.buttonsView}
            onPress={() => {this.props.onIncrement(20)}}
            title="Increment +"
          />
          <View style={{paddingHorizontal: 10}} />
          <Button
          style={styles.buttonsView}
            onPress={() => {this.props.onDecrement(1)}}
            title="Decrement -"
          />
        </View>
        <Text
          style={styles.textView}>
          Counts: {this.props.times}
        </Text>
      </View>
    );
  }
}


export default CounterComponent;
