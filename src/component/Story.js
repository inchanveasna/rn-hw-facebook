
import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native'
import { Avatar } from 'react-native-elements'
import { primaryColor } from '../values/Constant'

const width = Dimensions.get('screen').width / 3.5 - 12
const height = width * 1.5

export class Story extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    style={styles.image}
                    imageStyle={{ borderRadius: 12 }}
                    source={{ uri: this.props.urlimage }}>


                    <Avatar
                        rounded
                        containerStyle={styles.profile}
                        source={{ uri: this.props.urlavatar }}
                    />

                    <Text style={styles.name}>{this.props.fbname}</Text>
                </ImageBackground>


            </View>


        )
    }
}

export default Story

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: width,
        height: height,
        marginRight: 4,
        marginTop: 8,
    },

    image: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },

    profile: {
        margin: 4,
        borderWidth: 2,
        borderColor: primaryColor,
    },

    name: {
        color: 'white',
        fontSize: 13,
        fontWeight: "bold",
        padding: 8
    },
})