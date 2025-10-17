import {View, Text, TextInput,StyleSheet} from 'react-native'
import {CustomInputProps} from "../types";
import {useState} from "react";
import cn from "clsx";

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
            <Text className="label">{label}</Text>

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
                placeholderTextColor="#888"
                className={cn('input', isFocused ? 'border-secondary' : 'border-gray-300')}
            />
        </View>
    )
}

// const styles = StyleSheet.create({
//     centerRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     text: {
//         color: '#fff',
//         fontWeight: '600',
//         // add more styles as needed
//     }
// });

export default CustomInput
