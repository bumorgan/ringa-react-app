import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import HomePage from './views/HomePage/HomePage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import ringa_theme from './config/_theme';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <MuiThemeProvider theme={ringa_theme}>
                <AppBar position='fixed'>
                    <Toolbar>
                        <Typography variant="title" color="secondary" className={classes.flex}>
                            Ringa React App
                        </Typography>
                    </Toolbar>
                </AppBar>
                <HomePage />
            </MuiThemeProvider>
        );
    }
}    

App.propTypes = {
    classes: PropTypes.object.isRequired,
};
      
export default withStyles(styles)(App);
