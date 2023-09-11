import React, { FC, ReactNode } from 'react'
import { Text as RNText, StyleSheet, useColorScheme } from 'react-native'


type TextProps = {
    children?: ReactNode,
    textAlign?: 'left' | 'right' | 'center',
    fontSize?: number,
    fontWeight?: | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const Text: FC<TextProps> = ({ children, textAlign = 'left', fontWeight, fontSize }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const styles = StyleSheet.create({
        text: {
            color: isDarkMode ? 'white' : 'black',
            textAlign: textAlign,
            fontWeight,
            fontSize: fontSize
        }
    })

    return (
        <RNText style={styles.text}>{children}</RNText>
    )
}

export default Text