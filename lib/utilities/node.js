"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    appendNode: function() {
        return appendNode;
    },
    appendTokens: function() {
        return appendTokens;
    },
    leadingIndexFromNodeAndTokens: function() {
        return leadingIndexFromNodeAndTokens;
    },
    removeNode: function() {
        return removeNode;
    },
    removeNodes: function() {
        return removeNodes;
    },
    removeTokens: function() {
        return removeTokens;
    },
    replaceNode: function() {
        return replaceNode;
    },
    replaceNodes: function() {
        return replaceNodes;
    },
    replaceTokens: function() {
        return replaceTokens;
    },
    trailingIndexFromNodeAndTokens: function() {
        return trailingIndexFromNodeAndTokens;
    }
});
var _necessary = require("necessary");
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return _array_like_to_array(arr);
}
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _to_consumable_array(arr) {
    return _array_without_holes(arr) || _iterable_to_array(arr) || _unsupported_iterable_to_array(arr) || _non_iterable_spread();
}
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _array_like_to_array(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _array_like_to_array(o, minLen);
}
var forwardsSome = _necessary.arrayUtilities.forwardsSome, backwardsSome = _necessary.arrayUtilities.backwardsSome;
function appendNode(replacementNode, parentNode) {
    var childNode = replacementNode; ///
    parentNode.appendChildNode(childNode);
}
function appendTokens(replacementTokens, parentNode, tokens) {
    var _tokens;
    var node = parentNode, trailingIndex = trailingIndexFromNodeAndTokens(node, tokens), start = trailingIndex + 1, deleteCount = 0;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function removeNode(removedNode, parentNode) {
    var removedChildNode = removedNode; ///
    parentNode.removeChildNode(removedChildNode);
}
function removeNodes(removedNodes, parentNode) {
    var removedChildNodes = removedNodes; ///
    parentNode.removeChildNodes(removedChildNodes);
}
function removeTokens(removedNode, tokens) {
    var node = removedNode, leadingIndex = leadingIndexFromNodeAndTokens(node, tokens), trailingIndex = trailingIndexFromNodeAndTokens(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
    tokens.splice(start, deleteCount);
}
function replaceNode(replacementNode, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNode = replacementNode; ///
    parentNode.replaceChildNode(replacedChildNode, replacementChildNode);
}
function replaceNodes(replacementNodes, replacedNode, parentNode) {
    var replacedChildNode = replacedNode, replacementChildNodes = replacementNodes; ///
    parentNode.replaceChildNodes(replacedChildNode, replacementChildNodes);
}
function replaceTokens(replacementTokens, replacedNode, tokens) {
    var _tokens;
    var node = replacedNode, leadingIndex = leadingIndexFromNodeAndTokens(node, tokens), trailingIndex = trailingIndexFromNodeAndTokens(node, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
    (_tokens = tokens).splice.apply(_tokens, [
        start,
        deleteCount
    ].concat(_to_consumable_array(replacementTokens)));
}
function leadingIndexFromNodeAndTokens(node, tokens) {
    var leadingIndex;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        leadingIndex = leadingIndexFromTerminalNodeAndTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
    }
    return leadingIndex;
}
function trailingIndexFromNodeAndTokens(node, tokens) {
    var trailingIndex;
    var nodeTerminalNode = node.isTerminalNode();
    if (nodeTerminalNode) {
        var terminalNode = node; ///
        trailingIndex = trailingIndexFromTerminalNodeAndTokens(terminalNode, tokens);
    } else {
        var nonTerminalNode = node; ///
        trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens);
    }
    return trailingIndex;
}
function leadingIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
    var leadingIndex;
    var significantToken = terminalNode.getSignificantToken();
    if (significantToken === null) {
        leadingIndex = -1;
    } else {
        var significantTokenIndex = tokens.indexOf(significantToken);
        leadingIndex = significantTokenIndex; ///
    }
    return leadingIndex;
}
function trailingIndexFromTerminalNodeAndTokens(terminalNode, tokens) {
    var trailingIndex;
    var significantToken = terminalNode.getSignificantToken();
    if (significantToken === null) {
        trailingIndex = -1;
    } else {
        var significantTokenIndex = tokens.indexOf(significantToken);
        trailingIndex = significantTokenIndex; ///
    }
    return trailingIndex;
}
function leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    var leadingIndex;
    var childNodes = nonTerminalNode.getChildNodes();
    forwardsSome(childNodes, function(childNode) {
        var node = childNode;
        leadingIndex = leadingIndexFromNodeAndTokens(node, tokens);
        if (leadingIndex !== -1) {
            return true;
        }
    });
    return leadingIndex;
}
function trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens) {
    var trailingIndex;
    var childNodes = nonTerminalNode.getChildNodes();
    backwardsSome(childNodes, function(childNode) {
        var node = childNode;
        trailingIndex = trailingIndexFromNodeAndTokens(node, tokens);
        if (trailingIndex !== -1) {
            return true;
        }
    });
    return trailingIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZE5vZGUocmVwbGFjZW1lbnROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IGNoaWxkTm9kZSA9IHJlcGxhY2VtZW50Tm9kZTsgIC8vL1xuXG4gIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGROb2RlKGNoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHBhcmVudE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcGFyZW50Tm9kZSwgLy8vXG4gICAgICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSAwO1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlKHJlbW92ZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlbW92ZWRDaGlsZE5vZGUgPSByZW1vdmVkTm9kZTsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGUocmVtb3ZlZENoaWxkTm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVOb2RlcyhyZW1vdmVkTm9kZXMsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZXMgPSByZW1vdmVkTm9kZXM7IC8vL1xuXG4gIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGROb2RlcyhyZW1vdmVkQ2hpbGROb2Rlcyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVUb2tlbnMocmVtb3ZlZE5vZGUsIHRva2Vucykge1xuICBjb25zdCBub2RlID0gcmVtb3ZlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50LCAuLi5yZXBsYWNlbWVudFRva2Vucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYWRpbmdJbmRleDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgbGVhZGluZ0luZGV4ID0gbGVhZGluZ0luZGV4RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH1cblxuICByZXR1cm4gbGVhZGluZ0luZGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucykge1xuICBsZXQgdHJhaWxpbmdJbmRleDtcblxuICBjb25zdCBub2RlVGVybWluYWxOb2RlID0gbm9kZS5pc1Rlcm1pbmFsTm9kZSgpO1xuXG4gIGlmIChub2RlVGVybWluYWxOb2RlKSB7XG4gICAgY29uc3QgdGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBub25UZXJtaW5hbE5vZGUgPSBub2RlOyAgLy8vXG5cbiAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIHRyYWlsaW5nSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGxlYWRpbmdJbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYWRpbmdJbmRleDtcblxuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgIGxlYWRpbmdJbmRleCA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgbGVhZGluZ0luZGV4ID0gc2lnbmlmaWNhbnRUb2tlbkluZGV4OyAvLy9cbiAgfVxuXG4gIHJldHVybiBsZWFkaW5nSW5kZXg7XG59XG5cbmZ1bmN0aW9uIHRyYWlsaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGxldCB0cmFpbGluZ0luZGV4O1xuXG4gIGNvbnN0IHNpZ25pZmljYW50VG9rZW4gPSB0ZXJtaW5hbE5vZGUuZ2V0U2lnbmlmaWNhbnRUb2tlbigpO1xuXG4gIGlmIChzaWduaWZpY2FudFRva2VuID09PSBudWxsKSB7XG4gICAgdHJhaWxpbmdJbmRleCA9IC0xO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IHNpZ25pZmljYW50VG9rZW5JbmRleCA9IHRva2Vucy5pbmRleE9mKHNpZ25pZmljYW50VG9rZW4pO1xuXG4gICAgdHJhaWxpbmdJbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleDsgLy8vXG4gIH1cblxuICByZXR1cm4gdHJhaWxpbmdJbmRleDtcbn1cblxuZnVuY3Rpb24gbGVhZGluZ0luZGV4RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBsZXQgbGVhZGluZ0luZGV4O1xuXG4gIGNvbnN0IGNoaWxkTm9kZXMgPSBub25UZXJtaW5hbE5vZGUuZ2V0Q2hpbGROb2RlcygpO1xuXG4gIGZvcndhcmRzU29tZShjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTtcblxuICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zKG5vZGUsIHRva2Vucyk7XG5cbiAgICBpZiAobGVhZGluZ0luZGV4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVhZGluZ0luZGV4O1xufVxuXG5mdW5jdGlvbiB0cmFpbGluZ0luZGV4RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2Vucyhub25UZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBsZXQgdHJhaWxpbmdJbmRleDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBiYWNrd2FyZHNTb21lKGNoaWxkTm9kZXMsIChjaGlsZE5vZGUpID0+IHtcbiAgICBjb25zdCBub2RlID0gY2hpbGROb2RlO1xuXG4gICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKHRyYWlsaW5nSW5kZXggIT09IC0xKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiB0cmFpbGluZ0luZGV4O1xufVxuXG4iXSwibmFtZXMiOlsiYXBwZW5kTm9kZSIsImFwcGVuZFRva2VucyIsImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVzIiwicmVtb3ZlVG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwidHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZm9yd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwicmVwbGFjZW1lbnROb2RlIiwicGFyZW50Tm9kZSIsImNoaWxkTm9kZSIsImFwcGVuZENoaWxkTm9kZSIsInJlcGxhY2VtZW50VG9rZW5zIiwidG9rZW5zIiwibm9kZSIsInRyYWlsaW5nSW5kZXgiLCJzdGFydCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVtb3ZlZE5vZGUiLCJyZW1vdmVkQ2hpbGROb2RlIiwicmVtb3ZlQ2hpbGROb2RlIiwicmVtb3ZlZE5vZGVzIiwicmVtb3ZlZENoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZE5vZGVzIiwibGVhZGluZ0luZGV4IiwiZW5kIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJsZWFkaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwibm9uVGVybWluYWxOb2RlIiwibGVhZGluZ0luZGV4RnJvbU5vblRlcm1pbmFsTm9kZUFuZFRva2VucyIsInRyYWlsaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwidHJhaWxpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFNZ0JBLFVBQVU7ZUFBVkE7O0lBTUFDLFlBQVk7ZUFBWkE7O0lBeURBQyw2QkFBNkI7ZUFBN0JBOztJQWhEQUMsVUFBVTtlQUFWQTs7SUFNQUMsV0FBVztlQUFYQTs7SUFNQUMsWUFBWTtlQUFaQTs7SUFXQUMsV0FBVztlQUFYQTs7SUFPQUMsWUFBWTtlQUFaQTs7SUFPQUMsYUFBYTtlQUFiQTs7SUE2QkFDLDhCQUE4QjtlQUE5QkE7Ozt5QkFyRmU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9CLElBQVFDLGVBQWdDQyx5QkFBYyxDQUE5Q0QsY0FBY0UsZ0JBQWtCRCx5QkFBYyxDQUFoQ0M7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