// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'constants/colors'
import user from 'dataSet/user'
import Button from 'components/atoms/buttons'
import Textbox from 'components/atoms/textbox'
import FlatButton from 'components/atoms/flat-button'

const Allot = (props: Props) => {
  return (
    <View style={styles.block}>
      <Text style={styles.empName}>{user.AKQA0065.name}</Text>
      <Button style={{backgroundColor: Colors.blue.ribbon}} text={'Button'} width={100} onPress={() => alert()}/>
      <Textbox placeholder={'placeholder'} />
      <FlatButton textStyle={{color: Colors.blue.ribbon}} text={'flat btn'} onPress={() => alert()} />
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
export default Allot
