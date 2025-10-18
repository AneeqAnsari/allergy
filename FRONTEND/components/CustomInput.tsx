import {View, Text, TextInput,StyleSheet} from 'react-native'
import {CustomInputProps} from "../types";
import {useState} from "react";
import {colors, fonts} from '@/constants/colors';

const CustomInput = ({
    placeholder = 'Enter text',
    value,
    onChangeText,
    label,
    secureTextEntry = false,
    keyboardType="default"
}: CustomInputProps) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View className="w-full">
            <Text style={styles.text}>{label}</Text>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholder={placeholder}
                placeholderTextColor="#A3A3A3"
                style={styles.input}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
  
    text: {
        color: colors.text,
        fontSize: 16,
        fontFamily:fonts.poppins,
       
    },
    input: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 10,
        borderRadius: 5,
        fontSize: 15,
        marginTop: 5,
        backgroundColor: 'white',
        minWidth: '100%',
         fontFamily:fonts.poppinsLight,

    }
});

export default CustomInput
