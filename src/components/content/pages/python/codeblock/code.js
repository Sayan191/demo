export default{
    stack:`
        # Stack() creates a new empty stack
        # push(item) add to stack
        # pop() removes item from the top
        # peek() shows you the top but does not remove
        # isEmpty() bool
        # size() return item size

        class Stack(object):
            def __init__(self):
                self.items = []

            def isEmpty(self):
                return self.items == []

            def push(self, item):
                self.items.append(item)

            def pop(self):
                self.items.pop()

            def peek(self):
                return self.items[len(self.items)-1]

            def size(self):
                return len(self.items)

        s = Stack()
        print s.isEmpty() 	# true
        s.push('two')
        s.peek()
        s.push(True)
        s.size() 			# 1
        s.isEmpty() 		# false
        s.pop() 			# 'two'`,
    queue:`# Queue() to create a queue
    # enqueue(item) to add to the rear
    # dequeue() removes from the front
    # isEmpty() is the bool
    # size() returns the size
    
    class Queue(object):
        def __init__(self):
            self.items = []
    
        def isEmpty(self):
            return self.items == []
    
        def enqueue(self, item):
            self.items.insert(0, item) # insert for FIFO
    
        def dequeue():
            return self.items.pop()
    
        def size():
            return len(self.items)
    
    q = Queue()
    q.size() 		# 0
    q.enqueue(1)
    q.enqueue(2)
    q.dequeue() 	# 1`,
    deque:`# Deque() create a deque
    # addFront(item)
    # addRear(item)
    # removeFront()
    # removeRear()
    # isEmpty()
    # size()
    
    class Deque(object):
        def __init__:
            self.items = []
    
        def isEmpty(self):
            return self.items == []
    
        # rear is the first index
        def addRear(self, item):
            self.items.insert(0, item)
    
        # front is the len(self.items) index
        def addFront(self, item):
            self.items.append(item)
    
        def removeFront(self):
            return self.items.pop()
    
        def removeRear(self):
            return self.items.pop(0)
    
        def size(self):
            return len(self.items)
    
    d = Deque()
    d.addFront('hello')
    d.addRear('world')
    d.size() 										# 2
    print d.removeFront() + ' ' + d.removeRear() 	# 'hello world'
    d.size() 										# 0`,
    sll:`class Node(object):
	        def __init__(self, value):
	        	self.value = value
	        	self.nextNode = None

        a = Node(1)
        b = Node(2)
        c = Node(3)

        # how to link the nodes?
        a.nextNode = b
        b.nextNode = c`,
    dll:`
    class Node(object):
	    def __init__(self, value):
	    	self.value = value
	    	self.nextNode = None
	    	self.prevNode = None

    a = Node(1)
    b = Node(2)
    c = Node(3)

    a.nextNode = b
    b.prevNode = a
    b.nextNode = c
    c.prevNode = b
    `,
    bst:`class BinaryTree(object):
        	def __init__(self, rootObj):
        		self.key = rootObj
        		self.leftChild = None
        		self.rightChild = None

        	def insertLeft(self, newNode):
        		if self.leftChild == None:
        			self.leftChild = BinaryTree(newNode)
        		else:
        			t = BinaryTree(newNode)
        			t.leftChild = self.leftChild
        			self.leftChild = t

        	def insertRight(self, newNode):
        		if self.rightChild == None:
        			self.rightChild = BinaryTree(newNode)
        		else:
        			t = BinaryTree(newNode)
        			t.rightChild(self.rightChild)
        			self.rightChild=(t)

        	# bring back Object Address values
        	def getRightChild(self):
        		return self.rightChild

        	def getLeftChild(self):
        		return self.leftChild

        	def setRootVal(self, obj):
        		self.key = obj

        	def getRootVal(self):
        		return self.key

        r = BinaryTree('a')
        r.getRootVal()
        # 'a'
        print r.getLeftChild()
        # None
        r.insertLeft('b')
        r.getLeftChild()
        # get address of another binary tree
        r.getLeftChild().getRootVal()
        # 'b'
    `,
    PreTree:`
    def preorder(tree):
	if tree != None:
		print(tree.getRootVal())
		preorder(tree.getLeftChild())
		preorder(tree.getRightChild())

    # implementation as a BinaryTree method
    # generally not what you will want to do
    def preorder(self):
    	print(self.key)
    	if self.leftChild:
    		self.leftChild.preorder()
    	if self.rightChild:
    		self.rightChild.preorder()
    `,
    inTree:`
    def inorder(tree):
	if tree != None:
		inorder(tree.getLeftChild())
		print(tree.getRootVal()) 				# print root for Proof of Concept
		inorder(tree.getRightChild())

    `,
    postTree:`
    def postorder(tree):
	if tree != None:
		preorder(tree.getLeftChild())
		preorder(tree.getRightChild())
		print(tree.getRootVal())

    `,
    BinaryHeap:`
        # BinaryHeap() - create new heap
        # insert(k) - adds a new item to the heap
        # findMin() - returns the item with the minimum key value, leaving item in the heap
        # delMin() - returns the item with the minimum key value, removing item from the heap
        	# requires that we take the last position and set it to the root
        	# restore order by pushing down new root node
        	# swap new root with smallest child recursively
        # isEmpty()
        # size
        # buildHeap(list) builds a new heap from a list of keys
        	# we can build a heap in O(n) operations

        class BinaryHeap(object):
        	def __init__(self):
        		self.heapList = [0]
        		self.currentSize = 0

        	def percUp(self, i):
        		while i // 2 > 0:
        			if self.heapList[i] < self.heapList[i // 2]:
        				tmp = self.heapList[i//2]
        				self.heapList[i//2] = self.heapList[i]
        				self.heapList[i] = tmp
        			i = i // 2

        	def insert(self, k):
        		self.heapList.append(k)
        		self.currentSize = self.currentSize + 1
        		self.percUp(self.currentSize)

        	def percDown(self, i):
        		while (i * 2) <= self.currentSize:
        			mc = self.minChild(i)
        			if self.heapList[i] > self.heapList[mc]:
        				tmp = self.heapList[i]
        				self.heapList[i] = self.heapList[mc]
        				self.heapList[mc] = tmp
        			i = mc

        	def minChild(self, i):
        		if i * 2 + 1 > self.currentSize:
        			return i * 2
        		else:
        			if self.heapList[i*2] < self.heapList[i*2+1]:
        				return i * 2
        			else:
        				return i * 2 + 1

        	def delMin(self):
        		retVal = self.heapList[1]
        		self.heapList[1] = self.heapList[self.currentSize]
        		self.currentSize = self.currentSize - 1
        		self.heapList.pop()
        		self.percDown(1)
        		return retVal

        	def buildHeap(self, aList):
        		i = len(aList) // 2
        		self.currentSize = len(aList)
        		self.heapList = [0] + aList[:]
        		while (i > 0):
        			self.percDown(i)
        			i = i - 1
        `,
        BinarySearch:`
        def recBinSearch(arr, el):
            if len(arr) == 0:
                return False
            else:
                mid = len(arr)/2
                if arr[mid] == el:
                    return True
                else:
                    if el < arr[mid]:
                        return recBinSearch(arr[:mid], el)
                    else:
                        return recBinSearch(arr[mid+1:], el])
        `,
        HashTable:`
        class HashTable:  
            def __init__(self):
                self.MAX = 100
                self.arr = [None for i in range(self.MAX)]
                
            def get_hash(self, key):
                hash = 0
                for char in key:
                    hash += ord(char)
                return hash % self.MAX
            
            def __getitem__(self, index):
                h = self.get_hash(index)
                return self.arr[h]
            
            def __setitem__(self, key, val):
                h = self.get_hash(key)
                self.arr[h] = val    
                
            def __delitem__(self, key):
                h = self.get_hash(key)
                self.arr[h] = None
        `
}
