import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { COLORS } from '../../constants';

const style = {
    margin: 5,
};

export default class MainPage extends Component {
    render() {
        return (
            <div>
                <RaisedButton label="Default" style={style} />
                <RaisedButton label="Primary" primary style={style} />
                <RaisedButton label="Secondary" secondary style={style} />
                <RaisedButton
                  label="Secondary"
                  backgroundColor={COLORS.BLACK}
                  labelColor={COLORS.WHITE}
                  style={style}
                />
            </div>
        );
    }
}
