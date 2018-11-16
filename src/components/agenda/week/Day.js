import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class Day extends React.Component {

    constructor(props) {
        super(props);
    }

    onPress = () => {
        console.log(" Dia: ", this.props.day, " Hora:", this.props.time);
    }

    render() {
        return (
                <TouchableOpacity
                    style={[this.props.style, styles.container]}
                    onPress={this.onPress}>
                    <Text>{this.props.day.number}</Text>
                </TouchableOpacity>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});