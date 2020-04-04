import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import Card from '../containers/Card';
import Row from '../containers/Row';
import Property from '../components/Property';
import currency from '../helpers/currency';

const styles = StyleSheet.create({
  navLink: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  }, 

  navLinkText: {
    color: '#e02041',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8
  }
})

export default function Incident ({ details }) {

  const navigation = useNavigation();

  function navigateToDetail ( incident ) {
    navigation.navigate('Detail', { incident });
  }

  return (
    <Card>
      <Row alignment="space-between">
        <Property label="Caso:" value={details.title} />
        <Property label="Ong:" value={details.name} />
      </Row>
      <Row>
        <Property label="Valor:" value={ currency(details.value, 'BRL') } />
      </Row>
      <TouchableOpacity style={styles.navLink} onPress={() => navigateToDetail(details)}>
        <Text style={styles.navLinkText}>Ver mais detalhes</Text>
        <Feather name="arrow-right" size={20} color="#e02041"/>
      </TouchableOpacity>
    </Card>
  )
}