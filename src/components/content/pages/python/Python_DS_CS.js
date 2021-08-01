import React ,{Component}from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Queue</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Ordered collection of items where items addition happens at the end "rear".
                                        Removal happens from the "front".
                                        Longest item at the front - FIFO implementation</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Queue implementation</i>
                              </Typography>
                              <Codes_Ref name={"queue"} lang={"python"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Deque</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A deque is a double-ended queue.
                                        Also has a front and an end and the items are position within the collection.
                                        Unrestrictive nature for adding items - add to front OR rear.
                                        Does not require LIFO/FIFO enforced data structure design.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Deque implementation</i>
                              </Typography>
                              <Codes_Ref name={"deque"} lang={"python"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Single Linked List</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Singly Linked List is a collection of nodes that form a linear sequence.
                                        Each node stores a reference to the next node.
                                        The first and last node of the list are known as the "head" and the "tail" of the list.
                                        O(k) time to access elements.
                                        Constant time insertions and deletions in any position, arrays require O(n) time.
                                        Linked Lists can expand without having to specify their size ahead of time!</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Single Linked List implementation</i>
                              </Typography>
                              <Codes_Ref name={"sll"} lang={"python"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Doubly Linked Lists</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>next and prev for references to nodes that are both next and what precedes it.
                                        "dummy" nodes are known as the header sentinel and trailer sentinel for both the beginning and end of a list respectively.
                                        Each insertion happens between a pair of existing nodes - eg. Add between header and what is after to add to the front.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Doubly Linked Lists implementation</i>
                              </Typography>
                              <Codes_Ref name={"dll"} lang={"python"}/>
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

