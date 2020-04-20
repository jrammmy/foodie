import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange}) => {
  return (
    <View style={styles.searchBarContainer}>
      <Icon name="search" style={styles.icon} color="#3e3e3e" />
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
      />
    </View>);
};

const styles = StyleSheet.create({
  searchBarContainer: {
    height: 50,
    borderRadius: 10,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 15,
  },
  searchBar: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});

export default SearchBar;
