import React from 'react';
import { Entypo } from '@expo/vector-icons';
import {
  TouchableOpacity,
  TextInput,
  Button,
  Text,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import Modal from '../Modal';
import styles from './styles';

class AddModal extends React.Component {
  /*
  AddModal renders the Modal shown to user when adding a new task.
  User inputs is sent to the board view and created
  */
  constructor(props) {
    super(props);
    this.state = { name: ''};
  }

  callBoth(){
    if (this.state.name === ''){
      console.log("vantar nafn")
    }
    else{
      this.setState({name: ''})
      this.props.closeModal();
      this.props.getName(this.state.name);
    }
  }

  render() {
    const {
      isOpen,
      closeModal,
    } = this.props;
    return (
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <TextInput
        multiline={true}
        textAlign={'center'}
        maxLength={12}
        color={'#ec9d00'}
        blurOnSubmit = {true}
        onChangeText={(newName) => { this.setState({name: newName}); }}
        style={styles.input}
        />
       
        <TouchableOpacity
        style={styles.submit}
        onPress={() => this.callBoth()}
        >
          <Text
           style={styles.submitText}
          >Staðfesta</Text>
        </TouchableOpacity>
      </Modal>

    );
  }
}
AddModal.propTypes = {

};
export default AddModal;
