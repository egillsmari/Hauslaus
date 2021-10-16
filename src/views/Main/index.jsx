import React from 'react';
import {
  View, Text, Image, Animated,TouchableHighlight
} from 'react-native';
import styles from './styles';


class Main extends React.Component {
  state = {
    animation: new Animated.Value(1000),
  };

  componentDidMount() {
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 3500,
    }).start();
  }

  doNavigate(){
    setTimeout(() => {
      this.props.navigation.navigate('Games');
    }, 1000);
  }
 
   render() {
    return(
      <View style={styles.container}>
        <View>

        </View>
      
      </View>
    );
   }
 }
 
 export default Main;