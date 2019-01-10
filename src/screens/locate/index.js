// @flow

import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Pulse from 'react-native-pulse'
import { Colors } from 'constants/colors'

class Locate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
    }
  }
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            alert('name')
          }}
        >
          <Pulse
            color={Colors.blue.ribbon}
            numPulses={3}
            initialDiameter={150}
            diameter={400}
            speed={20}
            duration={2000}
          />

          <Text style={styles.label}>Locate Device</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
})
export default Locate
