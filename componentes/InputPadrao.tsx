import { View, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import TextoPadrao from './TextoPadrao';

interface Props {
  icon: any;
  placeholder: string;
}

export default function InputPadrao({
  icon,
  placeholder,
}: Props) {

  return (

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#111',

        borderWidth: 1,
        borderColor: '#c9960c',

        borderRadius: 16,

        paddingHorizontal: 16,
        paddingVertical: 14,

        marginBottom: 18,
      }}
    >

      <Ionicons
        name={icon}
        size={22}
        color="#c9960c"
      />

      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#777"

        style={{
          flex: 1,
          marginLeft: 12,
          color: '#fff',
          fontSize: 16,
        }}
      />

    </View>

  );
}