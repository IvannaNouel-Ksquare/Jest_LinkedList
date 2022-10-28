//create a class for Node
//  -------- Class Node --------
class Node {
    //create a constructor
    //pass the data, which is what the node contains 
    //pass next since is going to be null because the last one should be null
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

//  -------- Class LinkedList --------
class LinkedList {
    //create a constructor
    //declare head equal to null, because the list is empty
    //declare the size that at the moment is declare as 0, since the list is empty
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //  -------- Method to add head --------
    //create a method that adds the first node and returns the node added
    //I will pass the data to insert the data which is what the list contains 
    addHead(data) {
        //we first are instantiating the class Node which is going to be used to pass the node to the head that is the first node
        //we pass the class to head since we need to fill the head 
        //passing the data and head again since our node constructor consist of next input in this case if head has a value then is going to be pass to the next  
        //so this way is going to push it next to it
        this.head = new Node(data, this.head);
        this.size++;
        return this.head;

    }
    //  -------- Method to add tail --------
    //create a method that adds the last node and returns the node added
    //I will pass the data to insert the data which is what the list contains 
    addTail(data) {
        let node = new Node(data);    //creat a variable to store the new node 
        let curr;    //creat a variable to store the current node 

        //this if statament is made to see if our list is empty
        //if not head then add node else add next 
        if (!this.head) {
            this.head = node;
        } else {
            //pass the head to curr node so if current node equals to head that means we need to add a new node next
            curr = this.head
            //this while we pass the next to head node
            while (curr.next) {
                //this will help go throght the list
                curr = curr.next;
            }
            //add the node to the end of the list
            curr.next = node;
        }
        this.size++;

        return curr.next;
    }

    //  -------- Method to insert at the middle of the list --------
    //pass the data to be on the middle node
    addAtMid(data) {
        //first we need to check if our list is empty 
        if (!this.head) {

            this.head = node;

        } else {
            //call our node to create one
            let node = new Node(data);
            let curr = this.head;
            let prev = curr.next;

            //while not equal to null then
            while (prev != null && prev.next != null) {
                curr = curr.next;
                prev = prev.next.next;
            }

            node.next = curr.next;
            return curr.next = node;
        }
        this.size++;
    }


    //  -------- Methods to delete --------
    //- [ 1 ] Delete the first element of the list
    //- [ 2 ] Delete an element in the middle of the list
    //- [ 3 ] Delete the last element of the list

    // [ 1  - Deletehead method]
    deleteHead() {//pass the index to see where we are going to delete
        let curr = this.head;
        let index = 0;
        if (index === 0) {//if we are going to delete head
            // head will equal to head next in this case current node which eventually is head
            this.head = curr.next;
        }
        this.size--;
        return curr.next;
    }

    // [ 2  - deleteTail method]
    deleteTail() {
        //first we need to check if our list is empty 
        if (!this.head) { this.head = node; }

        let prev = this.head;

        while (prev.next.next != null) {
            prev = prev.next;
        }

        prev.next = null;
        this.size--;

        return this.head;


    }

    // [ 3 - deleteMid method]
    deleteMid() {
        //first we need to check if our list is empty 
        if (!this.head) {
            this.head = node;
        }

        // Initialize two pointers
        let curr = this.head;
        let nextN = this.head.next.next;

        // Let 'nextN' move forward by two nodes(next,next), 'curr' move forward by one node 
        while (nextN != null && nextN.next != null) {
            curr = curr.next;
            nextN = nextN.next.next;
        }

        // When 'nextN' get to the end of the list it should remove the next node of 'curr' and return the head
        curr.next = curr.next.next;

        return this.head;

    }


    //  -------- Method to reverse the list --------
    reverseList() {
        //first we need to check if our list is empty 
        if (!this.head) {
            this.head = node;
        }

        //as we did before 
        //declare the variables 
        let curr = this.head;
        let prev = null;
        let next;

        //go through the list but in this case while is not point to null
        //so when is pointing to null will know we reach the end of the list
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        //this way we knoe we reached the end of the list
        return this.head = prev;
    }

    //  -------- Method to sort the list --------
    //While comparing the node next to each other.
    //actual nodes are swapped instead of just swapping the data.
    sortList() {
        //current head
        let curr = this.head;
        let nextNode = this.head.next;

        //bubble sort

        //functions as our for loop going to check the one side
        while (curr != null) {
            //functions as our for loop going to check the other side
            while (nextNode != null) {
                //if our data on the first node greater than the second then swap
                if (curr.data > nextNode.data) {
                    let tmp = nextNode.next.data;
                    nextNode.next.data= curr.data;
                    curr.data = nextNode.data;
                    nextNode.data = tmp;
                }
                nextNode = nextNode.next;
            }
            curr = curr.next;

            return this.head;
        }

    }

    //--
    //to print the list
    printList() {
        let curr = this.head;
        let str = "";
        while (curr) {
            if (curr.next == null) str += curr.data + " --> Null";
            else str += curr.data + " --> ";
            curr = curr.next;
        }
        console.log(str);
        return str;
    }

}

module.exports = LinkedList;
