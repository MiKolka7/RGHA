// Core
import React, { Component } from 'react';

// Instruments
import { MuiThemeProvider } from 'material-ui/styles';
import Styles from './styles.scss';
import { Tab, Tabs } from 'material-ui/Tabs/index';
// import Cather from '../../components/Cather';

export default class App extends Component {

    constructor () {
        super();

        this.handleChange = ::this._handleChange;
    }

    state = {
        pageName: 'Projects'
    }

    _handleChange (pageName) {
        this.setState(() => ({ pageName }));
    }

    render () {
        return (
            <MuiThemeProvider>
                <Tabs
                    value = { this.state.pageName }
                    onChange = { this.handleChange }>
                    <Tab label = 'Projects' value = 'Projects'>
                        <div>
                            <h2 className = { Styles.headLine }>Controllable Tab A</h2>
                            <p>
                                Tabs are also controllable if you want to programmatically pass them their values.
                                This allows for more functionality in Tabs such as not
                                having any Tab selected or assigning them different values.
                            </p>
                        </div>
                    </Tab>
                    <Tab label = 'NewProject' value = 'NewProject'>
                        <div>
                            <h2 className = { Styles.headLine }>Controllable Tab B</h2>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                            </p>
                        </div>
                    </Tab>
                </Tabs>
                { /*<Cather/>*/ }
            </MuiThemeProvider>
        );
    }
}
