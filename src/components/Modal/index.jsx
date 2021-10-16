import React from 'react';
import PropTypes from 'prop-types';
import NativeModal from 'react-native-modal';
import { Text, View } from 'react-native';
import styles from './styles';
import { AntDesign } from '@expo/vector-icons';

const Modal = ({
  isOpen, closeModal, title, children,
}) => (
  <NativeModal
    isVisible={isOpen}
    hasBackdrop
    onBackButtonPress={closeModal}
    onSwipeComplete={closeModal}
    swipeDirection={['right', 'left']}
    style={styles.modal}
  >
    <View style={styles.body}>
    <AntDesign name="close" size={34} color="#ec9d00" onPress={() => closeModal()} style={styles.close}/>
    
      <Text>{ title }</Text>
      { children }
    </View>
  </NativeModal>
);

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default Modal;
