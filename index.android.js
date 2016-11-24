'use strict';

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import SignUpPage from './js_modules/page/SignUpPage';
//import JsAndroid from './JsAndroid';
class HelloWorld extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World xqf coming here  dd </Text>
      </View>
    )
  }
}
class HelloWorld2 extends React.Component {
 constructor(props){
    super(props);
    //console.log(NativeActivity);
  }
// _newNativeActivity(){
//    JsAndroid.jsActivity();
//  }
  render() {
    return (
          <SignUpPage/>
            );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld2);