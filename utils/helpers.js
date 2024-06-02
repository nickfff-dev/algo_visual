export const MakeDelay = async (delay) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
  };

function generateRandomId() {
return Math.floor(Math.random() * 100) + 1;
}

export function generateUnsortedTreePayload(levels, childrenPerNode) {
    const inArray = [];
function createNode(level) {
    if (level > levels) return null;
    let generatedId = generateRandomId();
    while (inArray.includes(generatedId)) {
    generatedId = generateRandomId();
    }
    inArray.push(generatedId);
    const node = {
    id: generatedId,
    name: generatedId.toString(),
    children: [],
    };

    for (let i = 0; i < childrenPerNode; i++) {
    const child = createNode(level + 1);
    if (child) {
        node.children.push(child);
    }
    }

    return node;
}
console.log("createNode", inArray)
return createNode(1);
};
// export function generateUnsortedTreePayload(maxDepth = 4, maxChildren = 2) {
//     function createNode(id) {
//       return { id, name: String(id), children: [] };
//     }
  
//     function addChildren(node, currentDepth) {
//       if (currentDepth >= maxDepth) return;
//       const childrenCount = Math.floor(Math.random() * maxChildren) + 1;
//       for (let i = 0; i < childrenCount; i++) {
//         const child = createNode(Math.floor(Math.random() * 100));
//         node.children.push(child);
//         addChildren(child, currentDepth + 1);
//       }
//     }
  
//     const root = createNode(Math.floor(Math.random() * 100));
//     addChildren(root, 1);
//     return root;
//   };

export function getAllNodes(node, nodes = []) {
    nodes.push(node);
    if (node.children) {
      node.children.forEach(child => getAllNodes(child, nodes));
    }
    return nodes;
  };

  export function updateTreeData(root, nodes) {
    const map = new Map();
    nodes.forEach(node => map.set(node.id, node));
    return rebuildTree(root, map);
  };
  
  export function rebuildTree(node, map) {
    const newNode = { ...map.get(node.id) };
    if (newNode.children) {
      newNode.children = newNode.children.map(child => rebuildTree(child, map));
    }
    return newNode;
  };