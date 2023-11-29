import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import cookbook from "../api/cookbook";

const VegRecipes = () => {
    console.log("Hi there");
    const [results, setResults] = useState([]);

    const searchApi = async () => {
        try {
            const response = await cookbook.get("/vegrecipes/");
            setResults(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        searchApi();
    }, []);

    return (
        <View>
            <Text>hey</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VegRecipes;