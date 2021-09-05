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

class Array extends Component{
  render(){
      return(
          <>
            <Typography variant="h3" style={{marginTop:"15px" , marginLeft:"35px"}}>
              <b>Let's get started</b>
            </Typography>
            <div style={{ height: "40vh", width:"auto"}} className="container valign-wrapper">
                <div className="col s6">
                  <Card className={useStyles.root}>
                    <CardActionArea>
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          <blockquote>Reverse an Array</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Basic.
                          Write a program to reverse an array.                                    
                          Given an array the task is to reverse the array.                                      
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
                          <blockquote>Max. and Min. of an array</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy.
                        Write a program to return the minimum and maximum element in an array. 
                        Your program should make the minimum number of comparisons. 
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
                          <blockquote>Kth Max. and Min. of an array</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                        Given an array, the task is to find the Kth smallest element in the given array. 
                        It is given that all array elements are distinct. 
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
                          <blockquote>Sort an array of 0s, 1s and 2s </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Easy.
                        Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
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
                          <blockquote>Move negative elements to one side</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy
                        An array contains both positive and negative numbers in random order. 
                        Rearrange the array elements.
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
                          <blockquote>Union and Intersection</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Basic
                        Given two arrays a[] and b[] of size n and m respectively. 
                        The task is to find union and intersection between these two arrays. 
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
                          <blockquote>Cyclically rotate an array by one</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Basic.
                          Program to cyclically rotate an array by one.
                          Given an array, rotate the array by one position in clock-wise direction.                                    
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
                          <blockquote>Kadane's Algorithm    </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium.
                        Write a program to return the minimum and maximum element in an array. 
                        Your program should make the minimum number of comparisons. 
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
                          <blockquote>Minimise the max difference between heights</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          You have to modify the height of each tower either by increasing or decreasing them by K only once. 
                          After modifying, height should be a non-negative integer.  
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
                          <blockquote>Minimum number of jumps  </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Minimum no. of Jumps to reach end of an array.
                           
                          If an element is 0, then you cannot move through that element.
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
                          <blockquote>Find the Duplicate Number</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium
                        Find duplicate in an array of N+1 Integers.
                        There is only one repeated number, return this repeated number.
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
                          <blockquote>Merger two sorted arrays</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Hard
                        Given two arrays a[] and b[] of size n and m respectively. 
                        Merge the two arrays into one sorted array in non-decreasing order without using any extra space. 
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
                          <blockquote>Merge Intervals </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Medium.
                          Merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.                                      
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
                          <blockquote> Next Permutation</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium.
                        Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
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
                          <blockquote>Count Inversions </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          For an array, inversion count indicates how far (or close) the array is from being sorted. 
                          If array is already sorted then the inversion count is 0. 
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
                          <blockquote>Best time to buy and Sell stock </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Easy.
                          Return the maximum profit you can achieve from this transaction. 
                          If you cannot achieve any profit, return 0.
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
                          <blockquote>Count pairs with given sum </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy
                        Given an find the number of pairs of elements in the array whose sum is equal to K.
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
                          <blockquote>Common elements in 3 sorted arrays</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Basic
                          Given three arrays a[],b[] and c[], sorted in increasing order. 
                          Find the elements that are common in all three arrays.
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
                          <blockquote>Rearrange array in alternating positive and negative</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Hard.
                          Given an array of positive and negative numbers, arrange them in an alternate fashion maintaining the order of appearance.                                     
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
                          <blockquote>Subarray with 0 sum     </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy.
                        Given an array of positive and negative numbers. 
                        Find if there is a subarray (of size at-least one) with 0 sum.
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
                          <blockquote>Factorials of large numbers </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Given a large number N, you have to find its factorial.
 
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
                          <blockquote>Maximum Product Subarray  </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Given an array Arr[] that contains N integers (may be positive, negative or zero). 
                          Find the product of the maximum product subarray.
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
                          <blockquote>Longest consecutive subsequence </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium
                        Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.
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
                          <blockquote>Find all elements that appear more than n/k times</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Hard
                          Given an array of size n, find all elements in array that appear more than n/k times.
                          Note that if size of array is 8 (or n = 8), then we need to find all elements that appear more than 2 (or 8/4) times.
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
                          <blockquote>Max. profit by buying and selling a share</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Hard.
                          Given stock prices throughout the day, find out the maximum profit that a share trader could have made, at most 2 transactions in a day.                                      
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
                          <blockquote>Array Subset of another array </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy.
                        Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. 
                        Task is to check whether a2[] is a subset of a1[] or not. 
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
                          <blockquote>Triplet Sum in Array </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Given an array arr of size n and an integer X. 
                          Find if there's a triplet in the array which sums up to the given integer X.
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
                          <blockquote>Trapping Rain Water  </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Given an array representing the height of blocks. 
                          Compute how much water can be trapped between the blocks during the rainy season. 
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
                          <blockquote>Chocolate Distribution Problem </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Easy.
                        Return the minimum possible difference between maximum number of chocolates given to a student and minimum number of chocolates given to a student.
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
                          <blockquote>Smallest subarray with sum greater than X</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Medium.
                          Given an array of integers and a number x, find the smallest subarray with sum greater than the given value. 
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
                          <blockquote>Three way partitioning </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty Level : Easy.
                          Given an array of size n and a range [a, b]. 
                          The task is to partition the array around the range such that array is divided into three parts.                                    
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
                          <blockquote>Minimum swaps and K together </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium.
                        Given an array of n positive integers and a number k. 
                        Find the minimum number of swaps required to bring all the numbers less than or equal to k together. 
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
                          <blockquote>Palindromic Array </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Easy.
                          Given a Integer array A[] of n elements. Your task is to complete the function PalinArray. 
                          Which will return 1 if all the elements of the Array are palindrome otherwise it will return 0.  
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
                          <blockquote>Find the median   </blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                          Difficulty : Easy.
                          Given an array arr[] of N integers, calculate the median.
                          FInd Median of 2 sorted arrays of equal size.
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
                          <blockquote>Median of arrays of different sizes</blockquote>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Difficulty Level : Medium
                        Given two sorted arrays, a[] and b[], the task is to find the median of these sorted arrays when n is size of first array, and m is size of second array.
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

export default Array;