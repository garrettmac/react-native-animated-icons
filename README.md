# react-native-animated-icons

I Need to clean up this readme but it works, give it a try!

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
   fontFamily="Ionicons"
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
|animateAllActive|   ||
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
