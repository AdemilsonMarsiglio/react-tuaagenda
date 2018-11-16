import React from 'react';
import { StyleSheet, Text, ScrollView, View } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import moment from 'moment/min/moment-with-locales';

import Header from '../components/agenda/week/Header';
import Body from '../components/agenda/week/BodyWithFlatList';

export default class AgendaWeek extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            showDays: 7,
            intervalTime: 30,
            now: moment()
        };
    }
    
    onSwipeLeft(gestureState) {
        this.setState({
            now: this.state.now.add(this.state.showDays, 'day')
        });

        console.log("passou aqui, swipe left", this.state.now, new Date());
    }

    onSwipeRight(gestureState) {
        this.setState({
            now: this.state.now.subtract(this.state.showDays, 'day')
        });

        console.log("passou aqui, swipe right", this.state.now,  new Date());
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
                date: startWeek.format('YYYY/MM/DD')
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

        console.log("passou aqui, vai renderizar", new Date());

        const days = this.getDays();
        const times = this.getTimes();

        const {showDays} = this.state;

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 500
        };

        return (
            
                <GestureRecognizer
                    onSwipeLeft={(state) => this.onSwipeLeft(state)}
                    onSwipeRight={(state) => this.onSwipeRight(state)}
                    config={config}>
                    <Header days={days}/>
                
                <Body 
                    times={times}
                    days={days}
                    showDays={showDays}    
                />
                </GestureRecognizer>
            
        )
    }

    componentDidUpdate() {
        console.log("componentDidUpdate", new Date());

    }
}