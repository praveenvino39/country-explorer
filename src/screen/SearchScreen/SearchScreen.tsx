import React, { useState } from 'react'
import { ActivityIndicator, Button, ScrollView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import TextField from '../../components/TextField/TextField';
import CountryDetail from '../../components/CountryDetail/CountryDetail';
import useService from '../../hooks/useService';
import Text from '../../components/Text/Text';

function SearchScreen() {
    const [text, setText] = useState("")
    const isDarkMode = useColorScheme() === 'dark';
    const { searchCountryByName } = useService()
    const [country, setCountry] = useState<Country | undefined>()
    const [error, setError] = useState<String | null>(null)
    const [loading, setLoading] = useState<boolean>(false)



    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    const handleSearchCountry = async () => {
        setError(() => null)
        setLoading(() => true)
        setCountry(undefined)
        const countryFromService = await searchCountryByName(text)
        if (countryFromService) {
            setCountry(countryFromService)
        } else {
            setError(() => "Country not found, Please double check it's spelling")
        }
        setLoading(() => false)
    }

    return (
        <View style={[backgroundStyle, styles.screen]}>
            <ScrollView>
                <View style={styles.actionContainer}>
                    <View style={{ flex: 1 }}>
                        <TextField text={text} onChangeText={(text) => setText(text)} placeHolder='Enter country name' />
                    </View>
                    <Button testID='search-button' onPress={handleSearchCountry} title='Search' />
                </View>
                {country && !error && <CountryDetail showDetail showAddToFav country={country} />}
                {error && <View style={{ marginTop: 100 }}><Text textAlign='center'>{error}</Text></View>}
                {loading && <View style={{ marginTop: 100 }}><ActivityIndicator /></View>}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        gap: 10

    }
})


export default SearchScreen