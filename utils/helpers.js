export const MakeDelay = async (delay) => {
    await new Promise((resolve) => setTimeout(resolve, delay));
  };

function generateRandomId() {
return Math.floor(Math.random() * 100) + 1;
}

export function generateUnsortedTreePayload(levels, childrenPerNode) {
function createNode(level) {
    if (level > levels) return null;
    let generatedId = generateRandomId();
    const node = {
    id: generatedId,
    name: generatedId.toString(),
    children: []
    };

    for (let i = 0; i < childrenPerNode; i++) {
    const child = createNode(level + 1);
    if (child) {
        node.children.push(child);
    }
    }

    return node;
}

return createNode(1);
}

  