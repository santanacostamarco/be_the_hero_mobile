import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import Container from '../containers/Container';
import Card from '../containers/Card';
import Row from '../containers/Row';

import Header from '../components/Header';
import Property from '../components/Property';
import currency from '../helpers/currency'

const styles = StyleSheet.create({
  title: {
    color:'#13131a',
    fontWeight: 'bold',
    fontSize: 18
  },

  text: {
    color: '#737380',
    fontSize: 14,
    lineHeight: 24,
    marginVertical: 14,
  },

  button: {
    backgroundColor: '#e02041',
    paddingVertical: 14,
    borderRadius: 8,
    width: "48%"
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 14
  }
})

function Details() {

  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;

  const messageToSend = `Olá, ${incident.name}.\n\nEstou entrando em contato pois gostaria\
  \ de ajudar no caso "${incident.title}" com o valor de ${currency(incident.value, 'BRL')}.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail () {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: messageToSend
    })
  }

  function sendWhatsApp () {
    Linking.openURL(`whatsapp://send?phone=+55${incident.whatsapp}&text=${messageToSend}`)
  }

  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={30} color="#e02041" />
        </TouchableOpacity>
      </Header>
      <Card>
        <Row alignment="space-between">
          <Property label="Caso:" value={incident.title} />
          <Property label="Ong:" value={`${incident.name}\n ${incident.city} - ${incident.uf}` } />
        </Row>
        <Row>
          <Property label="Description:" value={incident.description} />
        </Row>
        <Row>
          <Property label="Value:" value={ currency(incident.value, 'BRL')} />
        </Row>
      </Card>
      <Card>
        <Text style={styles.title}> Salve o dia! </Text>
        <Text style={styles.title}> Seja o herói desse caso. </Text>
        <Text style={styles.text}> Entre em contato com a {incident.name} </Text>
        <Row alignment="space-between">
          <TouchableOpacity style={styles.button} onPress={sendWhatsApp}>
            <Text style={styles.buttonText}> WhatsApp </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={sendMail}>
            <Text style={styles.buttonText}> E-mail </Text>
          </TouchableOpacity>
        </Row>
      </Card>
    </Container>
  )
}

export default Details;