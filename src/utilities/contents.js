"use strict";

import { arrayUtilities } from "necessary";

const { first, last } = arrayUtilities;

export function nestNodes(nodes) {
  const nestedNodesStack = NestedNodeStack.fromNothing();

  nodes.forEach((node) => {
    const depth = node.getDepth();

    let nestedNodesStackDepth = nestedNodesStack.getDepth()

    while (nestedNodesStackDepth < depth) {
      nestedNodesStackDepth = nestedNodesStack.increment();
    }

    while (nestedNodesStackDepth > depth) {
      nestedNodesStackDepth = nestedNodesStack.decrement();
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

  getDepth() {
    const nestedNodesLength = this.nestedNodes.length,
          depth = nestedNodesLength;  ///

    return depth;
  }

  increment() {
    const nestedNode = NestedNode.fromNothing();

    this.addNestedNode(nestedNode);

    const depth = this.getDepth();

    return depth;
  }

  decrement() {
    this.removeNestedNode();

    const depth = this.getDepth();

    return depth;
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
