import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    },
    inputContainer: {
      width: '110%',
      height: windowHeight > 810 ? '34%' : '32%',
      bottom: windowHeight > 810 ? '6%' : '42%',
      flexDirection: 'column',
      marginBottom: 15,
      marginTop: 12
    },

    buttonView: {
    flexDirection: 'row'
    },
    textInput: {
    marginLeft: windowHeight > 815 ? windowWidth * 0.03 : windowWidth * 0.05,
    height: windowHeight > 810 ? 110 : 110,
    width:  windowHeight > 810 ? 135 : 135,
    backgroundColor: '#f4c972',
    opacity: 0.80,
    borderRadius: 20,
    marginBottom: 5,
    marginTop: 5,
    paddingTop: 15,
    paddingBottom: 45,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playIcon: {
    height: 70,
    marginTop: 45,
    marginBottom: 5,
  },

  playerInput: {
    paddingLeft: '5%',
    width: windowHeight > 810 ? 130 : 110,
    height: windowHeight > 810 ? 30 : 25,
    borderRadius: 20,
    color: 'black',
    backgroundColor: 'white',
    opacity: 1,
  },
  playerName:{
    fontSize: 21,
    color: 'white',
    fontFamily: 'Futura',
    marginBottom: 10
  },
  addIconContainer: {
    marginTop: windowHeight > 810 ? 0 : 10,
    opacity: 0.80,
    borderRadius: 20,
    backgroundColor: '#f4c972',
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeIconContainer: {
    opacity: 0.80,
    borderRadius: 20,
    backgroundColor: '#f4c972',
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addIcon: {
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
    opacity: 1
  },
  iconSeparator:{
    width: 10,
    height: 10,

  },
  addRemoveContainer:{
    bottom: windowHeight > 810 ? '8%' : '38%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  row:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    },

  playButton:{
      position: 'absolute',
      bottom: 100,
      height: 50,
      backgroundColor: 'white',
      opacity: 0.9,
      width: '40%',
      borderRadius: 20,
      padding: 10,
      fontSize: 20,
      marginRight: '35%',
      marginLeft: '35%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    playText: {
      color: 'black',
      fontSize: 20,
    },
    test:{
      width: 100,
      height: 30,
      backgroundColor: 'gray',
    }
  });