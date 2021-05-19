import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        margin: '10px'
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function OutlinedCard({ flight, items }) {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Cosmos Flight
        </Typography>
                <Typography variant="h5" component="h2">
                    Earth → Mars
        </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Company
        </Typography>
                <Typography variant="body2" component="p">
                    Price: {flight.id}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" variant="contained">Book</Button>
            </CardActions>
        </Card>
    );
}
