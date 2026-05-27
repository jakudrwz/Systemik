import { createNode, renderNodes } from "./nodes.js";

const componentButtons = document.querySelectorAll(".component-card");

componentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;

    createNode(type);
    renderNodes();
  });
});