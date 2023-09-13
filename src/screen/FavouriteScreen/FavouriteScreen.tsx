import React, { FC, useEffect, useState } from 'react'
import Text from '../../components/Text/Text'
import useStorage from '../../hooks/useStorage'
import { useNavigation } from '@react-navigation/native'
import { FlatList, View, useColorScheme } from 'react-native'
import CountryDetail from '../../components/CountryDetail/CountryDetail'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { globalStyles } from '../../globalStyles'


const FavouriteScreen = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [favouriteCountires, setFavouriteCountires] = useState<Country[]>([])
    const { getFavouriteCountries } = useStorage()
    const { addListener } = useNavigation()

    useEffect(() => {
        const unsubscribe = addListener('focus', () => {
            loadFavouriteCountry()
        });
        return unsubscribe;
    }, [])

    const loadFavouriteCountry = async () => {
        const countries = await getFavouriteCountries()
        setFavouriteCountires([...countries])
    }


    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View style={[globalStyles.screen, backgroundStyle]}>
            {favouriteCountires.length > 0 ?
                <FlatList testID='favourite-list' data={favouriteCountires} renderItem={({ item }) => <CountryDetail key={item.name} country={item} />} />
                :
                <View testID='no-favourite-list' style={{ marginTop: 200, alignItems: 'center' }}>
                    <Text>No country favourited yet</Text>
                </View>
            }
        </View>
    )
}

export default FavouriteScreen