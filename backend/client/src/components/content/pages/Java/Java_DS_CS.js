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

class Java_DS_CS extends Component{
    render(){
        return(
          <>
              <div>
                  <h4 className="center" style={{marginTop:"60px"}}>
                    <b>Java  Data Structure And Algorithm CheatSheet</b>
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
                                <blockquote>Arrays</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>An array is a group of like-typed variables that are referred to by a common name. Arrays in Java work differently than they do in C/C++.
                                  In Java all arrays are dynamically allocated.Array can contain primitives (int, char, etc.) as well as object (or non-primitive) references of a class depending on the definition of the array. In case of primitive data types, the actual values are stored in contiguous memory locations. In case of objects of a class, the actual objects are stored in heap segment.
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Array implementation</i>
                              </Typography>
                              <Codes_Ref name={"Arrays"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Linked List</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A linked list consists of nodes where each node contains a data field and a reference(link) to the next node in the list.Like arrays, Linked List is a linear data structure. Unlike arrays, linked list elements are not stored at a contiguous location;
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Linked List implementation</i>
                              </Typography>
                              <Codes_Ref name={"LinkedList"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Stack</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).
                                  There are many real-life examples of a stack. Consider an example of plates stacked over one another in the canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO(Last In First Out)/FILO(First In Last Out) order.
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Stack implementation</i>
                              </Typography>
                              <Codes_Ref name={"Stack"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Queue</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A Queue is a linear structure which follows a particular order in which the operations are performed. The order is First In First Out (FIFO). A good example of a queue is any queue of consumers for a resource where the consumer that came first is served first. The difference between stacks and queues is in removing. In a stack we remove the item the most recently added; in a queue, we remove the item the least recently added.
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>1. Queue using Array</i>
                              </Typography>
                              <Codes_Ref name={"QueueArray"} lang={"java"}/>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>2. Queue using Linked List</i>
                              </Typography>
                              <Codes_Ref name={"QueueLL"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Binary Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A tree whose elements have at most 2 children is called a binary tree. Since each element in a binary tree can have only 2 children, we typically name them the left and right child.A Binary Tree node contains following parts.
                                        1. Data,
                                          2. Pointer to left child and
                                          3. Pointer to right child</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Binary Tree implementation</i>
                              </Typography>
                              <Codes_Ref name={"BinaryTree"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Binary Search Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A binary search tree, also called an ordered or sorted binary tree, is a rooted binary tree data structure whose internal nodes each store a key greater than all the keys in the node's left subtree and less than those in its right subtree.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Binary Search Tree implementation</i>
                              </Typography>
                              <Codes_Ref name={"BST"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Heap</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A Heap is a special Tree-based data structure in which the tree is a complete binary tree. 
                                    The Heap differs from a Binary Search Tree. The BST is an ordered data structure, however, the Heap is not. In computer memory, the heap is usually represented as an array of numbers. </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Heap implementation</i>
                              </Typography>
                              <Codes_Ref name={"Heap"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
                  <div style={{ height: "fit-content", width:"auto"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Graph</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>A Graph is a non-linear data structure consisting of nodes and edges. The nodes are sometimes also referred to as vertices and the edges are lines or arcs that connect any two nodes in the graph. More formally a Graph can be defined as,
                                        A Graph consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Graph implementation</i>
                              </Typography>
                              <Codes_Ref name={"Graph"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
              </div>
          </>
        )}
}

export default Java_DS_CS;

