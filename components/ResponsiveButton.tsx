import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';


// Ekran boyutlarını almak için Dimensions API'si
const { width } = Dimensions.get('window');

const ResponsiveButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );

  ResponsiveButton.propTypes = {
    title: PropTypes.string.isRequired, // title, string türünde olmalı
    onPress: PropTypes.func.isRequired, // onPress, bir fonksiyon olmalı
  };
  
  
};

const styles = StyleSheet.create({
  button: {
    width: width * 0.8, // Ekran genişliğinin %80'i
    aspectRatio: 4 / 1, // En-boy oranı
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15, // Köşeleri yuvarlatma
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 20, // Android'de gölge efekti için
    marginTop:15,
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'thin',
  },
});

export default ResponsiveButton;