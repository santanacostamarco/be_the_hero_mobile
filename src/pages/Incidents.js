import React, { useState, useEffect } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import api from '../services/api';
import Container from '../containers/Container';
import Title from '../components/Title';
import Incident from '../components/Incident';
import Header from '../components/Header';

const styles = StyleSheet.create({
  headerText: {
    color: '#737380',
    fontSize: 14,
  },

  headerTextBold: {
    fontWeight: 'bold'
  },
  
  description: {
    marginBottom: 15,
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  }
});

export default function Incidents() {

  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  async function loadIncidents() {
    if (loading) {
      return;
    }

    if (totalIncidents > 0 && totalIncidents === incidents.length) {
      return;
    }

    setLoading(true);
    const response = await api.get('incidents', {
      params: { page }
    });
    setIncidents([...incidents, ...response.data]);
    setTotalIncidents(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{totalIncidents} casos</Text>.
        </Text>
      </Header>

      <Title>
        Bem-vindo!
      </Title>

      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia!
      </Text>

      <FlatList data={incidents}
        keyExtractor={({ id }) => ( String(id) )}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={.4}
        renderItem={
          ({ item }) => <Incident details={item} />
        }
      />

    </Container>
  )
}