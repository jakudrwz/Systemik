const canvas = document.querySelector(".canvas");
const emptyMessage = document.querySelector(".canvas__empty-message");

const GRID_SIZE = 32;

let nodes = [];

export function createNode(type) {
  const newNode = {
    id: crypto.randomUUID(),
    type: type,
    x: 64 + nodes.length * GRID_SIZE,
    y: 64 + nodes.length * GRID_SIZE
  };

  nodes.push(newNode);
}

export function renderNodes() {
  canvas.querySelectorAll(".node").forEach((nodeElement) => {
    nodeElement.remove();
  });

  nodes.forEach((node) => {
    const nodeElement = document.createElement("div");

    nodeElement.className = "node";
    nodeElement.textContent = getNodeLabel(node.type);

    nodeElement.style.left = `${node.x}px`;
    nodeElement.style.top = `${node.y}px`;

    canvas.appendChild(nodeElement);
  });

  emptyMessage.style.display = nodes.length === 0 ? "block" : "none";
}

function getNodeLabel(type) {
  const labels = {
    frontend: "Frontend",
    backend: "API / Backend",
    database: "Database",
    auth: "Auth",
    cache: "Cache"
  };

  return labels[type];
}