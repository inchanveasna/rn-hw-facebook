import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import { Avatar, Divider, Image, Icon } from 'react-native-elements'
import { iconType, primaryColor } from '../values/Constant'

const width = Dimensions.get('screen').width
const height = width * 0.6

export class Newsfeed extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.profileContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Avatar
                            rounded
                            source={{ uri: this.props.profileImg }}
                            containerStyle={styles.profile}/>

                        <View style={styles.nameTimeContainer}>
                            <Text style={styles.name}>{this.props.name}</Text>
                            <Text style={styles.time}>{this.props.timeAgo}</Text>
                        </View>
                    </View>

                    <Icon
                        name='ellipsis-horizontal'
                        color='black'
                        type={iconType} />
                </View>

                <Text style={styles.caption}
                    numberOfLines={3}
                    selectable={true}
                    ellipsizeMode='tail'>{this.props.caption}</Text>
                <Image
                    source={{ uri: this.props.image }}
                    style={styles.image}
                    PlaceholderContent={<ActivityIndicator />} />

                <View style={styles.messengerContainer}>
                    <Text>Messenger</Text>
                    <Icon
                        size={20}
                        name='bookmark'
                        type={iconType}
                        color='black'/>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: 8}}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name='heart'
                            color={primaryColor}
                            type={iconType} />
                        <Text> {this.props.like}</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name='chatbox'
                            color={primaryColor}
                            type={iconType}/>
                        <Text> {this.props.comment}</Text>
                    </View>

                    <Text> {this.props.share} Shares</Text>
                </View>




                <Divider />
            </View>
        )
    }
}

export default Newsfeed



const styles = StyleSheet.create({
    container: {
        marginTop: 16,
    },

    profileContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginLeft: 8, 
        marginRight: 8
    },

    nameTimeContainer: {
        flexDirection: 'column', 
        marginLeft: 4, 
        justifyContent:'center',
    },

    messengerContainer:{
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginTop: 4, 
        marginLeft: 8, 
        marginRight: 8,
    },

    profile: {
        borderWidth: 2,
        borderColor: primaryColor,
    },

    name: {
        color: 'black',
        fontSize: 15,
        fontWeight: "bold",
    },

    time: {
        color: 'grey',
        fontSize: 11,
    },

    caption: {
        color: 'black',
        fontSize: 13,
        textAlign: 'justify',
        marginTop: 8,
        marginBottom: 4,
        marginRight:8,
        marginLeft: 8,
    },

    image: {
        width: width,
        height: height,
        resizeMode: 'cover'
    }
})