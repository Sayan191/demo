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
    queue:``
}
