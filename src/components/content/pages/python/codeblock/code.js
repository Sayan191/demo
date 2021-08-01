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
    `
}
