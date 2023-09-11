import React, { FC } from 'react'
import { Dimensions, StyleSheet, TextInput, View, useColorScheme } from 'react-native'


type TextFieldType = {
    placeHolder?: string,
    text?: string,
    onChangeText?: (args: string) => void
}

const TextField: FC<TextFieldType> = ({ placeHolder, onChangeText }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const themeSpecificStyle = {
        borderColor: isDarkMode ? 'white' : 'black',
        color: isDarkMode ? 'white' : 'black',
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TextInput testID='text-field' onChangeText={onChangeText} clearButtonMode='always' placeholder={placeHolder} style={[{ ...themeSpecificStyle }, styles.container]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 12,
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderWidth: 1,
        fontSize: 16,
        borderRadius: 7,
    }
})
export default TextField