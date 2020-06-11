import React, { Component } from 'react'
import { StyleSheet, Picker } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'


export default class Search extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    state = {
        currency: ''
    }


    loadUsers = () => {
        fetch("http://192.168.100.4:8000/api/states")
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res || []
                })
            })
    }

    componentDidMount() {
        this.loadUsers();
    }

    render() {
        //console.log(this.state.data)
        var options = this.state.data;
        var lanner = Teste(this.state.currency);
        console.log(lanner);
        return (
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#a53692', '#552e5c']} style={styles.container}>
                <Picker selectedValue={this.state.currency} style={styles.pickerComponet} onValueChange={(itemValue, itemIndex) => this.setState({ currency: itemValue })}>
                    < Picker.Item label="inicio" value="1" />
                    {options.map((item, index) => {
                        return (< Picker.Item label={item.name} value={item.id} key={item.id} />);
                    })}
                </Picker>
            </LinearGradient>
        )
    }
}

function Teste(piker) {
    if (piker != 1) {
        return 'assssfundo'
    } else {
        return 'não funfo'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
    },
    pickerComponet: {
        width: 350,

    }
})