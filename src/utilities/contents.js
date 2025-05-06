"use strict";

import { arrayUtilities } from "necessary";

const { first, last } = arrayUtilities;

export function nestHTMLNodes(htmlNodes) {
  const nestedNodesStack = NestedNodeStack.fromNothing();

  htmlNodes.forEach((htmlNode) => {
    const depth = htmlNode.depth();

    let nestedNodesStackDepth = nestedNodesStack.getDepth()

    while (nestedNodesStackDepth < depth) {
      nestedNodesStackDepth = nestedNodesStack.increment();
    }

    while (nestedNodesStackDepth > depth) {
      nestedNodesStackDepth = nestedNodesStack.decrement();
    }

    const nestedNode = NestedNode.fromHTMLNode(htmlNode);

    nestedNodesStack.addNestedNode(nestedNode);
  });

  const nestedNode = nestedNodesStack.getNestedNode();

  return nestedNode;
}

class NestedNode {
  constructor(htmlNode, childNestedNodes) {
    this.htmlNode = htmlNode;
    this.childNestedNodes = childNestedNodes;
  }

  getHTMLNode() {
    return this.htmlNode;
  }

  getChildNestedNodes() {
    return this.childNestedNodes;
  }

  addNestedNode(nestedNode) {
    const childNestedNode = nestedNode; ///

    this.childNestedNodes.push(childNestedNode);
  }

  static fromHTMLNode(htmlNode) {
    const childNestedNodes = [],
          nestedNode = new NestedNode(htmlNode, childNestedNodes);

    return nestedNode;
  }

  static fromNothing() {
    const htmlNode = null,
          childNestedNodes = [],
          nestedNode = new NestedNode(htmlNode, childNestedNodes);

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
