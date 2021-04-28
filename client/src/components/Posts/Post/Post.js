import React from 'react';
import { Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Posts from '../Posts';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
});

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
    return (
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
                <TableCell align="right"></TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow key={post.name}>
                <TableCell align="right">{post.title}</TableCell>
                <TableCell align="right">{post.author}</TableCell>
                <TableCell align="right">{post.year}</TableCell>
                <TableCell align="right">{post.sepractice}</TableCell>
                <TableCell align="right">{post.claim}</TableCell>
                <TableCell align="right">{post.evidencestrength}</TableCell>
                <TableCell>
                    <Button style={{color: "blue"}} size="small" onClick={() => setCurrentId(post._id)}>
                        <MoreHorizIcon fontSize="default"/>
                        Edit
                    </Button>
                    <p></p>
                    <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small"/>
                        Delete
                    </Button>
                    <p></p>
                </TableCell>
                </TableRow>
            </TableBody>
        </Table>
        </TableContainer>
    );
};

export default Post;