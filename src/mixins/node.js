"use strict";

import { arrayUtilities } from "necessary";

const { first, last } = arrayUtilities;

function removeChildNodes(removedChildNodes) {
  const childNodes = this.getChildNodes(),
        firstRemovedChildNode = first(removedChildNodes),
        lastRemovedChildNode = last(removedChildNodes),
        firstIndex = childNodes.indexOf(firstRemovedChildNode), ///
        lastIndex = childNodes.indexOf(lastRemovedChildNode), ///
        start = firstIndex,  ///
        end = lastIndex + 1,
        deleteCount = end - start;

  childNodes.splice(start, deleteCount);
}

function removeChildNode(removedChildNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(removedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount);
}

function prependChildNode(prependedChildNode) {
  const childNodes = this.getChildNodes();

  childNodes.unshift(prependedChildNode);
}

function appendChildNode(appendedChildNode) {
  const childNodes = this.getChildNodes();

  childNodes.push(appendedChildNode);
}

function replaceChildNode(replacedChildNode, replacementChildNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, replacementChildNode);
}

function replaceChildNodes(replacedChildNode, replacementChildNodes) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
}

function addChildNodeAfter(existingChildNode, addedChildNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(existingChildNode),
        start = index + 1,
        deleteCount = 0;

  childNodes.splice(start, deleteCount, addedChildNode);
}

function addChildNodesAfter(existingChildNode, addedChildNodes) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(existingChildNode),
        start = index + 1,
        deleteCount = 0;

  childNodes.splice(start, deleteCount, ...addedChildNodes);
}

function fromFirstChildNode(callback) {
  let result;

  const firstIndex = 0;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === firstIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromSecondChildNode(callback) {
  let result;

  const secondIndex = 1;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === secondIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

function fromThirdChildNode(callback) {
  let result;

  const thirdIndex = 2;

  this.forwardsSomeChildNode((childNode, index) => {
    if (index === thirdIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromFirstLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        firstLastIndex = multiplicity - 1;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === firstLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

function fromSecondLastChildNode(callback) {
  let result;

  const multiplicity = this.getMultiplicity(),
        secondLastIndex = multiplicity - 2;

  this.backwardsSomeChildNode((childNode, index) => {
    if (index === secondLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

const nodeMixins = {
  removeChildNodes,
  removeChildNode,
  appendChildNode,
  prependChildNode,
  replaceChildNode,
  replaceChildNodes,
  addChildNodeAfter,
  addChildNodesAfter,
  fromFirstChildNode,
  fromSecondChildNode,
  fromThirdChildNode,
  fromFirstLastChildNode,
  fromSecondLastChildNode
};

export default nodeMixins;
