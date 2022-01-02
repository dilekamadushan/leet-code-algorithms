/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 * Input: head = [1,2,3,4,5], n = 2
 * Output: [1,2,3,5]
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
var removeNthFromEnd = function(head, n) {
    const origHead = head;
    const stack = [];
    while(head!==null){
        stack.push(head);
        head = head.next;
    }
    if(stack.length === 1) return origHead.val = null;
    const previousNode = stack[stack.length-n-1];
    const followingNode = stack[stack.length-n+1]|| null;
    if(previousNode){
        previousNode.next = followingNode;
    }
    else {
        return followingNode;
    }
    return origHead;

};



const nodeTwo = new ListNode(2);
const node = new ListNode(1, nodeTwo);

console.log("printing", removeNthFromEnd(node,2));


