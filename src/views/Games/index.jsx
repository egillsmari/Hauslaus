import React from 'react';
import {
  View, Text, TouchableOpacity, Animated, 
} from 'react-native';
import styles from './styles';
import Bubble from '../../components/Bubbles';
import beerCloud from '../../resources/final_beer.png';
import {LinearGradient} from 'expo-linear-gradient'
import Addplayers from '../../components/addPlayers';

class Games extends React.Component {
  state = {
    players: [],
    inputPlayers: false,
    showButton: 'block',
    fill: new Animated.Value(800),
    foam: new Animated.Value(300),
    fadeAnim: new Animated.Value(0),
    fadeAnimButton: new Animated.Value(0),
    startButton: new Animated.Value(1)
  };

  componentDidMount() {
    Animated.parallel([
      Animated.timing(this.state.fill, {
        toValue: 0,
        duration: 3500,
        useNativeDriver: false
    }),
    Animated.timing(this.state.foam, {
      toValue: 0,
      duration: 1000,
      delay: 1855,
      useNativeDriver: false

  }),
  Animated.timing(this.state.fadeAnim, {
    toValue: 1,
    delay: 3000,
    duration: 1000,
    useNativeDriver: true

  }),
  Animated.timing(this.state.fadeAnimButton, {
    toValue: 1,
    delay: 3000,
    duration: 1000,
    useNativeDriver: true
  }),
  Animated.timing(this.state.startButton, {
    toValue: 1.2,
    duration: 1500,
    useNativeDriver: true,
    iterations: 100,
    resetBeforeIteration: true
  })
    ]).start()

  }

  handleCallback = (newPlayers) =>{
    console.log("da players: " + newPlayers)
    this.setState({players: newPlayers})
}

  render() {
    const fillStyle = {
      height: this.state.fill,
    };
    const foamStyle = {
      height: this.state.foam,
    };

    return (
    <View style={styles.container}>
    <Animated.View style={[styles.box, fillStyle]} />
    <Animated.View style={[styles.foam, foamStyle]} />
    <Animated.Image
    source={beerCloud}
          style={[ styles.beerCloud, { opacity: this.state.fadeAnim} ]}
        >
        </Animated.Image>
    
      <LinearGradient
        // Background Linear Gradient
        colors={['#F6C101', '#EC9D00', '#EC9D00']}
        style={styles.background}
        />
        <LinearGradient
        // Background Linear Gradient
        colors={['#faf3dd', '#faf3dd', '#F6C101']}
        style={styles.foamBackground}
        />

      <Bubble delay={2800} pos={140}/>
        <Bubble delay={1300} pos={20} />
        <Bubble delay={14000} pos={225} />
        <Bubble delay={10000} pos={297}/>
        <Bubble delay={10500} pos={297}/>
        <Bubble delay={1600} pos={99}/>
        <Bubble delay={9000} pos={11}/>
        <Bubble delay={5400} pos={160}/>
        <Bubble delay={5900} pos={140}/>
        <Bubble delay={8500} pos={341}/>
        <Bubble delay={11500} pos={399}/>
        <Bubble delay={13500} pos={429}/>
        <Bubble delay={1500} pos={5}/>
        <Bubble delay={800} pos={400}/>
        <Bubble delay={14500} pos={372}/>
        <Bubble delay={15500} pos={122}/>
        <Bubble delay={17500} pos={342}/>
        <Animated.View style={[ styles.gameContainer, { opacity: this.state.fadeAnimButton} ]}>
          <View style={styles.scrollContainer}>
        <Addplayers
          navigation = {this.props.navigation}
          start={this.state.inputPlayers}
          callback={this.handleCallback}
        >
        </Addplayers>
        <Animated.View style={[styles.startContainer, {
        transform: [{ scale: this.state.startButton }]
      }]}>
        <TouchableOpacity style={[styles.startButton, {display: this.state.showButton}]} onPress={() => this.setState({inputPlayers: true, showButton: 'none' })}>
          <Text style={[styles.startText]}>
            Byrja
          </Text>
          </TouchableOpacity>
          </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

export default Games;