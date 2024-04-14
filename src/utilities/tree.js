"use strict";

import { arrayUtilities } from "necessary";

const { first, last } = arrayUtilities;

export function nestNodes(nodes) {
  const nestedNodesStack = NestedNodeStack.fromNothing();

  nodes.forEach((node) => {
    const level = node.getLevel();

    let nestedNodesStackLevel = nestedNodesStack.getLevel()

    while (nestedNodesStackLevel < level) {
      nestedNodesStackLevel = nestedNodesStack.increment();
    }

    while (nestedNodesStackLevel > level) {
      nestedNodesStackLevel = nestedNodesStack.decrement();
    }

    const nestedNode = NestedNode.fromNode(node);

    nestedNodesStack.addNestedNode(nestedNode);
  });

  const nestedNode = nestedNodesStack.getNestedNode();

  return nestedNode;
}

class NestedNode {
  constructor(node, childNestedNodes) {
    this.node = node;
    this.childNestedNodes = childNestedNodes;
  }

  getNode() {
    return this.node;
  }

  getChildNestedNodes() {
    return this.childNestedNodes;
  }

  addNestedNode(nestedNode) {
    const childNestedNode = nestedNode; ///

    this.childNestedNodes.push(childNestedNode);
  }

  static fromNode(node) {
    const childNestedNodes = [],
          nestedNode = new NestedNode(node, childNestedNodes);

    return nestedNode;
  }

  static fromNothing() {
    const node = null,
          childNestedNodes = [],
          nestedNode = new NestedNode(node, childNestedNodes);

    return nestedNode;
  }
}

class NestedNodeStack {
  constructor(nestedNodes) {
    this.nestedNodes = nestedNodes;
  }

  getNestedNodes() {
    return this.nestedNodes;
  }

  getLastNestedNode() {
    const lastNestedNode = last(this.nestedNodes);

    return lastNestedNode;
  }

  getNestedNode() {
    const firstNestedNode = first(this.nestedNodes),
          nestedNode = firstNestedNode;  ///

    return nestedNode;
  }

  getLevel() {
    const nestedNodesLength = this.nestedNodes.length,
          level = nestedNodesLength;  ///

    return level;
  }

  increment() {
    const nestedNode = NestedNode.fromNothing();

    this.addNestedNode(nestedNode);

    const level = this.getLevel();

    return level;
  }

  decrement() {
    this.removeNestedNode();

    const level = this.getLevel();

    return level;
  }

  addNestedNode(nestedNode) {
    const lastNestedNode = this.getLastNestedNode();

    lastNestedNode.addNestedNode(nestedNode);

    this.nestedNodes.push(nestedNode);
  }

  removeNestedNode() {
    const nestedNode = this.nestedNodes.pop();

    return nestedNode;
  }

  static fromNothing() {
    const nestedNode = NestedNode.fromNothing(),
          nestedNodes = [
            nestedNode
          ],
          nestedNodesStack = new NestedNodeStack(nestedNodes);

    return nestedNodesStack;
  }
}