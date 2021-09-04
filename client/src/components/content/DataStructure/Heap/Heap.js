import React ,{Component}from "react";
import { CopyBlock, dracula,monokaiSublime} from "react-code-blocks";
import {Link} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

class Heap extends Component{
  render(){
      return(
        <>
        <Typography variant="h3" style={{marginTop:"60px" , marginLeft:"35px"}}>
          <b>Let's get started</b>
        </Typography>
        <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
            <div className="col s6">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>Java Data Structures Basics</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A sheet with all the concepts you need for quick revision on implementation of data strtuctures and algorithms using Java.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/java/Java_DS_CS" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>


            <div classname="col s6 ">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>Java Collections Framework</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The Java collections framework is a set of classes and interfaces that implement commonly reusable 
                    collection data structures. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/java/Java_CFW" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>
            <div classname="col s6 ">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>Java Collections Framework</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The Java collections framework is a set of classes and interfaces that implement commonly reusable 
                    collection data structures. 
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/java/Java_CFW" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>
        </div>
      </>
    )}
}

export default Heap;