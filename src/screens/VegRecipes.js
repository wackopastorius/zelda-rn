import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, FlatList, SafeAreaView } from "react-native";
import cookbook from "../api/cookbook";
import axios from "axios";

const VegRecipes = ({}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/vegrecipes");
                setData(response.data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator/>
            </View>
        );
    }

    if (error) {
        return (
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>An error occurred</Text>
          </View>
        );
    }
    
    const renderItem = ({item}) => {
        return (
          <View
            style={{
              padding: 10,
              marginVertical: 8,
              marginHorizontal: 16,
              backgroundColor: '#f9c2ff',
            }}>
            <Text style={{fontSize: 18}}>{item.title}</Text>
            <Text style={{fontSize: 14}}>{item.body}</Text>
          </View>
        );
      };

    return (
        <SafeAreaView
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({

});

export default VegRecipes;