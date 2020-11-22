import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Avatar, Header, Icon } from 'react-native-elements'
import { iconType, primaryColor } from '../values/Constant'

export class AppBar extends Component {
    render() {
        return (
            <View>
                <Header
                    backgroundColor='#FFF'
                    placement='left'
                    leftComponent={
                        <Text style={{ color: primaryColor, fontSize: 25, fontWeight: 'bold' }}>Facebook</Text>
                    }
                    rightComponent={
                        <View style={{ flex: 1, flexDirection: 'row', alignItems:'center' }}>
                            <Icon
                                name='search'
                                type={iconType}
                                color={primaryColor}
                                size={25}
                            />
                            <Icon
                                name='chatbubble-outline'
                                type={iconType}
                                color={primaryColor}
                                size={25}
                                containerStyle={{marginLeft:4}}
                            />
                        </View>
                    }
                />
            </View>
        )
    }
}

export default AppBar
