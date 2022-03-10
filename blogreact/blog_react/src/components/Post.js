import React, {useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { Container, Typography, Grid, Card, CardMedia, CardContent,
    CardActions, CardHeader, Collapse, Avatar, IconButton, FavoriteIcon,
    ShareIcon, ExpandMoreIcon, MoreVertIcon} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'light'
                ? theme.palette.grey[200]
                : theme.palette.grey[700],
    },
    postTitle: {
        fontSize: '16px',
        textAlign: 'left',
    },
    postText: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'baseline',
        fontSize: '12px',
        textAlign: 'left',
        marginBottom: theme.spacing(2),
    },
}));

const Post = (props) => {
    const classes = useStyles();
    let params = useParams();
    const [appState, setAppState] = useState({
        post: null,
        autor: null,
      });
      
    useEffect(() => {
        setAppState({ post: null });
        const apiUrl = `http://127.0.0.1:8000/api/Post/${params.postId}`;
        fetch(apiUrl)
            .then((data) => data.json())
            .then((post) => {
                setAppState({post: post, autor: null });
                const apiUrl = `http://127.0.0.1:8000/api/Autor/${post.autor}`;
                fetch(apiUrl)
                .then((autorData) => autorData.json())
                .then((autor) => {
                    console.log(appState);
                    setAppState({post: post, autor: autor});
                });
            });
   
    }, [setAppState]);

   return appState.post ? (
       <React.Fragment>
           <Container component="main">
               <Grid container spacing={5} alignItems="flex-end">
                   <Grid item key={appState.post.id} xs={12}>
                        <Card >
                            <CardHeader
                                avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    {appState.autor ? appState.autor.nombre.substr(0,1) : null}
                                    </Avatar>}
                            />
                            <CardMedia
                                className={classes.cardMedia}
                                image={appState.post.imagen}
                                title={appState.post.title}/>
                            <CardContent className={classes.cardContent}>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="h2">
                                    {appState.post.titulo}    
                                </Typography>
                                <div>
                                    <Typography
                                        component="p"
                                        color="textPrimary">
                                        {appState.post.slug}
                                    </Typography>
                                    <Typography variant="p" color="textSecondary">
                                        {appState.post.descripcion}
                                    </Typography>
                                    <Typography variant="p" color="textSecondary">
                                        {appState.post.contenido}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    ) : <p>CARGANDO  POST</p>;    
};

export default Post;