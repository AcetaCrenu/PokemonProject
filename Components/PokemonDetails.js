import React from 'react';
import { Modal, View, Text, Button, StyleSheet, Image } from 'react-native';

const PokemonDetails = ({ pokemon, visible, onClose }) => {
  if (!pokemon) {
    return null;
  }
  return (
    <Modal visible={visible} onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image style={styles.image} source={{ uri: pokemon.img }} />
          <Text>Name: {pokemon.name}</Text>
          <Text>Type: {pokemon.type.join(', ')}</Text>
          <Text>Height: {pokemon.height}</Text>
          <Text>Weight: {pokemon.weight}</Text>
          <Text>Egg: {pokemon.egg}</Text>
          <Text>{'\n'}</Text>
          <Button title="Close" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: 'rgba(47,163,218, .4)',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      width: '80%',
      alignItems: 'center',
    },
    image: {
      height: 150,
      width: 100,
      resizeMode: 'contain',
    },
  });
  
  export default PokemonDetails;