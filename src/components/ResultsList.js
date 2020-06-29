import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, style, navigation}) => {
  const list = results.map((result) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <ResultsDetail key={result.id} result={result} />
      </TouchableOpacity>
    );
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {list}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    borderBottomWidth: 2,
    paddingBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default ResultsList;
