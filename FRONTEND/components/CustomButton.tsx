import {View, Text, TouchableOpacity, ActivityIndicator,StyleSheet} from 'react-native'
import React from 'react'
import {CustomButtonProps} from "../types";
import cn from "clsx";



const CustomButton = ({
    onPress,
    title="Click Me",
    textStyle,
    isLoading = false
}: CustomButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} >
            <View style={styles.centerRow} >
                <Text className={cn(textStyle)} style={styles.text}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    centerRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:"#39A75A",
        padding: 10,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
        minWidth: 100,
        minHeight: 30,

    },
    text: {
        color: 'white',
        fontWeight: '600',
        
    },

});
export default CustomButton
