import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment/min/moment-with-locales';

import { COLOR } from '../../../styles/style';

export default class Header extends React.Component {

    render () {
        const columnHeader = [{}, ...this.props.days].map(day => {
            const nowDay = moment().format('DD');
            let key = "_";

            if (day && day.date) 
                key += day.date;

            return (
                <View style={styles.columnHeader} key={key}>
                    {day.number 
                        ?   <View >
                                <View style={styles.wrapColumnHeaderDayText}>
                                    <Text style={styles.dayText}>{day.text}</Text>
                                </View>
                                <View style={[
                                    styles.wrapColumnHeaderDayNumber, 
                                    day.number === nowDay ? styles.selectedDay : null]}
                                >
                                    <Text style={[
                                        styles.dayTextNumber,
                                        day.number === nowDay ? styles.selectedDayText : null]}>{day.number}</Text>
                                </View>
                            </View>
                        : null
                    }
                </View>
            )
        });

        return (<View style={styles.row}>{columnHeader}</View>);
    }

}


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    columnHeader: {
        flex: 1,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: COLOR.DIVIDER_COLOR,
        paddingBottom: 10,
    },
    wrapColumnHeaderDayText: {
        padding: 5,
    },
    wrapColumnHeaderDayNumber: {
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    selectedDay: {
        backgroundColor: COLOR.ACCENT_COLOR,
        borderRadius: 30,
        width: 30,
        height: 30,
        marginTop: 5,
    },
    dayTextNumber: {
        color: COLOR.PRIMARY_TEXT,
    },
    dayText: {
        color: COLOR.SECONDARY_TEXT
    },
    selectedDayText: {
        color: COLOR.TEXT_ICONS_COLOR
    },
});