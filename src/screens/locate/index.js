// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Pulse from 'react-native-pulse'
import { Colors } from '../../constants/colors'

const Screen2 = (props: Props) => {
  return <View style={styles.root}>
  <Pulse color={Colors.blue.ribbon} numPulses={3} initialDiameter={100} diameter={400} speed={20} duration={2000} />
  <Text style={styles.label}>Locate Device</Text>
  </View>
}

const styles = StyleSheet.create({
  root: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    alignSelf: 'center',
    justifyContent: 'center',
  }
})
export default Screen2
