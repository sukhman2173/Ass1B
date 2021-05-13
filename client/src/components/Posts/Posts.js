import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
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

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Author(s)</TableCell>
                <TableCell align="right">Year</TableCell>
                <TableCell align="right">SE Practice</TableCell>
                <TableCell align="right">Claim</TableCell>
                <TableCell align="right">Evidence Strength</TableCell>
            </TableRow>
            </TableHead>
                {posts.map((post) => (
                     <TableBody>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </TableBody>
                ))}
            </Table>
            </TableContainer>
        )
    );
};

export default Posts;