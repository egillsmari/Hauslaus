import React, { Component } from 'react';
import {
    View,
    ActivityIndicator,
} from 'react-native';
import styles from './styles';
import CardContainer from '../../components/CardContainer';
import axios from 'axios';

class HauslausGame extends Component {

  constructor() {
    super();
    this.state = {
      rules: [],
      usedRulesId: [],
      currentRule: 0,
      currentPlayer: '',
      isLoading: true,
      isModal: false,
      dataSource: null,
      playing: false,
      playerTurn: 0
    }
  }
  componentDidMount() {
    const api = 'https://oxplel6zz8.execute-api.us-east-2.amazonaws.com/live/rules';
    axios
      .get(api)
      .then((response) => {
        this.setState({
          isLoading: false,
          rules: response.data.rules,
        })
      })
      .catch((error) => {
        console.log(error);
      });
    }

    findMaxId(){
      return 10;
    }

    shuffleRules() {
      console.log("params: " + this.props.navigation.state.params.playerList[0])
      var ruleId = Math.floor(Math.random() * this.state.rules.length);
      this.setState({playerTurn: this.state.playerTurn + 1 })
      if (this.state.playerTurn === this.props.navigation.state.params.playerList.length-1){
        this.setState({playerTurn: 0 })
      }
      this.setState({isLoading: false, currentRule: this.state.rules[ruleId], playing: true, currentPlayer: this.props.navigation.state.params.playerList[this.state.playerTurn]})
        }

    handleCheck(ruleId) {
      return this.state.usedRulesId.some(item => ruleId == item);
    }
    goHome(){
      this.props.navigation.navigate('Games')
    }

    render() {
      const { isLoading, currentRule, rules, playing, currentPlayer } = this.state;
        if (isLoading || rules === []) {
            return(
                <View style={styles.container}>
                    <ActivityIndicator size={'large'} /> 
                </View>
            )
        } else {
          
            return(
                <View style={styles.container}>
                    <CardContainer
                    goHome={() => this.goHome()}
                    shuffleRules={() => this.shuffleRules()}
                    rule={currentRule}
                    playing={playing}
                    player={currentPlayer}
                    >
                    </CardContainer>
                </View>
            )
        }

    }

}

export default HauslausGame