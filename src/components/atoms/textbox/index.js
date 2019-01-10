// @flow
import Typography from 'constants/typography'
import { Colors } from 'constants/colors'

import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import type { ViewStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet'
import type { ReturnKeyType } from 'react-native/Libraries/Components/TextInput/TextInput'

type Props = {
  placeholder: string,
  placeholderTextColor?: string,
  value?: string,
  selectionColor?: string,
  style?: ViewStyleProp,
  returnKeyType?: ReturnKeyType,
  numberOfLines?: number,
  onChangeText?: (text: string) => void,
  onSubmitEditing?: (event: Event) => void,
  onFocus?: (event: Event) => void,
  onBlur?: (event: Event) => void,
  autoFocus: boolean,
}

class Textbox extends Component<Props> {
  static defaultProps = {
    returnKeyType: 'done',
    numberOfLines: 1,
    placeholderTextColor: Colors.grey.text,
    autoFocus: false,
  }
  render() {
    const {
      placeholder,
      placeholderTextColor,
      style,
      selectionColor,
      returnKeyType,
      onChangeText,
      onSubmitEditing,
      numberOfLines,
      value,
      onFocus,
      onBlur,
      autoFocus,
    } = this.props
    return (
      <TextInput
        style={[styles.inputStyle, style]}
        placeholder={placeholder}
        selectionColor={selectionColor}
        placeholderTextColor={placeholderTextColor}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSubmitEditing}
        onChangeText={onChangeText}
        value={value}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}
      />
    )
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    ...Typography.caption,
    flex: 1,
    color: Colors.black.default,
  },
})

export default Textbox
