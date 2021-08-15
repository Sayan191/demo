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
                                      Longest item at the front - FIFO implementation
                                      "Enqueue" and "Dequeue" to the adding to the rear and removing the front
                                      "Push" and "pop" refers to the queue.
                                   </span>
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
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px"}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Has a root, branches and leaves
                                        Root at the top, leaves at the bottom.
                                        Children of one node are independent of children of another.
                                        Each leaf node is unique.
                                        File systems are structured as a tree.
                                        Consists of a set of nodes and edges that connect pairs of nodes.
                                        Trees that have a max of two children are referred to as a binary tree.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Tree implementation (Node to Node reference)</i>
                              </Typography>
                              <Codes_Ref name={"bst"} lang={"python"}/>
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
                                <blockquote>Preorder Traversal of Binary Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>We visit the root node first, before a recursive preorder traversal of the left subtree followed by the same for the right subtree
                                        Base case to check if tree exists
                                        If parameter is None, then the function returns without taking any action
                                        This can be implemented as a method of the BinaryTree class - Must check for the existence of the left and the right children before making the recursive call to preorder </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Preorder Traversal implementation</i>
                              </Typography>
                              <Codes_Ref name={"PreTree"} lang={"python"}/>
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
                                <blockquote>Inorder Traversal of Binary Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>In inorder traversal we visit the left subtree, followed by the root and finally the right subtree
                                        Notice that in all three of the traversal functions we are simply changing the position of the print
                                        statement with respect to the two recursive function calls</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Inorder Traversal implementation</i>
                              </Typography>
                              <Codes_Ref name={"inTree"} lang={"python"}/>
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
                                <blockquote>Postorder Traversal of Binary Tree</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Nearly identical to preorder except that we move the call to print to the end
                                  Postorder traversal is used to delete the tree. 
                                  Postorder traversal is also useful to get the postfix expression of an expression tree. 
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Postorder Traversal</i>
                              </Typography>
                              <Codes_Ref name={"postTree"} lang={"python"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>  
                  <div style={{ height: "fit-content", width:"auto", marginTop:"10px",}} className="container valign-wrapper">
                      <div className="col s12">
                        <Card className={useStyles.root}>
                          <CardActionArea>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="h2">
                                <blockquote>Binary Heaps</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>One important variation of a queue is called a Priority Queue
                                    A priority queue acts like a queue in that you dequeue an item by removing it from the front
                                    However, the logical order of items inside a queue is determined by their priority
                                    The classic way to implement this is using a Binary Heap
                                    Binary heap allows us both enqueue and dequeue items in O(log n) time!
                                  </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Doubly Linked Lists implementation</i>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p" style={{marginBottom:"5px"}}>
                                <span>
                                  to make the heap work efficiently, we use logarithmic nature of binary tree<br/>
                                  must keep the tree balanced - we do this by creating a complete binary tree - if we know it is a complete list, we can find the parent/child relationship 2p and 2p+1 - we can use this to make an efficient implementation of the tree - index 0 is set as 0 and then that math operation works<br/>
                                  heap will init with one element 0, but the current size will be 0<br/>
                                  most efficient way is to append to the list - likely violate the heap structure property by comparing with the parent - if new item is less than parent, we can swap the parent and child and repeat!<br/>
                                </span>
                              </Typography>
                              <Codes_Ref name={"BinaryHeap"} lang={"python"}/>
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
                                <blockquote>Binary Search</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>If the list is ordered, we can do a binary search!
                                      This item starts from the middle.
                                      If the item is greater, we know the entire lower half of the list can be ignore.
                                      Then, we can repeat the process with the upper half.
                                      So it uses Divide and Conquer - divide to smaller pieces, solve the smaller pieces and then repeat.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Binary Search (recursive) implementation</i>
                              </Typography>
                              <Codes_Ref name={"BinarySearch"} lang={"python"}/>
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
                                <blockquote>Hash Table </blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Hash maps are indexed data structures.
                                     A hash map makes use of a hash function to compute an index with a key into an array of buckets or slots.
                                     Its value is mapped to the bucket with the corresponding index. The key is unique and immutable. </span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Hash Table implementation</i>
                              </Typography>
                              <Codes_Ref name={"HashTable"} lang={"python"}/>
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

