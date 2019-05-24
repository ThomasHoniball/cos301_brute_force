import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import Login from './app/components/Login';
import Register from './app/components/Register';
import Cart from './app/components/Cart';
import Search from './app/components/Search';
import Scan from './app/components/Scan';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Firebase from 'firebase';





class App extends React.Component {

  componentWillMount()
	{
		 // Your web app's Firebase configuration
		var firebaseConfig = {
			apiKey: "AIzaSyDVhQd3G31dnvQg1BhPOcmtIZ65FeNLZaw",
			authDomain: "bruteforce-d8058.firebaseapp.com",
			databaseURL: "https://bruteforce-d8058.firebaseio.com",
			projectId: "bruteforce-d8058",
			storageBucket: "bruteforce-d8058.appspot.com",
			messagingSenderId: "217456283824",
			appId: "1:217456283824:web:f2650b7c748d147c"
		};
		// Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    //console.log(firebase)
  }
  
  constructor(props){
    super(props);
  }

  render() {
    return(
    <View style={styles.container}>
      <Text>This is a default entry Page</Text>
      <Text style={styles.btn}>Use the navigation buttons to go to the page you want to work on</Text>
     
      <Button  onPress={() => this.props.navigation.navigate('login')} title="Login"></Button>
      <Button style={styles.container && styles.btn}  onPress={() => this.props.navigation.navigate('register')} title="Register"></Button>
      <Button style={styles.btn} onPress={() => this.props.navigation.navigate('cart')} title="Cart"></Button>
      <Button style={styles.btn} onPress={() => this.props.navigation.navigate('search')} title="Search"></Button>
      <Button style={styles.btn} onPress={() => this.props.navigation.navigate('scan')} title="Scan"></Button>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  btn: {
    marginTop: 8,
    padding: 8
  },
});

 const NavStack = createStackNavigator({
   entry: App,
   login : Login,
   register: Register,
   search: Search,
   cart: Cart,
   scan: Scan,
});
const nav = createAppContainer(NavStack);
export default nav;
