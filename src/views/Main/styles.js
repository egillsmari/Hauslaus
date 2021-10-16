import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#F6C101",
    opacity: 0.6
  },
  name:{
    marginTop: 240,
    marginLeft: 120,
    fontSize: 50,
    color: "white",
  },
  logo: {
    margin: 105,
    width: 200,
    height: 200
  },
  box: {
    position: "absolute",
    width: '100%',
    backgroundColor: "#2d2d30",
  },
  container2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
},
wave: {
    position: "absolute",
    bottom: 20,
    width: '100%',
    aspectRatio: 1,
    overflow: 'hidden',
},
});
