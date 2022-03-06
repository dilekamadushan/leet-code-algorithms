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
const nodeTwo = new Node(2,[node]);


const BFS = (Graph)=>{
    Graph[0].inserted = true;
    const queue = [Graph[0]];
    while (queue.length!==0){
        const currentNode = queue.shift();
        console.log(currentNode.id);
            currentNode.adjacent.forEach(adjacentNode=>{
                if(!adjacentNode.visited && !adjacentNode.inserted){
                    adjacentNode.inserted = true;
                    queue.push(adjacentNode);
                }
            })
            currentNode.visited = true;
    }
}
