import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Avatar, Icon, Button } from 'react-native-elements'
import { iconType, primaryColor } from '../values/Constant'

export class FacebookTool extends Component {
    render() {
        return (
            <View style={{marginRight: 8, marginLeft: 8}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Avatar rounded
                        size='medium'
                        source={{ uri: 'https://z-p3-scontent.fpnh5-4.fna.fbcdn.net/v/t1.0-9/86709295_2864482576966784_1646414604126912512_o.jpg?_nc_cat=110&ccb=2&_nc_sid=174925&_nc_eui2=AeFlP7R-N_UyOaseDPIqo204vgL2qxyNrQW-AvarHI2tBfMN9ceNGc7iW5kyGeCC-uFYFDrDjKzjYjMzBMpG_7eY&_nc_ohc=MBUHW4psDCYAX8l9yfZ&_nc_ht=z-p3-scontent.fpnh5-4.fna&oh=061105a393100a331000786802fce8a6&oe=5FDCC49A' }} />

                    <Text style={{ fontSize: 18, color: 'darkgrey', padding: 10 }}>What's on your mind?</Text>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 15 }}>
                    <Button title=' Live'

                        type='clear'
                        icon={<Icon
                            name='videocam'
                            type={iconType}
                            color={primaryColor}
                            size={20}
                        />}
                    />
                    <Button title=' Photo'
                        type='clear'
                        icon={<Icon
                            name='images'
                            type={iconType}
                            color={primaryColor}
                            size={20}
                        />}
                    />
                    <Button title=' Check In'
                        type='clear'
                        icon={<Icon
                            name='location'
                            type={iconType}
                            color={primaryColor}
                            size={20}
                        />}
                    />
                </View>
            </View>
        )
    }
}

export default FacebookTool
