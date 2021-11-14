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
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

//1 2 4
//1 3 4
const mergeTwoLists = function (l1, l2) {
    if(l1==null || l1.val===null) return l2;

    let head = l1;
    let i = 0;
    while (l2 != null && l2.val != null) {
        let currentValue = l2.val;
        let previous = l1;
        while (l1 !== null && l1.val !== null && l2 !== null) {
            console.log("1", l1.val, currentValue);
            currentValue = l2.val
            console.log("2", l1.val, currentValue);
            if (l1.val < currentValue) {
                console.log("3. l1 is lower than l2, hence moving to next node in l1", l1.val, currentValue, l1.next);
                previous = l1;
                l1 = l1.next;
                i++;
            } else {
                console.log("4. l2 element " + currentValue + " is lower than than l1 value " + l1.val);
                const newNode = new ListNode(currentValue, l1)
                console.log("Printing new node", newNode);
                console.log("Printing previous node", previous);
                l2 = l2.next;
                if (i !== 0) {
                    previous.next = newNode;
                    l1 = previous;
                } else {
                    l1 = newNode;
                    head = l1;
                }
            }

        }
        if (l2 != null) {
            console.log("5.l2 element is higher than all the other l1 elements", l2)
            previous.next = l2;
            return head;
        }


    }
    return head;

};

const l1 = new ListNode(1)
const l2 = new ListNode(2)
l1.next = l2;
l3 = new ListNode(4)
l2.next = l3;

const a1 = new ListNode(1);
const b1 = new ListNode(3);
const c1 = new ListNode(4);
a1.next = b1;
b1.next = c1;

console.log(mergeTwoLists(l1, a1));

