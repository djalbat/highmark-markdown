"use strict";

export function fromFirstChildNode(nonTerminalNode, callback) {
  let result;

  const firstIndex = 0;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === firstIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

export function fromSecondChildNode(nonTerminalNode, callback) {
  let result;

  const secondIndex = 1;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === secondIndex) {
      const firstChildNode = childNode; ///

      result = callback(firstChildNode);

      return true;
    }
  });

  return result;
}

export function fromThirdChildNode(nonTerminalNode, callback) {
  let result;

  const thirdIndex = 2;

  nonTerminalNode.forwardsSomeChildNode((childNode, index) => {
    if (index === thirdIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

export function fromFirstLastChildNode(nonTerminalNode, callback) {
  let result;

  const multiplicity = nonTerminalNode.getMultiplicity(),
        firstLastIndex = multiplicity - 1;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    if (index === firstLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}

export function fromSecondLastChildNode(nonTerminalNode, callback) {
  let result;

  const multiplicity = nonTerminalNode.getMultiplicity(),
        secondLastIndex = multiplicity - 2;

  nonTerminalNode.backwardsSomeChildNode((childNode, index) => {
    if (index === secondLastIndex) {
      const thirdChildNode = childNode; ///

      result = callback(thirdChildNode);

      return true;
    }
  });

  return result;
}
