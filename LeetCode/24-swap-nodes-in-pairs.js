/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 1 2 3 4
 * 2 1 4 3
 */
var swapPairs = function (head) {
    if (!head) return head;
    let previous = null;
    let current = head;
    while (current.next) {
        const next = current.next;
        // adjacent
        if (!current.far && previous) {
            previous.next = next;
            const temp = next.next;
            next.next = current;
            current.next = temp;
            current = next.next;
            current.far = true
            previous = next;
        } else if (!current.far) {
            const temp = next.next;
            next.next = current
            current.next = temp;
            head = next
            current = next.next;
            current.far = true
            previous = next;
        }
        else{
            previous = current;
            current = current.next;
        }

    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
const node4 = new ListNode(8)
const node3 = new ListNode(4,node4);
const node2 = new ListNode(2,node3)
const node1 = new ListNode(1,node2)

console.log(JSON.stringify(swapPairs(node3)))
