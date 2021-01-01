import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'
import yelp from '../../api/yelp';

const ResultsShowScreen = ({navigation}) => {
    const id= navigation.getParam('id');
    const [result, setResult] = useState(null);

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
            data = {result.photos}
            keyExtractor = {(photo)=> photo}
            renderItem = {({item})=>{
                return <Image style={styles.photo} source={{uri: item}}/>
            }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    photo:{
        height:200,
        width: 300,
        marginBottom: 5
    }
});

export default ResultsShowScreen;
