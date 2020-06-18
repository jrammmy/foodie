import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import RestaurantCard from '../components/restaurant-card';
import SearchBar from '../components/search-bar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'santa cruz',
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi()}
      />
      <Text>We have found {results.length} results.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default SearchScreen;
