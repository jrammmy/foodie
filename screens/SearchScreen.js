import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
});

export default SearchScreen;
