import React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native';


const AddRule = ({
}
) => {

    return (
      <View>
        <TouchableOpacity
        >
        <Text> here you can add your own rule! </Text>
        <TextInput
        >
        </TextInput>
        </TouchableOpacity>
      </View>
    )
  };

export default AddRule;
