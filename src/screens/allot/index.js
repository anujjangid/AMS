// @flow

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from 'constants/colors'
import user from 'dataSet/user'
import Button from 'components/atoms/buttons'
import Textbox from 'components/atoms/textbox'
import FlatButton from 'components/atoms/flat-button'
import Typography from 'constants/typography'
import {storeItem, retrieveItem} from 'lib/storage'


const Allot = (props: Props) => {
  return (
    <View style={styles.block}>
      <Text style={styles.empName}>{user.AKQA0065.name}</Text>
      <Button
        style={{ backgroundColor: Colors.blue.ribbon }}
        text={'Button'}
        width={100}
        onPress={async () => await storeItem('1', 'some new')}
      />
      <Textbox placeholder={'placeholder'} />
      <FlatButton
        textStyle={{ color: Colors.blue.ribbon }}
        text={'flat btn'}
        onPress={async () => console.log(await retrieveItem('1'))}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    borderWidth: 1,
  },
  empName: {
    ...Typography.largeTitle,
    textAlign: 'center',
  },
})
export default Allot
