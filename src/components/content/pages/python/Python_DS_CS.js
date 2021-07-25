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
import Codes_Ref from "./Codes_Ref"

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

class Python_DS_CS extends Component{
    render(){
        return(
            <>
              <div>
                  <h4 className="center" style={{marginTop:"60px"}}>
                    <b>Python Fundamental and Essentials</b>
                  </h4>
                  <Typography variant="h3" style={{marginTop:"60px" , marginLeft:"35px"}}>
                    <b>Let's get started</b>
                  </Typography>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Stack</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A stack is a linear data structure that stores items in a Last-In/First-Out (LIFO) or First-In/Last-Out (FILO) manner. 
                                      In stack, a new element is added at one end and an element is removed from that end only. 
                                      The insert and delete operations are often called push and pop.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Stack implementation</i>
                              </Typography>
                              <Codes_Ref name={"stack"} lang={"python"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
              </div>
            </>
        )}
}

export default Python_DS_CS;

