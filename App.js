import React, { Component } from 'react'
import { ImageBackground, SafeAreaView, ScrollView, Text, View } from 'react-native'
import AppBar from './src/component/AppBar'
import FacebookTool from './src/component/FacebookTool'
import Newsfeed from './src/component/Newsfeed'
import Story from './src/component/Story'
import { iconType, Newsfeeds, primaryColor, Stories } from './src/values/Constant'

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppBar />

        <ScrollView
          showsVerticalScrollIndicator={false}>
          <FacebookTool />

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ marginLeft: 8 }}>
            {
              Stories.map((item) =>
                <Story
                  key={item.id}
                  urlimage={item.image}
                  urlavatar={item.avatar}
                  fbname={item.name}
                />
              )
            }
          </ScrollView>
          <View>
            {
              Newsfeeds.map((item) =>
                <Newsfeed
                  key={item.id}
                  profileImg={item.profileImg}
                  name={item.name}
                  timeAgo={item.timeAgo}
                  caption={item.caption}
                  image={item.image}
                  like={item.likeCount}
                  comment={item.commentCount}
                  share={item.shareCount}
                />
              )
            }
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default App
