import React, {useRef} from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  const input = useRef(null);
  const _onPress = () => {
    input.current.focus();
  };

  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity style={styles.icon} onPress={_onPress}>
        <Icon name="search" size={40} color="#3e3e3e" />
      </TouchableOpacity>
      <TextInput
        style={styles.searchBar}
        placeholder="Search..."
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        ref={input}
      />
    </View>
  );
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
