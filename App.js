import React from 'react';
import { StyleSheet, FlatList,Text, View } from 'react-native';

import horarios from './horarios.json'

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      horarios
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.flatList}
          data={this.state.horarios}
          renderItem={({ item, index }) => (
              <View>
                <Text>{item.data}</Text>
              </View>
          )}
          keyExtractor={({ data }) => data}
        
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    paddingBottom: 70
  }
});
