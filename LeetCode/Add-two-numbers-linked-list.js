/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
    constructor(data) {
        this.val = data;
        this.next = null
    }
}

var addTwoNumbers = function(l1, l2) {

    let i =0;
    let currentL1 = l1;
    let currentL2 = l2;
    let head;
    let currentNode;
    let carryOver=0;

    while(currentL1 || currentL2) {
        let sum =0;
        if(currentL1){

            sum = currentL1.val;
            currentL1 = currentL1.next;
        }
        if(currentL2){
            sum += currentL2.val;
            currentL2 = currentL2.next;
        }
        sum += carryOver;

        if(sum>9){
            sum = sum%10;
            carryOver = 1;
        }
        else {
            carryOver =0;
        }


        if(i===0){
            currentNode = new ListNode(sum);
            head = currentNode;

        }
        else {
            const newNode = new ListNode(sum);
            currentNode.next = newNode;
            currentNode = newNode;
        }

        i++
    }

    if(carryOver ===1){
        const  newNode = new ListNode(carryOver);
        currentNode.next = newNode;
    }

    return head;

};