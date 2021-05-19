import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const origins = [
    {
        value: 'Earth'
    },
    {
        value: 'Jupiter'
    },
];

const destinations = [
    {
        value: 'Mars'
    },
    {
        value: 'Mercury'
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            // width: '25ch'
        }
    },
}));

export default function Searchbar({ onSearch }) {
    const classes = useStyles();
    const [origin, setOrigin] = useState(origins[0].value);
    const [destination, setDestination] = useState(destinations[0].value);


    const handleOriginChange = (event) => {
        setOrigin(event.target.value);
        
    };

    const handleDestinationChange = (event) => {
        setDestination(event.target.value);
    };

    const handleSearch = () => {
        onSearch(origin)
        console.log(origin)
    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <div>
                
                <TextField
                    id="standard-select-origin"
                    select
                    value={origin}
                    onChange={handleOriginChange}
                    helperText="Please select your origin"
                >
                    {origins.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    id="standard-select-destination"
                    select
                    value={destination}
                    onChange={handleDestinationChange}
                    helperText="Please select your destination"
                >
                    {destinations.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField>
                
            </div>
            <Button onClick={handleSearch} variant="contained" color="primary">
                Search
            </Button>
        </form>
    );
}
