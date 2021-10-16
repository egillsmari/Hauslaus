import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth } = Dimensions.get('window');

export default StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    margin: 0,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 0.3,
    borderRadius: 15,
    width: winWidth - 50,
    height: 350,
    backgroundColor: '#faf3dd',
    padding: 30,
  },
  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
  close:{
    right: '52%',
    bottom: '26%'
  }
});
