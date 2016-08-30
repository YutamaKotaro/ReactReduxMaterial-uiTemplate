import React from 'react';
import ReactDom from 'react-dom';
import Root from './Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <Root />
    </MuiThemeProvider>
);

ReactDom.render(
    <App />,
    document.getElementById('content')
  );
