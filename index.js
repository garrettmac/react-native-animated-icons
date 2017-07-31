import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
} from 'react-native';

const {width, height} = Dimensions.get('window');

import Icon from 'react-native-vector-icons/Ionicons';

// import { Page } from 'animationDemo/src/components';

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
this.props = {
   value: new Animated.Value(0),
   active: false,
 };
export default class Icon extends Component {

  constructor(props) {
    super(props);
    props.value=new Animated.Value(props.value)
  }
  toggle(){
    if(this.props.onPress)this.props.onPress()
    this.props.value.setValue(0);
    const {animation} = this.props
    // if(!Animation)
    Animated.timing(this.props.value, animation).start();
    !this.props.active=!this.props.active
  }


  render() {
    const {name,
  color,
  ,
  fontSize,
  active} = this.props
    return (<View style={styles.container}>
                <View>
                   <TouchableWithoutFeedback
                     underlayColor="transparent"
                     onPress={() =>
                       this.toggle()
                     }>
                     <AnimatedIcon
                       name={active ? activeName : name}
                       style={{
                         fontSize: fontSize,
                         color: active ? activeColor : color,
                         transform: [
                           {
                             scale: this.props.value.interpolate({
                               inputRange: [0, 0.6, 1],
                               outputRange: [1, 1.5, 1],
                             }),
                           },
                         ],
                       }}
                     />
                   </TouchableWithoutFeedback>
                 </View>
                 </View>);
  }
}

const styles = StyleSheet.create({
  // container: {justifyContent: 'center',alignItems: "center",flex: 1,}
  container: {}
});


Icon.defaultProps={
  refilledText:""
  value:0,
  fontSize:40,
  activeName:"heart",
  name:"heart-outline",
  color:"rgb(0,0,0,0.5)",
  activeColor:"rgb(245,60,60,0.8)",
  active:false,
  animation:{toValue: 1,duration: 500,}
}
