import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@material-ui/core';
import { style } from '@material-ui/system';

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
    Button: {
        backgroundColor: '#white',
        color: 'black',
        padding: '5px 35px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        borderRadius: '10px',
        border: '1px solid #646464'
    },
}));

const Posts = (props) => {
    const { posts } = props;
    const classes = useStyles();
    if (!posts || posts.length === 0) return <p>No se ecuentran posts, lo sentimos</p>;
    return (
        <React.Fragment>
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end"> 
                    {posts.map((post) => {
                        return (                        
                            <Grid item key={post.id} xs={12} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image={post.imagen}
                                        title={post.title}/>
                                    <CardContent className={classes.cardContent}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="h2"
                                            className={classes.postTitle}>
                                            {post.titulo.substr(0, 50)}...    
                                        </Typography>
                                        <div className={classes.postText}>
                                            <Typography
                                                component="p"
                                                color="textPrimary">
                                            </Typography>
                                            <Typography variant="p" color="textSecondary">
                                                {post.descripcion.substr(0, 60)}...
                                            </Typography>
                                            <Typography variant="p" color="textSecondary">
                                                {post.fecha_creacion}
                                            </Typography>
                                        </div>
                                        <a className={classes.Button} href={`/posts/${post.id}`} >
                                                Go
                                        </a>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Container>
        </React.Fragment>
    );
};
export default Posts;