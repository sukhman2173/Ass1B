import React, { useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({title: '', author: '', year:'', sepractice: '', claim: '', evidencestrength: ''});
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id == currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post])
    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
            
        } else {
            dispatch(createPost(postData));
        }

        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({title: '', author: '', year:'', sepractice: '', claim: '', evidencestrength: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating' } a Research Article</Typography>
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title}onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
                <TextField name="author" variant="outlined" label="Author" fullWidth value={postData.author}onChange={(e) => setPostData({ ...postData, author: e.target.value })}/>
                <TextField name="year" variant="outlined" label="Year" fullWidth value={postData.year}onChange={(e) => setPostData({ ...postData, year: e.target.value })}/>
                <TextField name="sepractice" variant="outlined" label="SE Practice" fullWidth value={postData.sepractice}onChange={(e) => setPostData({ ...postData, sepractice: e.target.value })}/>
                <TextField name="claim" variant="outlined" label="Claim" fullWidth value={postData.claim}onChange={(e) => setPostData({ ...postData, claim: e.target.value })}/>
                <TextField name="evidencestrength" variant="outlined" label="Strength of Evidence" fullWidth value={postData.evidencestrength}onChange={(e) => setPostData({ ...postData, evidencestrength: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;