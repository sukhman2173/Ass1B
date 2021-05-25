import React from 'react';
import { useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
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
        <div>
        {post.title}
        {post.author}
        {post.year}
        {post.sepractice}
        {post.claim}
        {post.evidencestrength}
        </div>
    );
};

export default Post;