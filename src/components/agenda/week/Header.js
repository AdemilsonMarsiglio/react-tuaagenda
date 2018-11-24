import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment/min/moment-with-locales';

import { COLOR } from '../../../styles/style';

export default class Header extends React.Component {

    render () {
        const columnHeader = [{}, ...this.props.days].map(day => {
            const today = moment().format('YYYY/MM/DD');
            const todayDay = moment().format('DD');
            
            let key = "_";

            if (day && day.date) 
                key += day.date;

            return (
                <View style={styles.columnHeader} key={key}>
                    {day.number 
                        ?   <View >
                                <View style={styles.wrapColumnHeaderDayText}>
                                    <Text style={styles.dayText}>{day.text.toUpperCase()}</Text>
                                </View>
                                <View style={[
                                        styles.wrapColumnHeaderDayNumber, 
                                        day.number === todayDay ? [styles.sameDay, day.date === today ? styles.today : styles.otherMonth] : null,
                                    ]}
                                >
                                    <Text style={[
                                            styles.dayTextNumber,
                                            day.date === today ? styles.todayText : null,
                                        ]}>{day.number}</Text>
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

    sameDay: {
        borderRadius: 30,
        width: 30,
        height: 30,
        marginTop: 5,
    },
    today: {
        backgroundColor: COLOR.ACCENT_COLOR,
    },
    todayText: {
        color: COLOR.TEXT_ICONS_COLOR
    },
    otherMonth: {
        borderWidth: 1,
        borderColor: COLOR.DIVIDER_COLOR
    },

    dayTextNumber: {
        color: COLOR.PRIMARY_TEXT
    },
    dayText: {
        color: COLOR.SECONDARY_TEXT,
        fontSize: 10
    },
    
});