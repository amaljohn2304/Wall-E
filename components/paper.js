import React, { useState, useEffect } from 'react';
import { SearchBar } from 'react-native-elements';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Linking } from "react-native";

const redirect = (link) => {
    Linking.openURL("https://images.pexels.com/photos/12017866/pexels-photo-12017866.jpeg?cs=srgb&dl=pexels-vasilis-karkalas-12017866.jpg&fm=jpg")
}
//https://images.pexels.com/photos/12017866/pexels-photo-12017866.jpeg?cs=srgb&dl=pexels-vasilis-karkalas-12017866.jpg&fm=jpg
var main = "#F4F9F9";
var sub = "#CCF2F4";
var accent = "#A4EBF3";
var accent2 = "#AAAAAA";
var pages = 1;
var offset = -50;
const Paper = (props) => {

    const images = [
        {
            url: "https://www.pexels.com/photo/woman-standing-with-hands-in-her-pockets-12167579/",
            photographer: "Ekaterina",
            photographer_url: "https://www.pexels.com/@pit0chka",
            src: {
                portrait: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            }
        },
        {
            url: "https://images.unsplash.com/photo-1653509517330-a5dbac11243f?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170",
            photographer: "Ekaterina",
            photographer_url: "https://www.pexels.com/@pit0chka",
            src: {
                portrait: "https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            }
        },

    ]
    const [page, setpage] = useState(1);
    const [data, setdata] = useState(images);
    const [searchQuery, setSearchQuery] = useState('');



    const onChangeSearch = query => {
        console.log(query);
        setSearchQuery(query)
        setpage(1)
        pages = 1;
        getImages(page, query)
    };


    async function getImages(pageno = 1, srch = '') {
        console.log(srch, "looking");
        setpage(pageno);
        const url = `https://pexelsdimasv1.p.rapidapi.com/v1/curated?per_page=5&page=${pageno}`;


        const options = {
            method: 'GET',
            headers: {
                Authorization: '563492ad6f91700001000001c62b489ae1dd4d87a1b7a55f8fa0ba01',
                'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com',
                'X-RapidAPI-Key': '5009249013msh10500308327bc30p1ef796jsncc35fbfb5d77'
            }
        };
        if (srch != '') {
            console.log("searchin")
            return await fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${srch}&locale=en-US&per_page=5&page=${pageno}`, options)
                .then(res => res.json())
                .then(json => setdata(json.photos))
                .then(json => console.log(json))
                .then(error => console.log(error))
        }
        console.log(url);
        return await fetch(url, options)
            .then(res => res.json())
            .then(json => setdata(json.photos))
            .then(json => console.log(json))
            .then(error => console.log(error))
    }
    useEffect(() => {
        getImages(page, searchQuery)
    }, []);
    var srch = null;

    return (
        <>
            <SearchBar
                placeholder="Search"
                onChangeText={onChangeSearch}
                value={searchQuery}
                platform="ios"
                containerStyle={{ backgroundColor: `${main}`, borderTopWidth: 0, borderBottomWidth: 0 }}
                onClear={() => {
                    setSearchQuery('');
                    setpage(1);
                    pages = 1;
                    getImages(page, '');
                }}

            />
            <View style={{ width: "100%", alignItems: 'center', justifyContent: 'space-between' }}>
                {
                    data.map((items, index) => (
                        <View key={index} style={{ padding: 10, paddingHorizontal: 10, borderRadius: 20, backgroundColor: "white", margin: 10, width: 350, elevation: 10 }}>

                            <Thumb image={items.src.portrait} />
                            <Info artist={items.photographer} follow={items.photographer_url} url={items.src.portrait}></Info>

                        </View>
                    ))
                }

            </View >
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 20, backgroundColor: `${accent2}`, paddingVertical: 10, paddingHorizontal: 15, borderBottomLeftRadius: 50, borderTopLeftRadius: 50, borderTopRightRadius: 10, borderBottomRightRadius: 10, elevation: 5 }} onPress={() => { getImages(--pages, searchQuery), console.log(pages) }}>
                    <Text >Prev</Text>
                </TouchableOpacity>
                <Text style={{ alignSelf: 'center' }}>{page}</Text>
                <TouchableOpacity style={{ marginHorizontal: 20, marginBottom: 20, backgroundColor: `${accent2}`, paddingVertical: 10, paddingHorizontal: 15, borderBottomRightRadius: 50, borderTopRightRadius: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, elevation: 5 }} onPress={() => { getImages(++pages, searchQuery), console.log(pages) }}>
                    <Text>Next</Text>
                </TouchableOpacity>

            </View>
        </>
    );
}

const Thumb = (props) => (

    <View>
        <TouchableOpacity>
            <Image source={{ uri: props.image }}
                style={{
                    alignSelf: 'center',
                    width: '100%',
                    height: 600,
                    borderWidth: 1,
                    borderRadius: 10,
                    resizeMode: 'cover',
                }}
            />

        </TouchableOpacity>


    </View>
)

const Info = (props) => (
    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, padding: 5 }}>
        <Text style={{ padding: 8 }}>By {props.artist}</Text>
        <TouchableOpacity style={{ backgroundColor: `${accent}`, padding: 8, paddingHorizontal: 20, borderRadius: 10, elevation: 2 }} onPress={() => Linking.openURL(props.follow)} >
            <Text>Follow</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: `${accent}`, padding: 2, borderRadius: 5, elevation: 2, width: 35, height: 35 }} onPress={() => Linking.openURL(props.url + "&dl")} >
            <Image
                source={require('../assets/download.png')}
                style={{ position: 'absolute', zIndex: 10, width: 30, height: 30, alignSelf: 'center' }}
            ></Image>
        </TouchableOpacity>
    </View>
)

export default Paper;
