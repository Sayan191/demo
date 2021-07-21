import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {} from "../../assets/1.jpg";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

class Dashboard extends Component {

render() {
    const { user } = this.props.auth;
return (
      <div>
        <h4 className="center" style={{marginTop:"60px"}}>
          <b>Hey there,</b> {user.name.split(" ")[0]}
        </h4>
        <Typography variant="h3" style={{marginTop:"15px" , marginLeft:"35px"}}>
          <b>Today's Topics</b>
        </Typography>
        <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
            <div className="col s6">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Two Pointer Algorithm
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read
                  </Button>
                </CardActions>
              </Card>
            </div>
            
            
            <div classname="col s6 ">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Two Pointer Algorithm
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read
                  </Button>
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
                      Two Pointer Algorithm
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read
                  </Button>
                </CardActions>
              </Card>
            </div>
            
            
            <div classname="col s6 ">
              <Card className={useStyles.root}>
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Two Pointer Algorithm
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Two pointers is really an easy and effective technique which is typically used for searching pairs in a sorted array.
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                  <Button size="small" color="primary">
                    Read
                  </Button>
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



