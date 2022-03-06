class Node {
    id;
    adjacent;
    visited = false;
    inserted = false;

    constructor(id, nodes) {
        this.id = id;
        this.adjacent = nodes;
    }

}


const node = new Node(1)
const nodeTwo = new Node(2, [node]);


const stack = [];

const DFS = (node, stack) => {
    if (!node || (stack.length === 0 && node.visited)) return;
    if (!node.visited) {
        console.log(node)
        stack.push(node);
        node.visited = true;
    }

    let nextAdjacent;
    for (let i = 0; i < node.adjacent.length; i++) {
        nextAdjacent = node.adjacent[i];
        if (!node.adjacent[i].visited) {
            nextAdjacent = node.adjacent[i];
            break;
        }
    }
    if (nextAdjacent) DFS(nextAdjacent, stack);
    stack.pop();

    DFS(stack[stack.length - 1], stack);
}

DFS(node, stack);
