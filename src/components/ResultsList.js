import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResultDetail from './ResultDetail';

export default function ResultsList({title, results}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result=>result.id}
                renderItem ={({item})=>{
                    return <ResultDetail result={item}/>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
        fontSize: 19,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container:{
        marginBottom: 10
    }
});
