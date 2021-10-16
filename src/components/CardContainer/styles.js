import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  image: {
    position: 'absolute',
    width: '100%',
    height: '110%'
  },
  title:{
    fontFamily: 'Futura',
    fontSize: 34,
    color: '#ec9d00',
    width: 300,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  titleHard:{
    fontFamily: 'Futura',
    fontSize: 34,
    color: '#00ff11',
    width: 300,
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  back:{
    top: 40
  },
  playerContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    top: 125,
    width: 380,
    height: 380,
    marginLeft: 16,
    borderRadius: 420,
    top: windowHeight > 810 ? 130 : 80,
    opacity: 0.6,
    backgroundColor: 'white'
  },
  parentContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  playerContainerHard:{
    justifyContent: 'center',
    alignItems: 'center',
    top: 125,
    width: 380,
    height: 380,
    marginLeft: 16,
    borderRadius: 420,
    top: windowHeight > 810 ? 130 : 20,
    opacity: 0.8,
    backgroundColor: 'white'
  },
  
  circleContainer:{
    justifyContent: 'center',
    alignItems: 'center',

  },
  titleContainer:{
    top: 220,
    width: '80%',
    marginRight: '10%',
    marginLeft: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextButton:{
    fontFamily: 'Futura',
    fontSize: 26,
    color: 'white'

  },
  playerPop:{
    borderRadius: 20,
    width: '60%',
    opacity: 0.8,
    height: 60,
    top: windowHeight > 810 ? 250 : 190,
    borderWidth: 2,
    opacity: 0.8,
    justifyContent: 'center',
    borderColor: '#fff2b8',
    alignItems: 'center',
    backgroundColor: '#ec9d00',
    marginBottom: 2,
  },
  playerPopHard:{
    borderRadius: 20,
    width: '60%',
    opacity: 0.8,
    height: 60,
    bottom: 100,
    borderWidth: 2,
    top: windowHeight > 810 ? 250 : 190,
    opacity: 0.8,
    justifyContent: 'center',
    borderColor: '#ffffff',
    alignItems: 'center',
    backgroundColor: '#00ac0b',
    marginBottom: 52,
  },
  playerText:{
    fontFamily: 'Futura',
    fontSize: 43,
    color: '#ec9d00',
    fontWeight: 'bold'
  },
  playerTextHard:{
    fontFamily: 'Futura',
    fontSize: 43,
    color: '#00ff11',
    fontWeight: 'bold'
  },
  playerInner:{
    position: 'absolute',
    bottom: 280,
  },
  nextButtonContainer:{
    top: 380,
    justifyContent: 'center',
    alignItems: 'center',
  }
  })
