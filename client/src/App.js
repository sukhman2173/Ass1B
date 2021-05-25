import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import SEEDS from './images/SEEDS.png';
import Logo from './images/SEEDS_Logo.png';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <img className={classes.image} src={Logo} alt="SEEDS" height="70" />
                <Typography className = {classes.heading} variant="h4" align="center">SEEDS</Typography>
            </AppBar>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={6}>
                    <Grow in>
                        <Grid item xs={12} sm={12}>
                            <Posts setCurrentId={setCurrentId} />
                        </Grid>
                        </Grow>
                        <Grow out>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId} />
                        </Grid>
                        </Grow>
                    </Grid>
        </Container>
    )
}

export default App;