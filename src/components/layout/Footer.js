import React, { Component } from "react";
import { Link,Redirect } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import "../layout/css/Footer.css"

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          AlgoForGeeks
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    main: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(2),
    },
    footer: {
      padding: theme.spacing(3, 2),
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
  }));

  
const Footer = () =>{
    const classes = useStyles();
    return(
        <>
            <footer className={classes.footer}>
                <hr/>
                <Container maxWidth="sm">
                <Typography variant="body1">AlgoForGeeks || For Programmers || By Developers</Typography>
                <Copyright />
                </Container>
            </footer>
        </>
    )
}
export default Footer