import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import { DataGrid } from '@material-ui/data-grid';
import Post from './Post/Post';
import useStyles from './styles';

const columns = [
    { field: 'title', headerName: 'Title', width: 400},
    { field: 'author', headerName: 'Author(s)', width: 200 },
    { field: 'year', headerName: 'Year', width: 100},
    { field: 'sepractice', headerName: 'SE Practice', width: 127},
    { field: 'claim', headerName: 'Claim', width: 180},
    { field: 'evidencestrength', headerName: 'Strength of Evidence', width: 190},
];

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    var id = 0;
    const rows = 
    posts.map((post) => (
        { id: id++, title: post.title, author: post.author, year: post.year, 
        sepractice: post.sepractice, claim: post.claim, evidencestrength: post.evidencestrength}
    ));

    return (
        !posts.length ? <CircularProgress /> : (
            <div style={{ height: 650, width: '100%', backgroundColor: 'white'}}>
            <DataGrid rows={rows} columns={columns} pageSize={10}/> 
            </div>
        )
    );
};

export default Posts;