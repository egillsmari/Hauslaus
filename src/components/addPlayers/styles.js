import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
  inputContainer:{

  },
    input: {
        height: 50,
        backgroundColor: 'white',
        opacity: 0.95,
        bottom: '40%',
        borderRadius: 20,
        padding: 10,
        fontSize: 20,
      },
      playButton:{
        height: 50,
        backgroundColor: 'white',
        opacity: 0.9,
        bottom: windowHeight > 810 ? 40 : 95,
        width: '40%',
        borderRadius: 20,
        padding: 2,
        fontSize: 20,
        marginRight: '30%',
        marginLeft: '30%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      playText: {
        opacity: 0.9,
        color: '#ec9d00',
        fontSize: 34,
        bottom: 2,
      },

      logoContainer:{
        justifyContent: 'center',
        alignItems: 'center',
      },
      logo:{
          position: 'relative',
          bottom: windowHeight > 810 ? 20 : 105,
          height: windowHeight > 810 ? 270 : 220,
          width: windowHeight > 810 ? 270 : 220,
          marginBottom: 7,
         
      },
      plusCircle: {
          marginLeft: 'auto',
          marginRight: 'auto',
          bottom: '35%',
      },
      addTitle:{
        position: 'absolute',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: '82%',
        color: 'white',
        fontSize: 24,
      }
})