import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import RestaurantCard from '../components/restaurant-card';
import SearchBar from '../components/search-bar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => console.log('Term submitted!')}
      />
      <Text>{term}</Text>
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
