import React from 'react';
import RNSchedule from 'rnschedule';
import { View, StyleSheet } from 'react-native';



export default class ScheduleView extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const data = [
      {
        title: 'Lunch Appointment',
        subtitle: 'With Harry',
        start: new Date(2018, 11, 2, 13, 20),
        end: new Date(2018, 11, 2, 14, 20),
        color: '#390099',
      }
    ];

    return (
      
        <RNSchedule
          // dataArray={data}
          onEventPress={(appt) => console.log(appt)}
        />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
});

