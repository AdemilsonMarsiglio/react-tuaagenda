import React, { Component } from 'react';
import {View, Text, Dimensions} from 'react-native';
import moment from 'moment';

import AgendaWeek from '../components/agenda/week/AgendaWeek';
import InfiniteViewPager from '../components/InfiniteViewPager';


const { width, height } = Dimensions.get('window')
const numberPages = 2000;

export default class AgendaWeekPager extends Component {
    

    _renderPage(info) {
        const { index } = info

        const currentIndexPage = index - (numberPages / 2);

        let now = moment();
        if (currentIndexPage !== 0) {
            now = now.add(currentIndexPage * 7, 'days');
        }

        console.log('\x1b[33m', 'Renderizou a página do dia: ' + now.format("DD/MM/YYYY"), '\x1b[0m');
        
        return (
            <AgendaWeek style={{ width, height }} now={now}/>
        )
    }

    _onScrollEnd(e) {
        const contentOffset = e.nativeEvent.contentOffset
        const viewSize = e.nativeEvent.layoutMeasurement
        // Divide the horizontal offset by the width of the view to see which page is visible
        const pageNum = Math.floor(contentOffset.x / viewSize.width);

        const currentIndexPage = pageNum - (numberPages / 2);

        console.log('\n\n\n\n');
        // console.log('Terminou de renderizar a pagina::::: ', currentIndexPage);
        // console.log('================================================= ');
    }

    render() {
        return <InfiniteViewPager 
            renderPage={this._renderPage}
            numberPages={numberPages} 
            onScrollEnd={this._onScrollEnd}
            />
    }
}