"use strict"

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from './Icon';

export default class ReactNativeAnimatedIcons extends Component {

  constructor(props){
  	super(props);
  	this.state = {
      triggerAnimationId:null,
      // triggerAnimationId:1,
      hearts:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}],
      tweets:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}]
    };

  }


onPressTweets = (item) => {
  // console.log(" onPress:item ",item);
  if(!item)return
  // item.isActive!=item.isActive
let {tweets} = this.state
  let updatedlist=tweets.map(o => o.id === item.id
                        ?{ ...o, isActive: o.isActive?false:true}
                      :o)
  this.setState({
    triggerAnimationId:tweets.find(x => x.id === item.id).id,
    tweets: updatedlist})

}
onPressHearts = (item) => {
  // console.log(" onPress:item ",item);
  if(!item)return
  // item.isActive!=item.isActive
let {hearts} = this.state
  let updatedlist=hearts.map(o => o.id === item.id
                        ?{ ...o, isActive: o.isActive?false:true}
                      :o)
  this.setState({
    triggerAnimationId:hearts.find(x => x.id === item.id).id,
    hearts: updatedlist})

}



  render() {
    const {tweets,hearts} = this.state
    let red="rgba(245,60,60,0.8)"
    let light="rgba(255,255,255,0.5)"
  return (
      <View style={styles.container}>
    <TouchableOpacity
            style={{position:"absolute",top:25,right:10,flex:1,zIndex:3,width:35,height:35,alignItems:"center",justifyContent:"center",backgroundColor:"transparent"}}>
            <Icon
//               onPress={()=>{
// this.state.hearts.map((o,i) => {
// this.setState({triggerAnimationId:0})
// })
//               }}
//               disableAnimation
              // name={"heart-outline"}
              name={"close"}
              // triggerAnimationId={this.state.triggerAnimationId}
              size={25} color="rgba(256,256,256,0.5)"/>
    </TouchableOpacity>



      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#01a699',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('ReactNativeAnimatedIcons', () => ReactNativeAnimatedIcons);
