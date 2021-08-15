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

class Java_CFW extends Component{
    render(){
        return(
          <>
              <div>
                  <h4 className="center" style={{marginTop:"60px"}}>
                    <b>Java Collections Framework</b>
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
                                <blockquote>ArrayList</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>ArrayList is a part of collection framework and is present in java.util package. It provides us with dynamic arrays in Java. Though, it may be slower than standard arrays but can be helpful in programs where lots of manipulation in the array is needed. This class is found in java.util package.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>ArrayList implementation</i>
                              </Typography>
                              <Codes_Ref name={"ArrayList"} lang={"java"}/>
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
                                <blockquote>Vector</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Vector implements a dynamic array that means it can grow or shrink as required. Like an array, it contains components that can be accessed using an integer index.
                                        They are very similar to ArrayList but Vector is synchronized and has some legacy method that the collection framework does not contain.
                                        It also maintains an insertion order like an ArrayList but it is rarely used in a non-thread environment as it is synchronized and due to which it gives a poor performance in adding, searching, delete and update of its elements.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Vector implementation</i>
                              </Typography>
                              <Codes_Ref name={"Vector"} lang={"java"}/>
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
                                <blockquote>LinkedList</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>Linked List is a part of the Collection framework present in java.util package. This class is an implementation of the LinkedList data structure which is a linear data structure where the elements are not stored in contiguous locations and every element is a separate object with a data part and address part. The elements are linked using pointers and addresses. Each element is known as a node. Due to the dynamicity and ease of insertions and deletions, they are preferred over the arrays. It also has few disadvantages like the nodes cannot be accessed directly instead we need to start from the head and follow through the link to reach to a node we wish to access.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>LinkedList implementation</i>
                              </Typography>
                              <Codes_Ref name={"LinkedListCF"} lang={"java"}/>
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
                                <blockquote>HashSet</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>The HashSet class implements the Set interface, backed by a hash table which is actually a HashMap instance. No guarantee is made as to the iteration order of the set which means that the class does not guarantee the constant order of elements over time. This class permits the null element. The class also offers constant time performance for the basic operations like add, remove, contains, and size assuming the hash function disperses the elements properly among the buckets.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>HashSet implementation</i>
                              </Typography>
                              <Codes_Ref name={"HashSet"} lang={"java"}/>
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
                                <blockquote>HashMap</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>HashMap is a part of Java’s collection since Java 1.2. This class is found in java.util package. It provides the basic implementation of the Map interface of Java. It stores the data in (Key, Value) pairs, and you can access them by an index of another type (e.g. an Integer). One object is used as a key (index) to another object (value). If you try to insert the duplicate key, it will replace the element of the corresponding key.
                                        HashMap is similar to HashTable, but it is unsynchronized. It allows to store the null keys as well, but there should be only one null key object and there can be any number of null values.  This class makes no guarantees as to the order of the map. To use this class and its methods, you need to import java.util.HashMap package or its superclass.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>HashMap implementation</i>
                              </Typography>
                              <Codes_Ref name={"HashMap"} lang={"java"}/>
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
                                <blockquote>Iterator</blockquote>
                              </Typography>
                              <Typography variant="body2" color="textSecondary" component="p">
                                  <span>It is a universal iterator as we can apply it to any Collection object. By using Iterator, we can perform both read and remove operations. It is an improved version of Enumeration with the additional functionality of remove-ability of an element.
                                        Iterator must be used whenever we want to enumerate elements in all Collection framework implemented interfaces like Set, List, Queue, Deque, and also in all implemented classes of Map interface. Iterator is the only cursor available for the entire collection framework.
                                        Iterator object can be created by calling iterator() method present in Collection interface.</span>
                              </Typography>
                              <Typography gutterBottom variant="h5" component="h2" style={{marginTop:"15px" }}>
                                <i>Iterator implementation</i>
                              </Typography>
                              <Codes_Ref name={"Iterator"} lang={"java"}/>
                            </CardContent>
                          </CardActionArea>
                        </Card>
                      </div>
                  </div>
              </div>
            </>
        )}
}

export default Java_CFW;

