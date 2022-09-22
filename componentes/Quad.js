import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Touchable, } from 'react-native';

export default function Quad() {

    const [Opacidade, setCounter] = useState(0.5);

    const Ligadov = () => {
        setCounter(1);
    }


    return (
        <View style={{ width: 60, height: 150, backgroundColor: "black", alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity >
            <View style={{ marginBottom: 10, width: 30, height: 30, backgroundColor: "red", borderRadius: 50 }}/>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => Ligado()}>
            <View style={{ marginBottom: 10, width: 30, height: 30, opacity:Opacidade, backgroundColor: "yellow", borderRadius: 50 }}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Ligado()}>
            <View style={{ marginBottom: 10, width: 30, height: 30, opacity:Opacidade, backgroundColor: "green", borderRadius: 50 }}/>
            </TouchableOpacity>

        </View>
    );
}

{/* <Button title="-" onPress={() => sub()}></Button>
            <Text style={{ padding: 6 }}>{counter}</Text>
            <Button title="+" onPress={() => add()}></Button> */}