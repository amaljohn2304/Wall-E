import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ScrollView } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Category from '../components/category';
import Header from '../components/header';
import Paper from '../components/paper';

const Home = () => {
    var main = "#F4F9F9";
    var sub = "#CCF2F4";
    var accent = "#A4EBF3";
    var accent2 = "#AAAAAA";
    const image = "https://images.unsplash.com/photo-1653509517330-a5dbac11243f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470";
    //X5TN2A8cuQc3azdbLTX8lxbu_SYNClkpcVWKsQmY2qQ - access
    //XYL451VQRPD2m6dkk0nkyFZlsfjiDL-yujeMBpXjNp8 - secret
    //Your API key: 563492ad6f91700001000001c62b489ae1dd4d87a1b7a55f8fa0ba01 (pexel)

    const [search, setsearch] = useState(null);

    return (
        <View style={{ backgroundColor: `${main}`, height: "100%", alignItems: 'center', width: "100%", bottom: 25 }} >
            <Header />

            <ScrollView>
                <Paper image={image} />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Home;
