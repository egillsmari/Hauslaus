import React, {useState} from 'react';
import { connect } from 'react-redux';
import { View, FlatList, Text, TouchableOpacity, Animated, TextInput, Image, ScrollView, Dimensions } from 'react-native';
import { color } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons'; 
import PlayerAlert from '../PlayerAlert'
import InputBox from '../InputBox';
import styles from './styles';
import logo from '../../resources/final_logo.png';
import { useCallback } from 'react';



const Addplayers = ({
  navigation: { navigate },
  start,
  players,
  
}

) => {
  const [value, setValue] = useState(0);
  const [list, setList] = useState([]);
  toGame = (players) => {
    // check if any player have been added
    // alert if not else navigate to game
    if (value > 0) {
      console.log("there are players: " + list)
      navigate('HauslausGame', {playerList: list})
    }
    else{
      console.log("no players:  " + players)
      return (
        <PlayerAlert>

        </PlayerAlert>
      )
    }
  }

  handlePlayers = (newPlayers) => {
    players = newPlayers;
    setList(list.concat([players[value].text]));
    console.log("the new players: " + players[value].text);
    setValue((value + 1))
}

  if (start){
    
    return (
    <View style={styles.inputContainer}>
      <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={logo}>
      </Image>
      </View>
      <InputBox
        onAddPlayers={this.handlePlayers}
      >
      </InputBox>
      <TouchableOpacity
       onPress={() => { this.toGame() }}
       style={styles.playButton}>
        <Text style={styles.playText}>
         🍻
         </Text>
      </TouchableOpacity>
    </View>
    )
  }
  else{
    return (
      <View style={styles.inputContainer}>
      <View style={styles.logoContainer}>
      <Image
        style={styles.logo}
        source={logo}>
      </Image>
      </View>
    </View>
    )
  }
};

export default Addplayers;
