import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ToastAndroid } from 'react-native';

export default class DayTime extends React.Component {

    constructor(props) {
        super(props);
    }

    onPress = () => {
        ToastAndroid.show(`Dia: ${this.props.day.date} Hora: ${this.props.time}`, ToastAndroid.SHORT);
    }

    render() {
        return (
                <TouchableOpacity
                    style={[this.props.style, styles.container]}
                    onPress={this.onPress}>
                    
                </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});