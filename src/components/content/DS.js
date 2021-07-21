import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

class DS extends Component{
    render(){
        return(
            <div style={{marginTop:"60px"}}>
                <hr/>
                <Typography variant="h5" style={{marginTop:"15px" , marginLeft:"35px"}}>
                    <b>Today's Topics</b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" style={{marginTop:"10px" , marginLeft:"35px"}}>
                    <b>This page contains detailed articles on different data structures.</b>
                </Typography>
                <div style={{ height: "60vh", width:"100%"}} className="container valign-wrapper">
                    <div className="col s6" style={{width:"300px",margin:"30px"}}>
                        <Card className={useStyles.root}>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <blockquote>Array </blockquote>
                              <blockquote>LinkedList</blockquote>
                              <blockquote>Stack</blockquote>
                              <blockquote>Queue</blockquote>

                            </Typography>
                          </CardContent>
                        </Card>
                    </div>
                    <div className="col s6" style={{width:"300px",margin:"30px"}}>
                        <Card className={useStyles.root}>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <blockquote>Binary Tree</blockquote>
                              <blockquote>Binary Search Tree</blockquote>
                              <blockquote>Heap</blockquote>
                              <blockquote>Hashing</blockquote>
                            </Typography>
                          </CardContent>
                        </Card>
                    </div>
                    <div className="col s6"  style={{width:"300px",margin:"30px"}}>
                        <Card className={useStyles.root}>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              <blockquote>Graph</blockquote>
                              <blockquote>Matrix</blockquote>
                              <blockquote>Misc</blockquote>
                            </Typography>
                          </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

export default DS;



