import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  name:{
    marginTop: 70,
    marginLeft: 180,
    fontSize: 30,
    color: "black",
  },
  container: {
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
  },
  back: {
    position: 'absolute',
    left: 20,
    top: 50,
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
});
