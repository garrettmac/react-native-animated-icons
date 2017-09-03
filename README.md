# React Native Animated Icons
<!-- <p align="center">
  <img alt="react-native-animated-icons" src="https://cdn.rawgit.com/garrettmac/images/a8e4b847/projects/react-native-animated-icons/react-native-animated-icons.jpg" width="308">

</p> -->

<p align="center">
  The simplest icon component for React Native.
</p>

<p align="center">
  <a href="http://standardjs.com/"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-animated-icons"><img alt="npm version" src="http://img.shields.io/npm/v/react-native-animated-icons.svg?style=flat-square"></a>
  <a href="https://npmjs.org/package/react-native-animated-icons"><img alt="npm version" src="http://img.shields.io/npm/dm/react-native-animated-icons.svg?style=flat-square"></a>
  <a href="https://github.com/garrettmac/react-native-animated-icons/pulls?q=is%3Apr+is%3Aclosed"><img alt="PR Stats" src="https://img.shields.io/issuestats/i/github/garrettmac/react-native-animated-icons.svg?style=flat-square"></a>
  <a href="https://gitter.im/garrettmac/react-native-animated-icons?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge"><img alt="Join the chat" src="https://badges.gitter.im/garrettmac/react-native-animated-icons.svg"></a>
</p>






(I Need to do some clean up on this readme but it works, give it a try!)

All your vector icon needs in one place
A light wrapper around `react-native-vector-icons`

### Getting Started

 Import in to  your project
```jsx
import Icon from "react-native-animated-icons"
```
### Basic Usage
this will not trigger animation. for that keep reading.
```jsx
<Icon
   name="ios-star"
   iconFamily="Ionicons"
   size={30}/>
```

### Animation
This dummy component monitors changes in props
How to trigger animation
```jsx
name={o.isActive?"heart":"heart-outline"}
```
or if you dont what to change your icon use
```jsx
 name={"heart"} isActive={o.isActive}
```


### Color
pass prop `color`
```jsx
color="rgba(0,0,0,0.5)"
```
or interpolate a change
```jsx
let red="rgba(245,60,60,0.8)"
let light="rgba(255,255,255,0.5)"

...

colorInputRange={[0, 0.56, 1]}
colorOutputRange={[
      light,
      "pink",
      o.isActive?red:light,
]}


```



### All Props

|Parameters|Default|Description|
|------------|----------------------------|------------------------------------|
|animateAllActive|   | |
|name|  | |
|isActive|  | |
| fontSize|  `40` |fontSize|
| color|  `rgba(0,0,0,0.5)` |color|
| iconFamily|  `MaterialCommunityIcons` |iconFamily. optoins:`Entypo`, `EvilIcons`, `FontAwesome`, `Foundation`, `Ionicons`, `MaterialIcons`, `MaterialCommunityIcons`, `Octicons`, `Zocial`, `SimpleLineIcons` |
|animation| `{toValue: 1,duration: 500}`|animation|
|scaleInputRange|`[0, 0.6, 1]`|    |
|scaleOutputRange|`[1, 1.5, 1]`| ||


### Example

```jsx

this.state = {
  hearts:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}],
  tweets:[{isActive:false,"id":1},{isActive:false,"id":2},{isActive:false,"id":3},{isActive:false,"id":4}]
};
....
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

.....
let red="rgba(245,60,60,0.8)"
let light="rgba(255,255,255,0.5)"

<View style={{marginBottom:100,alignItems: "center",justifyContent: "center",height:50,flexDirection:"column", }}>
  <Text style={{textAlignVertical: "center", textAlign: "center",fontSize:20 ,margin:10}}>
  Animate on Icon Name Change
  </Text>
  <View style={{height:70,alignItems: "center",justifyContent: "center",flexDirection:"row",}}>

        {hearts.map((o,i) => {

          return   (<TouchableOpacity style={{height:50,}} key={i} onPress={()=>this.onPressHearts(o)}>
            <Icon
              item={o}
              name={o.isActive?"heart":"heart-outline"}
              // name={"heart"}
              isActive={o.isActive}
              colorOutputRange={[
              light,
              "pink",
               o.isActive?red:light,
            ]}
            // animateAllActive
            colorInputRange={[0, 0.56, 1]}
          />
         </TouchableOpacity>)

        })}
</View>
</View>
```
