import React from 'react';
import {View, StyleSheet} from 'react-native';

const SearchBar = () => {
  return <View style={styles.searchBarContainer} />;
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    marginHorizontal: 20,
  },
});

export default SearchBar;
