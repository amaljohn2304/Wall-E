import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

const Paper = (props) => {
    return (
        <View style={{ padding: 10, paddingHorizontal: 10, borderRadius: 20, backgroundColor: "white", margin: 10, width: "90%" }}>
            <Thumb image={props.image} />
        </View>
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

export default Paper;
