"use strict"
// @flow

import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableWithoutFeedback,
	Dimensions,
	Animated
} from 'react-native';

const {width, height} = Dimensions.get('window');

// import { Page } from 'animationDemo/src/components';
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class Icon extends Component {
	constructor(){
		super()
		// this.updateUser = this.updateUser.bind(this);
		this.shouldUpdate=false
		this.AnimatedValue=new Animated.Value(0)
	}

	componentWillReceiveProps(nextProps) {
//before update use -> this.props
//after update use -> nextProps
	    // if(this.props.animateOnClick||nextProps.animateOnClick) {
			// 	console.warn("animateOnClick");
			// 	this.shouldUpdate=true
			// 	this.AnimatedValue.setValue(0);
			if(this.props.name !==nextProps.name) {
				this.shouldUpdate=true
				this.AnimatedValue.setValue(0);

			}else if(nextProps.animateAllActive){
 				if(this.props.isActive ||nextProps.isActive) {
						this.shouldUpdate=true
						this.AnimatedValue.setValue(0);
				}else{
					this.shouldUpdate=false
				}
			// }else if(nextProps.animateAllNameChange){
 		// 		if(this.props.name ||nextProps.name) {
			// 			this.shouldUpdate=true
			// 			this.AnimatedValue.setValue(0);
			// 	}else{
			// 		this.shouldUpdate=false
			// 	}

			}else if(this.props.isActive !==nextProps.isActive) {
				this.shouldUpdate=true
				this.AnimatedValue.setValue(0);
 	    }else{
				this.shouldUpdate=false
			}
	}




	// componentDidMount() {
	//   this.updateUser();
	//
	// }
	// 	updateUser() {
	// 	  if (this.props.isManager) {
	// 	    this.props.dispatch(actions.fetchAllSites())
	// 	  } else {
	// 	    const currentUserId = this.props.user.get('id')
	// 	    this.props.dispatch(actions.fetchUsersSites(currentUserId))
	// 	  }
	// 	}

	getIcon(iconFamily) {
		if (iconFamily === "Entypo") return Entypo
		else if (iconFamily === "EvilIcons") return EvilIcons
		else if (iconFamily === "FontAwesome") return FontAwesome
		else if (iconFamily === "Foundation") return Foundation
		else if (iconFamily === "Ionicons") return Ionicons
		else if (iconFamily === "SimpleLineIcons") return SimpleLineIcons
		else if (iconFamily === "MaterialIcons") return MaterialIcons
		else if (iconFamily === "MaterialCommunityIcons") return MaterialCommunityIcons
		else if (iconFamily === "Octicons") return Octicons
		else if (iconFamily === "Zocial") return Zocial
		else return MaterialCommunityIcons
	}
	// componentWillUnmount(){
	//
	// 	this.shouldUpdate=false
	// }
	render() {
		let {
			fontSize,
			item,
			color,
			colorOutputRange,
			colorInputRange,
			disableAnimation,
			animation,
			iconFamily,
			name,
			size,
			scaleInputRange,
			scaleOutputRange,
		} = this.props

		// select icon family
		let Icon = this.getIcon(iconFamily)
		const AnimatedIcon = Animated.createAnimatedComponent(Icon);

		// console.warn(this.shouldUpdate);
			if(this.shouldUpdate)
			Animated.timing(this.AnimatedValue, animation).start()

                         return (<AnimatedIcon
                         size={size}
                         name={name}
                         style={{
                          //  color,
                           color:(colorOutputRange&&colorInputRange)?this.AnimatedValue.interpolate({outputRange:colorOutputRange,inputRange:colorInputRange}):color,
                           fontSize: fontSize, backgroundColor:"transparent",
                           transform: [
                             {
                               scale: this.AnimatedValue.interpolate({
                                 inputRange: scaleInputRange,
                                 outputRange: scaleOutputRange,
                               }),
                             },
                           ],
                         }}
                       />);

	}
}

Icon.defaultProps = {
	fontSize: 40,
	color: "rgba(0,0,0,0.5)",
	iconFamily: "MaterialCommunityIcons",
	animation: {
		toValue: 1,
		duration: 500
	},
	scaleInputRange:[0, 0.6, 1],
scaleOutputRange:[1, 1.5, 1],
}
