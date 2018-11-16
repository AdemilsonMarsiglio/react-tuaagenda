import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Day from './Day';
import { COLOR } from '../../../styles/style';


export default class Body extends React.Component {

    constructor(props) {
        super(props);
    }


    render(){

        const {times, days, showDays} = this.props;

        const agenda = times.map((time, index) => {

            //ajustes para montar as linhas dinamicamente conforme os dias.
            const rowsTime = [time];
            for(i = showDays; i !== 0; i--) {
                rowsTime[i] = null;
            }

            const columns = rowsTime.map((hora, index) => {
                const day = days[index-1];
                const key = (day ? day.date : "_") + hora;

                if (hora) 
                    return <Text key={key} style={[styles.column, styles.columnText]}>{hora}</Text>

                return <Day 
                            key={key}   
                            style={styles.column}
                            time={time}
                            day={day}
                        />
            })

            
            const key = time;
            return (
                <View  
                    key={key}
                    style={[
                        styles.row, 
                        index === times.length -1 ? styles.lastRow : null
                    ]}>
                    {columns}
                </View>
            );
        });

        return <ScrollView>{agenda}</ScrollView>
    }
}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    lastRow: {
        paddingBottom: 300
    }, 
    column: {
        flex: 1,
        borderColor: COLOR.DIVIDER_COLOR,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        height: 60,
        paddingLeft: 5,
        paddingRight: 5,
    }, 
    columnText: {
        color: COLOR.SECONDARY_TEXT
    }
});