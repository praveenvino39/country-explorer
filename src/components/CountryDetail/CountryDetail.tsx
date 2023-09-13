import React, { FC, useState } from 'react'
import { Button, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Text from '../Text/Text'
import useStorage from '../../hooks/useStorage'
import { SvgUri } from 'react-native-svg'

type Props = {
    country: Country,
    showAddToFav?: boolean
    showDetail?: boolean
}
const CountryDetail: FC<Props> = ({ country, showAddToFav, showDetail }) => {
    const { addCountryToFavourites } = useStorage()
    const [isShowDetail, setIsShowDetail] = useState(showDetail ?? false)
    return (
        <View testID='country-detail' style={styles.container}>
            <TouchableWithoutFeedback onPress={() => setIsShowDetail(true)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                    <SvgUri
                        height={100}
                        width="40%"
                        style={{
                            backgroundColor: '#00000000',
                        }}
                        aria-label={country.flag.alt}
                        uri={country.flag.assetLink}
                    />
                    <View style={{ flex: 2, gap: 8 }}>
                        <View style={styles.tile}>
                            <Text fontSize={16} fontWeight='900'>Name</Text>
                            <Text textAlign='right'>{country.name}</Text>
                        </View>
                        <View style={styles.tile}>
                            <Text fontSize={16} fontWeight='900'>Capitals</Text>
                            <Text textAlign='right'>{country.capitals.join(", ")}</Text>
                        </View>
                        <View style={styles.tile}>
                            <Text fontSize={16} fontWeight='900'>population</Text>
                            <Text textAlign='right'>{country.population.toLocaleString()}</Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
            {isShowDetail && <>
                <View style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <Text fontWeight='900' fontSize={16}>Area</Text>
                    <View style={{ gap: 12 }}>
                        <Text textAlign='center'>{country.area.kilometres.toLocaleString() + "km"}</Text>
                        <Text textAlign='center'>{country.area.miles.toLocaleString() + "mi"}</Text>
                    </View>
                </View>

                <View style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <Text fontWeight='900' fontSize={16}>Timezones</Text>
                    <View style={{ gap: 12 }}>
                        {country.timezones.map((lang) => <Text key={lang} textAlign='center'>{lang}</Text>)}
                    </View>
                </View>
                <View style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <Text fontWeight='900' fontSize={16}>Currencies</Text>
                    <View style={{ gap: 12 }}>
                        {country.currencies.map((currency) => <Text key={currency.name} textAlign='center'>{currency.name} - {currency.symbol}</Text>)}
                    </View>
                </View>
                <View style={{ alignItems: 'center', gap: 10, marginTop: 20, marginBottom: 30 }}>
                    <Text fontWeight='900' fontSize={16}>Langauges Spoken</Text>
                    <View style={{ gap: 12 }}>
                        {country.languagesSpoken.map((lang) => <Text key={lang} textAlign='center'>{lang}</Text>)}
                    </View>
                </View>
                {showAddToFav && <Button onPress={() => addCountryToFavourites(country)} title='Add to fav' />}
            </>}
            <View style={{ marginTop: 20 }}>
                {!isShowDetail ? <Button onPress={() => setIsShowDetail(true)} title='View detail' /> : !showDetail && <Button onPress={() => setIsShowDetail(false)} title='Less detail' />}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        paddingHorizontal: 16,
    },
    flag: {
        width: 150,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tile: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default CountryDetail