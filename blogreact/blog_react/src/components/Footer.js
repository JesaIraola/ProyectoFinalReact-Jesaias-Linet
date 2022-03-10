import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, Link, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    footer:{
        borderTop: `1px solid ${theme.palette.divider}`,
        marginTop: theme.spacing(8),
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
            paddingTop: theme.spacing(6),
            paddingBottom: theme.spacing(6),
        },
    },

}));

function Copyright(){
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const footers = [
    {
        title: 'Compañía',
        description: ['Equipo', 'Historia', 'Contáctenos', 'Ubicaciones'],
    },
    {
        title: 'Características',
        description: [
            'Cosas interesantes',
            'Función aleatoria',
            'Función de equipo',
            'Cosas de desarrollador',
            'Otro',
        ],
    },
    {
        title:'Recursos',
        description:[
            'Recurso',
            'Recurso de nombres',
            'Otro recurso',
            'Recurso final',
        ],
    },
    {
        title: 'Legal',
        description:['Política de privacidad', 'Términos de uso'],
    },
];

function Footer() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Container maxWidth="md" components="footer" className={classes.footer}>
                <Grid container spacing={4} justify="space-evenly">
                    {footers.map((footer) =>(
                        <Grid item xs={6} sm={3} key={footer.title}>
                            <Typography variant="h6" color="textPrimary" gutterBottom>
                                {footer.title}
                            </Typography>
                            <ul>
                                {footer.description.map((item) =>(
                                    <li key={item}>
                                        <Link href="#" variant="subtitle1" color="textSecondary">
                                            {item}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Grid>
                    ))}
                </Grid>
                <Box mt={5}>
                    <Copyright/>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Footer;