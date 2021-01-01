import React, {useState} from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';



export default () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) =>{
        // price === '$' || '$$' || '$$$'
        return results.filter(result=>{
            return result.price === price;
        });
    }

    return (
        <>
            <SearchBar 
            term={term} 
            //onTermChange={(newTerm)=>setTerm(newTerm)}
            //onTermSubmit={()=> searchApi()}
            //can be shortened as follow:
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
            <ResultsList  results={filterResultsByPrice('$')} title='Cheap food'/>
            <ResultsList  results={filterResultsByPrice('$$')}  title='A little expensive'/>
            <ResultsList  results={filterResultsByPrice('$$$')}title='Expensive food'/>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#FFF',
        flex: 1
    }
});
