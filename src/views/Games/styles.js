import { StyleSheet, Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "white",
  },
  scrollContainer:{
    marginTop: 20,
  },
  startButton:{
    marginLeft: "auto",
    marginRight: "auto",
    bottom: windowHeight > 810 ? 0 : 50,
    width: '25%',
    height: '32%',
  },
  start: {
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    fontSize: 30,
  },
  startText:{
    fontSize: 45,
    width: 200,
    fontFamily: 'Futura',
    color: 'white',
    right: 10,
  },
  startContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: "auto",
  },
  box: {
    position: "absolute",
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: "#eccccc"
  },
  name:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    width: 225,
    fontSize: 95,
    color: "white",
    fontFamily: 'System',
  },
  gameContainer:{
      height: 1500,
      "zIndex": 999,
      opacity: 0,
      paddingTop: 100,
      marginTop: '30%',
      marginLeft: '10%',
      marginRight: '10%',
      
  },
  gameName:{
    justifyContent: 'center',
    fontSize: 30,
    color: "black",
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  background:{
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height : 640,
  },
  foamBackground:{
    position: 'absolute',
    bottom: 640,
    width: '100%',
    height : 300,
  },
  box: {
    position: 'absolute',
    zIndex: 998,
    width: '100%',
    height: 100,
    backgroundColor: "black",
  },
  foam:{
    position: 'absolute',
    zIndex: 998,
    width: '100%',
    height: 100,
    backgroundColor: "black",
  },
  beerCloud:{
    "zIndex": 999,
    width: 520,
    height: 360,
    position: 'absolute',
    bottom: '70%',
    left: -15,
    },
    beerContainer: {
      "zIndex": 999,
    width: 480,
    height: 320,
    position: 'absolute',
    bottom: 680,
    left: -15,
    },
   
});
