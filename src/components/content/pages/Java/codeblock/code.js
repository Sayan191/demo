export default{
// java ds cheat sheet
Arrays:
`import java.util.*;
class JavaDemo {
    public static void main (String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = 5;
        int[] a = new int[5];
        for(int i=0 ; i<a.length ; i++){
            a[i] = sc.nextInt();
        }
        for(int i=0 ; i<a.length ; i++){
            System.out.print(a[i]+" ");
        }
    }
}

`,

LinkedList:
`import java.util.*;

class LLNode{
    int data;
    LLNode next;
	
    LLNode(int data){
        this.data=data;
        this.next=null;
    }
}


class Demo{
    LLNode head;	
    LLNode insertInBeg(int key,LLNode head){
        LLNode ttmp=new LLNode(key);	
        if(head==null)
            head=ttmp;
        else{
            ttmp.next=head;
            head=ttmp;
        }
        return head;
    }
	
	
    LLNode insertInEnd(int key,LLNode head)
    {
        LLNode ttmp=new LLNode(key);
        LLNode ttmp1=head;
            
        if(ttmp1==null)
            head=ttmp;
        else{
            while(ttmp1.next!=null)
                ttmp1=ttmp1.next;
            ttmp1.next=ttmp;
        }
            
        return head;
                
    }

    LLNode insertAtPos(int key,int pos,LLNode head)
    {
        LLNode ttmp=new LLNode(key);
        
        if(pos==1)
        {
            ttmp.next=head;
            head=ttmp;
        }
        else
        {
            LLNode ttmp1=head;
            for(int i=1;ttmp1!=null && i<pos;i++)
                ttmp1=ttmp1.next;
            ttmp.next=ttmp1.next;
            ttmp1.next=ttmp;
        }
        
        return head;
    }
	
	
    LLNode delete(int pos,LLNode head)
    {
        LLNode ttmp=head;
        if(pos==1)
            head=ttmp.next;
        else
        {
            for(int i=1;ttmp!=null && i<pos-1;i++)
                ttmp=ttmp.next;
            ttmp.next=ttmp.next.next;
        }
        return head;
    }
	
    int length(LLNode head)
    {
        LLNode ttmp=head;
        int c=0;
        if(ttmp==null)
            return 0;
        else
        {
            while(ttmp!=null)
            {	ttmp=ttmp.next;
                c++;
            }
        }
        return c;
    }
	
	
    LLNode reverse(LLNode head)
    {
        LLNode prevLNode=null,curLNode=head,nextLNode=null;
        while(curLNode!=null)
        {
            nextLNode=curLNode.next;
            curLNode.next=prevLNode;
            
            prevLNode=curLNode;
            curLNode=nextLNode;
        }
        
        head=prevLNode;
        return head;
    }
	
	
    void display(LLNode head)
    {
        LLNode ttmp=head;
        while(ttmp!=null)
            {System.out.print(ttmp.data+" ");
                ttmp=ttmp.next;
            }
    }
	
    public static void main(String[] args)
    {
        LinkedListDemo l=new LinkedListDemo();
        l.head=null;
        Scanner in=new Scanner(System.in);
        do
        {
            System.out.println("********* MENU *********");
            System.out.println("1.Insert In End");
            System.out.println("2.Insert In Beg");
            System.out.println("3.Insert At A  Particular Pos");
            System.out.println("4.Delete At a Pos");
            System.out.println("5.Length");
            System.out.println("6.Reverse");
            System.out.println("7.Display");
            System.out.println("8.EXIT");
            System.out.println("enter ur choice : ");
            int n=in.nextInt();
            switch(n)
            {
                case 1: System.out.println("enter the value ");
                        l.head=l.insertInEnd(in.nextInt(),l.head);
                        break;
                case 2: System.out.println("enter the value");
                        l.head=l.insertInBeg(in.nextInt(),l.head);
                        break;
                case 3: System.out.println("enter the value");
                        l.head=l.insertAtPos(in.nextInt(),in.nextInt(),l.head);
                        break;
                case 4: 
                        l.head=l.delete(in.nextInt(),l.head);
                        break;
                case 5: 
                        System.out.println(l.length(l.head));
                        break;
                case 6: 
                        l.head=l.reverse(l.head);
                        break;
                case 7: 
                        l.display(l.head);
                        break;
                case 8: System.exit(0);
                        break;
                default: System.out.println("Wrong Choice!");
                        break;
            }
            System.out.println("do u want to cont... ");
        }
        while(in.nextInt()==1);
    }
}
`,

Stack:
`import java.util.*;

class Stack
{
    int[] a;
    int top;
    Stack(){	
	    a=new int[100];
	    top=-1;
    }
  
    void push(int x)
    {	
	    if(top==a.length-1)
	    System.out.println("overflow");
	    else
	        a[++top]=x;
    }
   
    int pop()
    {
        if(top==-1)
		{
            System.out.println("underflow");
	        return -1;
		}
	    else
	        return(a[top--]);
	}
	
	void display()
	{
		for(int i=0;i<=top;i++)
			System.out.print(a[i]+" ");
		System.out.println();	
	}
	
	boolean isEmpty()
	{
		if(top==-1)
			return true;
		else 
			return false;
	}
	
	int peek()
	{
		if(top==-1)
			return -1;
		return (a[top]);
	}
	
	
}

public class Demo
{
	public static void main(String args[])
	{
		
		Stack s=new Stack();
		Scanner in= new Scanner(System.in);
		
        do
        {
            System.out.println("******** MENU *******");
            System.out.println("1.PUSH");
            System.out.println("2.POP");
            System.out.println("3.PEEK");
            System.out.println("4 IS EMPTY");
            System.out.println("5.EXIT");
            System.out.println("enter ur choice : ");
            switch(in.nextInt())
            {
                case 1: System.out.println("enter the value ");
                        s.push(in.nextInt());
                        break;
                case 2: System.out.println("popped element : "+ s.pop());
                        break;
                case 3: System.out.println("top element : "+ s.peek());
                        break;
                case 4: System.out.println(" is empty : "+ s.isEmpty());
                        break;
                case 5: System.exit(0);
                        break;
                default: System.out.println(" Wrong Choice!");
                        break;
            }
            System.out.println(" do u want to cont... ");
        }
        while(in.nextInt()==1);
	}
}

`,
QueueArray:
`import java.util.*;

class Queue{

    int front;
    int rear;
    int[] arr;
    Queue(){
        front=rear=-1;
        arr=new int[10];
    }

    void enqueue(int a){
        if(rear==arr.length-1)
        {
            System.out.println("overflow");
        }

        else
        {
            arr[++rear]=a;
        }
	
    	if(front==-1)
        {
            front++;
        }
    }
   
    int dequeue()
    {
        int x=-1;
        if(front==-1)
            System.out.println("underflow");
        else
            x=arr[front++];
        if(rear==0)
            rear--;
        return x;
    }
	
    void display(){
        for(int i=front;i<=rear;i++)
           System.out.print(arr[i]+" ");

        System.out.println();
    }
}

public class QueueDemo{

    public static void main(String[] args){
        Queue ob=new Queue();
        ob.enqueue(1);
        ob.enqueue(2);
        ob.enqueue(3);
        ob.enqueue(4);
        ob.enqueue(5);
        ob.display();
        ob.dequeue();
        ob.display();
    }
}
    
`,
QueueLL:
`class LNode{
    int data;
    LNode next;

    LNode(int d){
        data=d;
    }
}


class Queue{

    LNode enqueue(LNode head,int a)
    {
        LNode tmp=new LNode(a);
        if(head==null)
            head=tmp;
        else
        { 
            LNode tmp1=head;
            while(tmp1.next!=null)
                tmp1=tmp1.next;
        
            tmp1.next=tmp;
        }
        return head;
    }
	
	
    LNode dequeue(LNode head)
    {
        if(head==null)
            System.out.println("underflow");
        else
            head=head.next;
        return head;
    }
	
    void display(LNode head)
    {
    
        System.out.println("list is : ");
        if(head==null){					
            System.out.println("no LNodes");
            return;
        }
        LNode tmp=head;
        while(tmp!=null){			
            System.out.print(tmp.data+" ");
            tmp=tmp.next;
        }
    }
	
}	
public class QueueDemoLL{
		
    public static void main(String[] args)
    {
        Queue ob=new Queue();
        LNode head=null;	
        head=ob.enqueue(head,1);
        head=ob.enqueue(head,2);
        head=ob.enqueue(head,3);
        head=ob.enqueue(head,4);
        head=ob.enqueue(head,5);
        ob.display(head);
        head=ob.dequeue(head);
        ob.display(head);
    }
}
`,
BinaryTree:
`class TLNode
{
    int data;
    TLNode left,right;

    TLNode(int d)
    {
        data=d;
    }
}
 
public class BinaryTree
{
    static void preorder(TLNode r)
    {
        if(r==null)
            return;
        
        System.out.print(r.data+" ");
        
        preorder(r.left);
        preorder(r.right);
        
    }
    static void inorder(TLNode r)
    {
        if(r==null)
            return;
        
        
        inorder(r.left);
        System.out.print(r.data+" ");
        inorder(r.right);
        
    }
    static void postorder(TLNode r)
    {
        if(r==null)
            return;
        
        
        postorder(r.left);
        postorder(r.right);
        System.out.print(r.data+" ");

    }
     
    public static void main(String[] args)
    {
        TLNode root=new TLNode(1);
        
        root.left=new TLNode(2);
        root.right=new TLNode(3);
        
        root.left.left=new TLNode(4);
        root.left.right=new TLNode(5);
        
        root.right.left=new TLNode(6);
        root.right.right=new TLNode(7);
        preorder(root);
        System.out.println();
        
        inorder(root);
        System.out.println();
        
        postorder(root);
        System.out.println();
        
        
    }
}
`,
BST:
`class TLNode{

    int data;
    TLNode left,right;

    TLNode(int d)
    {
        data=d; 
    }
}
 
public class BST{
 
    TLNode root;

    TLNode insert(int d,TLNode root)
    {
        if(root==null)
        root=new TLNode(d);
        
        else if(d<=root.data)
        root.left=insert(d,root.left);

        else
        root.right=insert(d,root.right);

        return root;
    }

    TLNode search(int d,TLNode root)
    {
        if(root.data==d)
            return root;
        else if(d<root.data)
            return search(d,root.left);
        else
            return search(d,root.right);
    }

    void inorder(TLNode r)
    {
        if(r==null)
            return;	
        inorder(r.left);
        System.out.println(r.data);
        inorder(r.right);
        
    }


    TLNode delete(TLNode root, int data) 
    { 
        
        if (root == null)  return root; 

        if (data < root.data) 
            root.left = delete(root.left, data); 
        else if (data > root.data) 
            root.right = delete(root.right, data); 

        else
        { 
            
            if (root.left == null) 
                return root.right; 
            else if (root.right == null) 
                return root.left; 

            
            root.data = minValue(root.right); 

            root.right = delete(root.right, root.data); 
        } 

        return root; 
    } 	
    int minValue(TLNode root) 
    { 
        int minv = root.data; 
        while (root.left != null) 
        { 
            minv = root.left.data; 
            root = root.left; 
        } 
        return minv; 
    } 

    public static void main(String[] args)
    {
        BST ob=new BST();
        ob.root=ob.insert(50,ob.root); 
        ob.root=ob.insert(30,ob.root); 
        ob.root=ob.insert(20,ob.root); 
        ob.root=ob.insert(20,ob.root); 
        ob.root=ob.insert(70,ob.root); 
        ob.root=ob.insert(60,ob.root); 
        ob.root=ob.insert(80,ob.root);    
        ob.root=ob.delete(ob.root,50);
        System.out.println("******" +ob.root.data);
        ob.inorder(ob.root);
        
        TLNode find=ob.search(30,ob.root);
        if(find==null)
            System.out.println("not found");
        else
            System.out.println("found : "+find.data);
        
        
    }
}
`,
Heap:
`import java.util.*;

class Heap{

    int heapSize;

    void build_max_heap(int[] a)
    {
        heapSize=a.length;
        for(int i=(heapSize/2);i>=0;i--)
            max_heapify(a,i);
        
    }

    void max_heapify(int[] a,int i)
    {
        int l=2*i+1;
        int r=2*i+2;
        int largest=i;
        if(l<heapSize &&a[l]>a[largest])
            largest=l;
        if(r<heapSize &&a[r]>a[largest])
            largest=r;
        if(largest!=i)
        {
            int t=a[i];
            a[i]=a[largest];
            a[largest]=t;
            max_heapify(a,largest);
        }
        
    }

    //to delete the max element

    int extract_max(int[] a)
    {
        if(heapSize<0)
            System.out.println("underflow");
        int max=a[0];
        a[0]=a[heapSize-1];
        heapSize--;
        max_heapify(a,0);
        return max;
    }

    void increase_key(int[] a,int i,int key)
    {
        if(key<a[i])
            System.out.println("error");
        a[i]=key;
        while(i>=0 && a[(i-1)/2]<a[i])
        {
            int t=a[(i-1)/2];
            a[(i-1)/2]=a[i];
            a[i]=t;
            
            i=(i-1)/2;
        }
    }

    void print_heap(int a[])
    {
        for(int i=0;i<heapSize;i++)
            System.out.println(a[i]+" ");
    }
}
	
public class HeapDemo{
	
    public static void main(String[] args)
    {
        Scanner in=new Scanner(System.in);
        int n=in.nextInt();
        int a[]=new int[n];
        
        System.out.println("enter the elements of array");
        
        for(int i=0;i<n;i++)
            a[i]=in.nextInt();
                Heap ob=new Heap();
        
        ob.build_max_heap(a);
        ob.print_heap(a);
        
        
        System.out.println("maximum element is : "+ob.extract_max(a));
        ob.print_heap(a);
        System.out.println("maximum element is : "+ob.extract_max(a));
        ob.increase_key(a,6,800);
        ob.print_heap(a);
            
    }

}
`,
Graph:
`import java.util.*;

class Graph
{
    int v;
    LinkedList<Integer> adj[];

    Graph(int v)
    {
        this.v=v;
        adj=new LinkedList[v];
        for(int i=0;i<v;i++)
            adj[i]=new LinkedList<Integer>();
    }


    void addEdge(int u,int v)
    {
        adj[u].add(v);
    }

    void BFS(int s)
    {
        boolean[] visited=new boolean[v];
        LinkedList<Integer> q=new LinkedList<Integer>();
        q.add(s);
        visited[s]=true;

        while(!q.isEmpty())
        {
            int x=q.poll();
            System.out.print(x+" ");

            Iterator<Integer> itr=adj[x].listIterator();
            while(itr.hasNext())
            {
                int p=itr.next();
                if(visited[p]==false)
                {
                    visited[p]=true;
                    q.add(p);
                }
            }
        }
    }


    void DFSUtil(int s,boolean[] visited)
    {
        visited[s]=true;
        System.out.println(s);

        Iterator<Integer> itr=adj[s].listIterator();
        while(itr.hasNext())
        {
            int x=itr.next();
            if(visited[x]==false)
            {                                                        
                //visited[x]=true;

                DFSUtil(x,visited);
            } 
        }
    }


    void DFS(int s){
        boolean visited[]=new boolean[v];
        DFSUtil(s,visited);
    }

    public static void main(String[] args)
    {
        Graph g=new Graph(4);
        g.addEdge(0,1);
        g.addEdge(0,2);
        g.addEdge(1,2);
        g.addEdge(2,0);
        g.addEdge(2,3);
        g.addEdge(3,3);
            
        g.BFS(2);
        g.DFS(2);

    }
}
`,
//java collection framework
ArrayList:
`import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> cars = new ArrayList<String>();

        //The ArrayList class has many useful methods. For example, to add elements to the ArrayList, use the add() method:
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");

        //To access an element in the ArrayList, use the get() method and refer to the index number:
        cars.get(0);

        //To modify an element, use the set() method and refer to the index number:
        cars.set(0, "Opel");

        //To remove an element, use the remove() method and refer to the index number:
        cars.remove(0);

        //To remove all the elements in the ArrayList, use the clear() method:
        cars.clear();

        //To find out how many elements an ArrayList have, use the size method:
        cars.size();

        //Loop Through an ArrayList
        for (int i = 0; i < cars.size(); i++) {
            System.out.println(cars.get(i));
        }

        // for-each loop
        for (String i : cars) {
            System.out.println(i);
        }

        //Another useful class in the java.util package is the Collections class, which include the sort() method for sorting lists alphabetically or numerically:
        Collections.sort(cars);  // Sort cars

    }
}
`,
Vector:
`import java.util.Vector;

public class Main {
    public static void main(String[] args) {
        Vector<String> cars = new Vector<String>();

        //To add elements to the Vector, use the add() method:
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");

        //To access an element in the Vector, use the get() method and refer to the index number:
        cars.get(0);

        //To modify an element, use the set() method and refer to the index number:
        cars.set(0, "Opel");

        //To remove an element, use the remove() method and refer to the index number:
        cars.remove(0);

        //To remove all the elements in the Vector, use the clear() method:
        cars.clear();

        //To find out how many elements an Vector have, use the size method:
        cars.size();

        //Loop Through an Vector
        for (int i = 0; i < cars.size(); i++) {
            System.out.println(cars.get(i));
        }

        // for-each loop
        for (String i : cars) {
            System.out.println(i);
        }

        //Another useful class in the java.util package is the Collections class, which include the sort() method for sorting lists alphabetically or numerically:
        Collections.sort(cars);  // Sort cars

    }
}
`,
LinkedListCF:
`// Import the LinkedList class
import java.util.LinkedList;

public class Main {
    public static void main(String[] args) {
        LinkedList<String> cars = new LinkedList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");
        
        // Use addFirst() to add the item to the beginning
        cars.addFirst("Ferrari");

        // Use addLast() to add the item to the end
        cars.addLast("Rolls Royce");

        // Use removeFirst() remove the first item from the list
        cars.removeFirst();

        // Use removeLast() remove the last item from the list
        cars.removeLast();

        // Use getFirst() to display the first item in the list
        System.out.println(cars.getFirst());

        // Use getLast() to display the last item in the list
        System.out.println(cars.getLast());
    }
}
`,
HashSet:
`// Import the HashSet class
import java.util.HashSet;

public class Main {
    public static void main(String[] args) {
        HashSet<String> cars = new HashSet<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("BMW");
        cars.add("Mazda");
        System.out.println(cars);

        //To check whether an item exists in a HashSet, use the contains() method:
        cars.contains("Mazda");

        //To remove an item, use the remove() method:
        cars.remove("Volvo");

        //To remove all items, use the clear() method:
        cars.clear();

        //To find out how many items there are, use the size method
        cars.size();

        //Loop through the items of an HashSet with a for-each loop:
        for (String i : cars) {
            System.out.println(i);
        }
    }
}
`,
HashMap:
`// Import the HashMap class
import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        // Create a HashMap object called capitalCities
        HashMap<String, String> capitalCities = new HashMap<String, String>();

        // Add keys and values (Country, City)
        capitalCities.put("England", "London");
        capitalCities.put("Germany", "Berlin");
        capitalCities.put("Norway", "Oslo");
        capitalCities.put("USA", "Washington DC");
        System.out.println(capitalCities);

        //To access a value in the HashMap, use the get() method and refer to its key
        capitalCities.get("England");

        //To remove an item, use the remove() method and refer to the key:
        capitalCities.remove("England");

        //To remove all items, use the clear() method:
        capitalCities.clear();

        //To find out how many items there are, use the size() method:
        capitalCities.size();

        //Loop through the items of a HashMap with a for-each loop.
        // Print keys
        for (String i : capitalCities.keySet()) {
            System.out.println(i);
        }
        // Print values
        for (String i : capitalCities.values()) {
            System.out.println(i);
        }
        // Print keys and values
        for (String i : capitalCities.keySet()) {
            System.out.println("key: " + i + " value: " + capitalCities.get(i));
        }
    }
}
`,
Iterator:
`// Import the ArrayList class and the Iterator class
import java.util.ArrayList;
import java.util.Iterator;

public class Main {
    public static void main(String[] args) {

        // Make a collection
        ArrayList<String> cars = new ArrayList<String>();
        cars.add("Volvo");
        cars.add("BMW");
        cars.add("Ford");
        cars.add("Mazda");

        // Get the iterator
        Iterator<String> it = cars.iterator();

        // Print the first item
        System.out.println(it.next());

        //To loop through a collection, use the hasNext() and next() methods of the Iterator:
        while(it.hasNext()) {
            System.out.println(it.next());
        }

        //Another Example
        ArrayList<Integer> numbers = new ArrayList<Integer>();
        numbers.add(12);
        numbers.add(8);
        numbers.add(2);
        numbers.add(23);
        Iterator<Integer> it2 = numbers.iterator();
        while(it2.hasNext()) {
            Integer i = it2.next();
            if(i < 10) {
                it2.remove();
            }
        }
        System.out.println(numbers);
    }
}
`

};