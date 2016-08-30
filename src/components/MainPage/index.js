import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { COLORS, SUB_PAGE_PATH } from '../../constants';
import { browserHistory } from 'react-router';

const style = {
    margin: 5,
};

export default class MainPage extends Component {
    render() {
        return (
            <div>
              fefe
                <RaisedButton label="Secondary" secondary style={style} />
                <RaisedButton
                  label="Secondary"
                  backgroundColor={COLORS.BLACK}
                  labelColor={COLORS.WHITE}
                  style={style}
                  onTouchTap={() => { browserHistory.push(SUB_PAGE_PATH); }}
                />
            </div>
        );
    }
}
