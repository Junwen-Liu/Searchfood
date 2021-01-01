import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {Feather} from '@expo/vector-icons'

export default function SearchBar({term, onTermChange, onTermSubmit}) {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search"/>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search"
            value = {term} 
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        marginTop: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginBottom: 10
    },
    inputStyle:{
        flex: 1,
        fontSize: 18
    },
    iconStyle:{
        fontSize: 40,
        alignSelf: 'center',
        marginHorizontal: 10
    }
})
