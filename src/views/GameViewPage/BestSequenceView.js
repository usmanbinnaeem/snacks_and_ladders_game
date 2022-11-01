import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class BestSequenceView extends Component {
  renderSequenceItem = (diceValue) => {
    const diceValueArray = [];
    for (let i = diceValue - 6; i > 0; i -= 6) {
      diceValueArray.push(6);
    }
    diceValueArray.push(diceValue % 6);

    return (
      <View style={styles.sequenceItem}>
        <Text style={styles.sequenceItemText}>{diceValueArray.join(' ')}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.bestSequenceContainer}>
        <View style={styles.bestSequenceLabelContainer}>
          <Text style={styles.bestSequenceLabel}>Best Sequence</Text>
          <TouchableOpacity style={styles.button} onPress={this.props.onPlayCurrentBestSequence}>
            <Text style={styles.buttonText}>Play Sequence</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal={true}>
          {this.props.sequence.map(this.renderSequenceItem)}
        </ScrollView>
      </View>
    );
  }
}

BestSequenceView.propTypes = {
  sequence: PropTypes.arrayOf(PropTypes.number).isRequired
};

export default BestSequenceView;
