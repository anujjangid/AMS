// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import user from 'dataSet/user'

const Screen1 = (props: Props) => {
  return (
    <View style={styles.block}>
      <Text style={styles.empName}>{user.AKQA0065.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    borderWidth: 1,
  },
  empName: {
    fontSize: 30,
    textAlign: 'center',
  },
})
export default Screen1
