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
            <Grow in>
            <Container>
                <Grid item xs={12} sm={12}>
                <div>Search Filters</div>
                <select>
                    <option selected value="tdd">TDD</option>
                    <option value="continuousIntegration">Continous Integration</option>
                    <option value="refactoring">Refactoring</option>
                    <option value="unitTesting">Unit Testing</option>
                    <option value="autoAcceptanceTest">Automatic Acceptance Tests</option>
                    <option value="continuousDeployment">Continuous Deployment</option>
                    <option value="chaosEngineering">Chaos Engineering</option>
                </select>
                <select>
                    <option selected value="c1">Claim 1</option>
                    <option value="c2">Claim 2</option>
                    <option value="c3">Claim 3</option>
                    <option value="c4">Claim 4</option>
                </select>
                <button onclick="">Search</button>
                </Grid>
            </Container>
            </Grow>
                <Container>
                    <Grid className={classes.mainContainer} container justify="space-between" alignItems="stretch" spacing={3}>
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
        </Container>
    )
}

export default App;