import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultsList = ({title, results, style}) => {
  const list = results.map((result) => (
    <ResultsDetail key={result.id} result={result} />
  ));

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
