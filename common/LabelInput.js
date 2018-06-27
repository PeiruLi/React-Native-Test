import React from 'react';
import {TextInput} from 'react-native';

const LabelInput = ({
  Label,
  inputRef,
  placeholder,
  defaultValue,
  type,
  disabled,
  required,
  col,
  onChange
}) => {
  return (
    <View style={{flex:1, flexDirection:'column', justifyContent:'center'}}>
        <View style={{flexDirection:'row'}}>
            <View style={{flex:0.2, marginLeft: 0.2}}>{Label}</View>
            <TextInput 
              style={{flex:0.6, borderWidth:1, height:20, borderColor: 'gray', borderWidth: 1}}
              value={defaultValue}
              >
              </TextInput>
        </View>
    </View>
  );
};

export default LabelInput;
