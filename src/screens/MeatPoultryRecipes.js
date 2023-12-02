import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import cookbook from '../api/cookbook';
import useResults from '../hooks/useResults';

const MeatPoultryRecipes = () => {
  const [results, errorMessage] = useResults('meatrecipes');
  return (
    <View>
      <Text>Meat & Poultry Recipes</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.id}</Text>
            <Text>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default MeatPoultryRecipes;
