const LinkedList = require("./linkedlist.js");

describe('JavaScript linked list tests', () => {
    const list = new LinkedList();

    //test 1
    it('Add a new value to the list head', () => {

        expect(list.head).toBeNull();          //first see if the list is empty to add out first node
        expect(list.addHead).toBeDefined();    //is going to be define because we don't pass any value to add first at the list
        expect(list.addHead(2).data).toBe(2);  //we first add a head to start the list and expect if we add a number on addHead we will get that data 
        //^only going to add one element to test when adding tail will add after the head
        expect(list.head).not.toBeNull();      //head is not null, which means a node was added, which means the list is not empty
        expect("2 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
    });

    //test 2
    it('Add a new value to the list tail', () => {

        expect(list.head.data).not.toBeNull();  //first see if list not empty
        expect(list.head.data).toBe(2);         //expects to the first[head] to be 2
        expect(list.addTail).toBeDefined();     //is going to be define because we haven't pass any value to add at the end of the list
        expect(list.addTail(21).data).toBe(21); //added a value to the tail of the list 
        expect(list.addTail(12).data).toBe(12); //added a value to the tail of the list 
        expect(list.addTail(10).data).toBe(10); //added a value to the tail of the list 
        expect("2 --> 21 --> 12 --> 10 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
    });

    //test 3
    it('Add a new value at the middle of the list', () => {

        expect(list.head.data).not.toBeNull();   //first see if list not empty
        expect(list.addAtMid(11).data).toBe(11); //add node at the middle of the list 
        expect(list.addAtMid(28).data).toBe(28); //add node at the middle of the list 
        expect(list.addAtMid(32).data).toBe(32); //add node at the middle of the list 
        expect(list.head.data).toBe(2);          //this means it did't add to the head
        expect("2 --> 21 --> 11 --> 32 --> 28 --> 12 --> 10 --> Null").toBe(list.printList()); //expected output <-same-> equals to output

    });

    //test 4
    it('Delete the first element of the list', () => {

        expect(list.head.data).not.toBeNull();   //first see if list not empty
        expect(list.head.data).toBe(2);         //expects to the first[head] to be 2
        expect(list.deleteHead().data).toBe(21);    //to be new head
        expect("21 --> 11 --> 32 --> 28 --> 12 --> 10 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
        expect(list.head.data).toBe(21);         //to see the new head value 
    });

    //test 5
    it('Delete the last element of the list', () => {

        expect(list.head.data).not.toBeNull();    //first see if list not empty
        expect(list.deleteTail().data).toBe(21);  //deleting tail
        expect("21 --> 11 --> 32 --> 28 --> 12 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
        expect(list.addTail(2).data).toBe(2);     //added a value to the tail of the list 
        expect(list.deleteTail().data).toBe(21);  //it deleted the tail
        expect("21 --> 11 --> 32 --> 28 --> 12 --> Null").toBe(list.printList());//expected output <-same-> equals to output
    });

    //test 6
    it('Delete an element in the middle of the list', () => {
        expect(list.head.data).not.toBeNull();    //first see if list not empty
        expect(list.deleteMid().data).toBe(21);   //deleting mid node 
        expect(list.deleteMid().data).toBe(21);   //deleting mid node
        expect("21 --> 11 --> 12 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
    });


    //test 7
    it('Sort the list and validate that the order', () => {
       expect(list.head.data).not.toBeNull();    //first see if list not empty
       expect(list.sortList().data).toBe(11);    //sort list and expect new head 11 and if pass then array sorted correctly
       expect(list.head.data).toBe(11);          //expects to the first[head] to be 11
       expect("11 --> 12 --> 21 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
    });


    //test 8
    it('Reverse the list and validate the order', () => {

        expect(list.head.data).toBe(11);          //first checks the head to be 11 to see if the head changes after
        expect(list.reverseList().data).toBe(21); //reverse the list and checks if head equals to 21
        expect("21 --> 12 --> 11 --> Null").toBe(list.printList()); //expected output <-same-> equals to output
        expect(list.head.data).toBe(21);          //new head equals to 21 
        expect(list.addHead(2).data).toBe(2);     //added a value to the head of the list 
        expect("2 --> 21 --> 12 --> 11 --> Null").toBe(list.printList()); //expected output <-same-> equals to output */
    });

});
