import { store } from './MelpStore';
import React, { Fragment } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { inject, observer, Provider } from 'mobx-react';

@inject('store')
@observer
class App extends React.Component {
    render() {
        const { store } = this.props;
        return (
            <Fragment>
                <Header />

                <Grid container>
                    <Grid item xs={12}>
                        <Paper elevation={2} style={{ padding: '1rem' }}>

                        </Paper>
                    </Grid>
                </Grid>
            </Fragment>
        );
    }

    updateSearchText = event => {
        this.props.store.setTerm(event.target.value);
    };
}

function Header() {
    return (
        <Typography
            variant="title"
            color="inherit"
            style={{ marginBottom: 20, textAlign: 'center' }}
        >
            Melp
        </Typography>
    );
}

export function Melp() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}