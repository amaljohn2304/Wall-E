import React from 'react';
import { View, StyleSheet, Text } from 'react-native';



const Header = () => {
    var main = "#F4F9F9";
    var sub = "#CCF2F4";
    var accent = "#A4EBF3";
    var accent2 = "#AAAAAA";




    return (
        <View style={{
            alignItems: 'center', justifyContent: 'center', backgroundColor: `${sub}`,
            padding: 15, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,
            width: "100%"
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 40 }}>Wall-E</Text>
        </View>
    );
}



export default Header;
