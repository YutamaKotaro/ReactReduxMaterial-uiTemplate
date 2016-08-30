import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

type Prop = {
    children: Node,
}
export default class Header extends Component {

    props: Prop;

    render() {
        return (
            <div>
                <AppBar title="title" />
                {this.props.children}
            </div>
        );
    }
}
