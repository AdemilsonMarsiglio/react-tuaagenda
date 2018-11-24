import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import Day from './Day';
import { COLOR } from '../../../styles/style';

import InfiniteViewPager from '../../InfiniteViewPager';



export default class Body extends React.Component {

    constructor(props) {
        super(props);
    }


    render(){
        const {times, days, showDays} = this.props;

        const timeAndDay = [];
        times.map((time) => {
            let row = [time];
            for (i = 0; i < showDays; i++) {
                row = [...row, days[i]];
            }
            timeAndDay.push(row);
        });

        return (
            <FlatList
                data={timeAndDay}
                renderItem={({item, index}) => this.renderRow(item, index)}
                keyExtractor={(item) => item[0]}
                updateCellsBatchingPeriod={15}
                windowSize={10}
            />
        )
    }

    renderRow(timeAndDay, indexList) {
        const columns = timeAndDay.map((obj, index) => {
            const key = `${indexList}_${index}`;
            
            if (index === 0) 
                return <Text key={key} style={[styles.column, styles.columnText]}>{obj}</Text>

            return <Day 
                        key={key}   
                        style={styles.column}
                        time={timeAndDay[0]}
                        day={obj}
                    />
        });

        return <View style={styles.row}>{columns}</View>;
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
        borderBottomWidth: 0.3,
        borderLeftWidth: 0.5,
        height: 60,
        paddingLeft: 5,
        paddingRight: 5,
    }, 
    columnText: {
        color: COLOR.SECONDARY_TEXT
    }
});