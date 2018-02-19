/* eslint-disable react/prop-types */

import React from 'react'
import {Text, Button, ScrollView, TouchableOpacity, View} from 'react-native'
import Downshift from 'downshift';

const MyView = ({innerRef, ...rest}) => <View ref={innerRef} {...rest} />

const BasicAutocomplete = ({items, ...rest}) => (
  <Downshift
    {...rest}
    render={({
      getRootProps,
      getButtonProps,
      getItemProps,
      isOpen,
      inputValue,
      selectedItem,
      highlightedIndex,
    }) => (
      <MyView {...getRootProps({refKey: 'innerRef'})}>
			<Text>Selecte From Above:</Text>
        <Button {...getButtonProps()} title={selectedItem} />
        {isOpen ? (
          <ScrollView style={{ borderWidth: 1, borderColor: '#ccc', }}>
            {items
              .map((item, index) => {
                const props = getItemProps({item, index})
                return (
                  <TouchableOpacity {...props} key={item}>
                    <View
                      style={{
                        backgroundColor:
                          highlightedIndex === index ? 'gray' : 'black',
                      }}
                    >
                      <Text
                        style={{
                          fontWeight: selectedItem === item ? 'bold' : 'normal',
                          color: '#fff'
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })}
          </ScrollView>
        ) : null}
      </MyView>
    )}
  />
)

export default BasicAutocomplete
