import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
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

function onSubmit(e){
  /*e.preventDefault();
  let val =target.value;
  navigator.clipboard.writeText(val);
  window.alert("Copied");*/
}

class Dashboard extends Component {
render() {
    const { user } = this.props.auth;
return (
      <div>
        <h4 className="center" style={{marginTop:"60px"}}>
          <b>Hey there,</b> {user.name.split(" ")[0]}
        </h4>
        <Typography variant="h3" style={{marginTop:"15px" , marginLeft:"35px"}}>
          <b>Let's get started</b>
        </Typography>
        <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
            <div className="col s6">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>Java Data Structures and Algorithms Cheat Sheet</blockquote>
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

        </div>
        <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
            <div className="col s6">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>C++ Data Structures and Algorithms Cheat Sheet</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A sheet with all the concepts you need for quick revision on implementation of data strtuctures and algorithms using C++.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/C++/Cpp_DS_CS" class="btn" size="small" color="primary">
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
                     <blockquote>C++ Standard Template Library (STL)</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    The Standard Template Library (STL) is a set of C++ template classes. It is a library of container classes, algorithms, and iterators.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/C++/Cpp_STL" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>

        </div>
        <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
            <div className="col s6">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      <blockquote>Python Essetials and Fundamentals Cheat Sheet</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A sheet with all the concepts you need for quick revision on implementationof  all essential built-in functions in Python.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/python/python_essentials" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>
            
            
            <div classname="col s6" >
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                     <blockquote>Python Data Structures and Algorithms</blockquote>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    A sheet with all the concepts you need for quick revision on implementation of data strtuctures and algorithms using Python.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" onClick={() =>  navigator.clipboard.writeText('#')} >
                    Copy Link
                  </Button>
                  <Link to="/content/python/Python_DS_CS" class="btn" size="small" color="primary">
                    Read
                  </Link>
                </CardActions>
              </Card>
            </div>

        </div>

      </div>
    );
  }
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
)(Dashboard);

