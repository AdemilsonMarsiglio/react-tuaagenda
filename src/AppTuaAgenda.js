import React from 'react';
import { StyleSheet, FlatList, Text, View, ScrollView } from 'react-native';
import AgendaWeek from './pages/AgendaWeek';

import { COLOR } from './styles/style'

export default class AppTuaAgenda extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <Text style={styles.navText}>Fake Navigation</Text>
        </View>
        <AgendaWeek />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR.PRIMARY_COLOR,
    height: 80
  },
  navText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLOR.TEXT_ICONS_COLOR
  }
});
