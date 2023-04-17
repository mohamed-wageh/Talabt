import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import COLORS from '../constant/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  onChangeText,
  // onBlur,
  // value,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{marginBottom: 20}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icon
          name={iconName}
          style={{color: COLORS.darkBlue, fontSize: 22, marginRight: 10}}
        />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          onChangeText={onChangeText}
          style={{color: COLORS.darkBlue, flex: 1,outline:'none'}}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={{color: COLORS.darkBlue, fontSize: 22}}
          />
        )}
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
  },
});

export default Input;
// import React from 'react';
// import { useState } from 'react';
// import {View, Text, TextInput, StyleSheet} from 'react-native';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// const Input = ({
//   label,
//   iconName,
//   Password,
//   placeholder,
//   onChangeText,
//   secureTextEntry
//   }) => {
//     const [hidePassword, setHidePassword] = React.useState(Password);
 
//     return (
//       <View style={{marginBottom: 20}}>
//         <Text style={style.label}>{label}</Text>
//         <View
//           style={[
//             style.inputContainer,
//             {
//               alignItems: 'center',
//               borderColor :'#fff' ,
//             },
//           ]}>
//           <Icon
//             name={iconName}
//             style={{color:  '#7978B5', fontSize: 22, marginRight: 10}}
//           />
//           <TextInput
//           secureTextEntry={hidePassword}
//           style={{color:  '#7978B5', flex: 1}}
//           placeholder={placeholder}
//           onChangeText={onChangeText}
//         />
//         {Password && (
//         <Icon
//         onPress={() => setHidePassword(!hidePassword)}
//         style={{color:  '#7978B5', fontSize: 22}}
//         name={hidePassword ? 'eye-outline' : 'eye-off-outline'}/>
//         )}
        
//         </View>
//       </View>
//     );
//   };
  
//   const style = StyleSheet.create({
//     label: {
//       marginVertical: 5,
//       fontSize: 14,
//       color: '#BABBC3',
//     },
//     inputContainer: {
//       height: 55,
//       backgroundColor: '#F3F4FB',
//       flexDirection: 'row',
//       paddingHorizontal: 15,
//       borderWidth: 0.5,
//     },
//   });
  
//   export default Input;