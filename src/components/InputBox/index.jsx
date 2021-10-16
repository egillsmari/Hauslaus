import React, { Component, Modal } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, FlatList, TouchableOpacity, Text } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import styles from './styles';
import AddModal from '../AddModal';

class InputBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      textInput : [],
      isAddModalOpen: false,
      inputData : [],
      name: '',
      firstPlayer: 'nafnið',
      playerCount: 0,
    }
  }


  //function to add TextInput dynamically
  addTextInput = (index, playerName) => {
    let textInput = this.state.textInput;
    textInput.push(<TouchableOpacity key={index} style= {styles.textInput}>
      <AntDesign name="user" size={70} color="white" style={styles.playIcon}/>
        <Text
        style={styles.playerName}
        >{playerName}</Text>
     
        </TouchableOpacity>);
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeTextInput = () => {
    let textInput = this.state.textInput;
    let inputData = this.state.inputData;
    textInput.pop();
    inputData.pop();
    this.setState({ textInput,inputData });
  }

  //function to add text from TextInputs into single array


  getName(playerName){ // sets the name to the state name
    this.setState({ name: playerName })
    const index = this.state.playerCount
    const text = playerName
    let dataArray = this.state.inputData;
    let checkBool = false;
    if (dataArray.length !== 0){
      dataArray.forEach(element => {
        if (element.index === index ){
          element.text = text;
          checkBool = true;
        }
      });
    }
    if (checkBool){
    this.setState({
      inputData: dataArray
    });
  }
  else {
    dataArray.push({'text':text,'index':index});
    this.setState({
      inputData: dataArray
    });
  }
  this.props.onAddPlayers(this.state.inputData); 
  this.setState({playerCount: this.state.playerCount+1})
  this.addTextInput(this.state.textInput.length, playerName)

  };

  //function to console the output
  getValues = () => {
    console.log('Data',this.state.inputData);
  }

  render(){
    if (this.state.inputData[0] === undefined){
      this.state.firstPlayer = 'nafn'
    }
    else{
      this.state.firstPlayer = this.state.inputData[0].text
    }
   
    return(
      <View style={styles.mainContainer}>
        <AddModal
            isOpen={ this.state.isAddModalOpen }
            closeModal={ () => this.setState({ isAddModalOpen: false })}
            getName={ (name) => this.getName(name)}
            />
        <View style={styles.addRemoveContainer}>
        <TouchableOpacity style= {styles.addIconContainer}
        onPress={() => this.removeTextInput(this.state.textInput.length)} 
        >
        <AntDesign name="deleteuser" size={40} color="white" style={styles.addIcon}/>
        </TouchableOpacity>
        <View
         style={styles.iconSeparator}>

        </View>
        <TouchableOpacity style= {styles.addIconContainer}
          onPress={() => this.setState({isAddModalOpen: true})}
          
        >
        <AntDesign name="adduser" size={40} color="white" style={styles.addIcon}/>
        </TouchableOpacity>

        </View>

        <ScrollView style={styles.inputContainer}>

        <View style= {styles.row}>


        {this.state.textInput.map((value) => {
          return value
        })}
      </View>
      </ScrollView>
      </View>
    )
  }
}
export default InputBox;