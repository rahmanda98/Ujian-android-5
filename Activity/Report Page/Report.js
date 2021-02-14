import React, { Component } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';

class Report extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            reporttype: []
        }
    }
    render() {
        return (
            <DropDownPicker  
            items={[
                {label: 'Attempted Murder',value: 'attempted murder' , hidden: true},
                {label: 'Robbery', value: 'robbery'},
                {label: 'Arson', value: 'arson'},
                {label: 'Homicide', value: 'homicide'}
            ]}
            defaultValue={this.state.reporttype}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={item => this.setState({
                reporttype: item.value
            })}
            >
            </DropDownPicker>
        );
    }
}

export default Report;