// @flow

import { Colors } from 'constants/colors'
import { Spacings } from 'constants/layout'
import Typography from 'constants/typography'

import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import USERS from 'dataSet/user'
import Button from 'components/atoms/buttons'
import Textbox from 'components/atoms/textbox'
import Utils from 'lib/device'

const deviceWidth = Utils.width

class Release extends Component<Props, State> {
  constructor(props) {
    super(props)

    this.empId = undefined
    this.errorText = 'Please enter the employee id'
    this.state = {
      empId: '',
      error: false,
      userName: undefined,
      message: undefined,
    }
  }
  handelButton = () => {
    const { empId } = this.state
    if (empId) {
      this.setState({ error: false })
      const userName = this.generateUserInfo(empId)
      if (userName) {
        this.setState({ userName }, () => {
          this.setState({ message: `Showing results for ${userName}` })
        })
      } else {
        this.setState({ error: true }, () => {
          this.errorText = 'User not found'
          this.setState({ message: undefined })
          this.setState({ userName: undefined })
        })

        // this.setState({ message: 'User not found' })
      }
    } else {
      this.setState({ error: true })
    }
  }
  hideError = text => {
    if (text.length > 0) {
      this.setState({ error: false })
    } else {
      this.setState({ userName: undefined })
    }
  }

  generateUserInfo = id => {
    if (USERS[id]) {
      return USERS[id].name
    }
  }

  render() {
    const { empId, error, userName, message } = this.state

    return (
      <View style={[styles.root]}>
        <View
          style={[
            styles.setSearchBlock,
            userName ? styles.blockWithResult : styles.blockWithoutResult,
          ]}
        >
          <Textbox
            style={styles.textField}
            placeholder={'Search by Employee ID'}
            onBlur={this.empIdTextHandler}
            onSubmitEditing={this.empIdTextHandler}
            autoCapitalize="characters"
            onChangeText={text =>
              this.setState({ empId: text }, () => {
                this.hideError(text)
              })
            }
          />

          <View style={styles.buttonWrapper}>
            <Button
              style={[styles.buttons, styles.primaryBtn]}
              text={`Search ${empId}`}
              width={deviceWidth * 0.9}
              onPress={this.handelButton}
            />
          </View>
          {error && (
            <Text style={styles.errorColor}>
              {this.errorText.toUpperCase()}
            </Text>
          )}
        </View>
        {userName && (
          <View style={styles.results}>
            <Text>{message}</Text>
          </View>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    margin: Spacings.S,
  },
  textField: {
    textTransform: 'uppercase',
    width: deviceWidth * 0.9,
  },
  infoWrapper: {},
  errWrapper: {},
  successWrapper: {},
  info: {
    ...Typography.title2,
    marginVertical: Spacings.XL,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  primaryBtn: {
    backgroundColor: Colors.blue.ribbon,
    marginTop: 20,
    justifyContent: 'center',
  },
  secondaryBtn: {
    backgroundColor: Colors.grey.dark,
  },
  errorColor: {
    color: Colors.red.dark,
    fontSize: 14,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  results: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  setSearchBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  blockWithResult: {
    flex: 0,
  },
  blockWithoutResult: {
    flex: 1,
  },
})

export default Release
