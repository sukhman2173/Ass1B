import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className = {classes.container} container>
                <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Author(s)</TableCell>
                            <TableCell>Year</TableCell>
                            <TableCell>SE Practice</TableCell>
                            <TableCell>Claim</TableCell>
                            <TableCell>Evidence Strength</TableCell>
                        </TableRow>
                    </TableHead>
                {posts.map((post) => (
                    <TableBody key={post._id} item xs={12} sm={12}>
                            <Post post={post} setCurrentId={setCurrentId} />
                    </TableBody>
                ))}
                </Table>
                </TableContainer>
            </Grid>
        )
    );
};

export default Posts;