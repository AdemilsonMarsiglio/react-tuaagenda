import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment/min/moment-with-locales';

import Header from './Header';
import Body from './Body';

import horarios from '../../../../eventos.json';

export default class AgendaWeek extends Component {

    constructor(props) {
        super(props);

        this.state = {
            showDays: 7,
            intervalTime: 30,
            now: props.now
        };
    }

    componentDidMount() {
        const days = this.getDays();

        if (days.length > 0) {
            // const { obj } = days[0];
            const obj = moment("2018-11-18T00:01:00");

            // obj.isBetween(moment("2018-12-28T16:00:00"), moment("2018-12-28T18:00:00"));
            console.log(obj.format("YYYY-MM-DDTHH:mm:ss"))
            const d1 = moment("2018-11-18T00:00:00")
            const d2 = moment("2018-11-18T23:59:00")

            console.log('d1 ', d1.format("YYYY-MM-DDTHH:mm:ss"))
            console.log('d2 ', d2.format("YYYY-MM-DDTHH:mm:ss"))

            console.log(obj.isBetween(d1, d2))


            // console.log("\x1b[36m", "Buscar horarios do dia: " + days[0].date + " ao " + days[days.length -1].date, "\x1b[0m");
        }


    }

    getDays() {
        const {now, showDays} = this.state;
        const startWeek = moment(now);

        //Se for semanal, começa do domingo
        if (showDays === 7) 
            startWeek.startOf('week');

        const days = [];
        for(i = 0; i < showDays; i++) {
            days[i] = {
                text: startWeek.locale('pt-br').format('ddd'),
                number: startWeek.format('DD'),
                date: startWeek.format('YYYY/MM/DD'),
                obj: startWeek
            };

            startWeek.add(1, 'day');
        }
        
        return days;
    }

    getTimes() {
        const today = moment().startOf('day');
        const tomorow = moment().add(1, 'day').startOf('day');
        const {intervalTime} = this.state;

        const times = [];
        while(today.isBefore(tomorow)) {
            times.push(today.format("HH:mm"));
            today.add(intervalTime, 'minute')
        }

        return times;
    }
    
    

    render () {
        const days = this.getDays();
        const times = this.getTimes();

        const {showDays} = this.state;

        return (
                <View style={[this.props.style, {flex: 1}]}>
                    <Header days={days}/>
                    <Body 
                        times={times}
                        days={days}
                        showDays={showDays}    
                    />
                </View>
            
        )
    }
}