import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import cookbook from "../api/cookbook";
import useResults from "../hooks/useResults";

const VegRecipes = () => {
    const [results, errorMessage] = useResults();

    
    return (
        <View>
            <Text>Vegetarian Recipes</Text>
            <FlatList
                data={results}
                keyExtractor={(item, index) => index.toString()}
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

const styles = StyleSheet.create({

});

export default VegRecipes;