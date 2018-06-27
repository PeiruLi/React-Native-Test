import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    justifyContent: 'center',
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    textAlign: 'center',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
  },
  Button: {
    color: "#841584"
  }
});

export default class App extends Component {

  constructor(props) {  
    super(props);  
    // 初始状态  
    this.state = { 
      username: 'Username',
      password: 'Password',
      label: 'Place',
      title: 'Click Me'
     };
     this.onPressLearnMore.bind(this);
    } 

  onPressLearnMore(e) {
    console.log();
    this.setState({
      title: 'Learn More'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          This is a React Native snapshot test.
        </Text>

        <View style={{flexDirection:'row'}}>
            <Text style={{flex:0.2,alignSelf:'center',fontSize:16}}>
              Username
            </Text>
            <TextInput
              style={{height: 40, flex: 0.6, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              placeholder={this.state.username}
            />
        </View>

        <View style={{flexDirection:'row'}}>
            <Text style={{flex:0.2,alignSelf:'center',fontSize:16}}>
              Password
            </Text>
            <TextInput
              style={{height: 40, flex: 0.6, borderColor: 'gray', borderWidth: 1}}
              onChangeText={(text) => this.setState({text})}
              placeholder={this.state.password}
            />
        </View>
        <Button
            style={styles.Button}
            onPress={(event) => this.onPressLearnMore(event, this.props.title)}
            title= {this.state.title}
            accessibilityLabel="Tap Me"
          />
        
      </View>
    );
  }
}