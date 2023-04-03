import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({
  label,
  iconName,
  password,
  }) => {
    return (
      <View style={{marginBottom: 20}}>
        <Text style={style.label}>{label}</Text>
        <View
          style={[
            style.inputContainer,
            {
              alignItems: 'center',
              borderColor :'#fff' ,
            },
          ]}>
          <Icon
            name={iconName}
            style={{color:  '#7978B5', fontSize: 22, marginRight: 10}}
          />
          <TextInput
          autoCorrect={false}
            // secureTextEntry={hidePassword}
            style={{color:  '#7978B5', flex: 1}}
           
          />
          {password && (
            <Icon
            //   onPress={() => setHidePassword(!hidePassword)}
            //   name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
              style={{color:  '#7978B5', fontSize: 22}}
            />
          )}
        </View>
      </View>
    );
  };
  
  const style = StyleSheet.create({
    label: {
      marginVertical: 5,
      fontSize: 14,
      color: '#BABBC3',
    },
    inputContainer: {
      height: 55,
      backgroundColor: '#F3F4FB',
      flexDirection: 'row',
      paddingHorizontal: 15,
      borderWidth: 0.5,
    },
  });
  
  export default Input;