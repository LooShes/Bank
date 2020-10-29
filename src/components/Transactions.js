import React, { Component } from 'react';
import Transaction from './Transaction'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

class Transactions extends Component { 
    useStyles = ((theme) => ({
        root: {
          flexGrow: 1,
        },
        paper: {
          height: 140,
          width: 100,
        },
        control: {
          padding: theme.spacing(2),
        },
      }))

    render() {
        return (
            <Grid container spacing={5}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={5}>
                {this.props.data.map((t) => (
                  <Grid key={t} item>
                    <Paper /><Transaction transaction={t} onClick={this.props.onClick} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            </Grid>
        )
    }
}

export default Transactions;