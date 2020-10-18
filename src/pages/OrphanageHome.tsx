import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function OrphanageHome() {
  const navigation = useNavigation();

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('OrphanagesMap');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Seja bem vindo ao happy</Text>
      <RectButton
        style={styles.createOrphanagesButton}
        onPress={handleNavigateToCreateOrphanage}
      >
        <Feather name="arrow-right" size={30} color="#FFF" />
      </RectButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80aaff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#ffffff',
  },
  createOrphanagesButton: {
    marginTop: 32,
    width: 106,
    height: 40,
    backgroundColor: '#15c3d6',
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
});
