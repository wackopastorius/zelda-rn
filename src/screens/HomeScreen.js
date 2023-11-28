import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
    <View style={styles.container}>
        
        <Button 
            onPress={() => navigation.navigate("Vegetarian")}
            title="Vegetarian Recipes"
        />
        <Button 
            onPress={() => navigation.navigate("Seafood")}
            title="Seafood Recipes"
        />
        <Button 
            onPress={() => navigation.navigate("MeatPoultry")}
            title="Meat & Poultry Recipes"
        />
        <Button 
            onPress={() => navigation.navigate("SurfTurf")}
            title="Surf & Turf Recipes"
        />
        
    </View>);
};

const styles = StyleSheet.create({
    
});

export default HomeScreen;