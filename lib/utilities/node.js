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
function removeNode(removedNode, parentNode) {
    var removedChildNode = removedNode; ///
    parentNode.removeChildNode(removedChildNode);
}
function removeNodes(removedNodes, parentNode) {
    var removedChildNodes = removedNodes; ///
    parentNode.removeChildNodes(removedChildNodes);
}
function removeTokens(removedNode, tokens) {
    var nonTerminalNode = removedNode, leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
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
    var nonTerminalNode = replacedNode, leadingIndex = leadingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), trailingIndex = trailingIndexFromNonTerminalNodeAndTokens(nonTerminalNode, tokens), start = leadingIndex, end = trailingIndex + 1, deleteCount = end - start;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvbm9kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmNvbnN0IHsgZm9yd2FyZHNTb21lLCBiYWNrd2FyZHNTb21lIH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGUocmVtb3ZlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVtb3ZlZENoaWxkTm9kZSA9IHJlbW92ZWROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkTm9kZShyZW1vdmVkQ2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZU5vZGVzKHJlbW92ZWROb2RlcywgcGFyZW50Tm9kZSkge1xuICBjb25zdCByZW1vdmVkQ2hpbGROb2RlcyA9IHJlbW92ZWROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZE5vZGVzKHJlbW92ZWRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVRva2VucyhyZW1vdmVkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHJlbW92ZWROb2RlLCAgLy8vXG4gICAgICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICB0cmFpbGluZ0luZGV4ID0gdHJhaWxpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpLFxuICAgICAgICBzdGFydCA9IGxlYWRpbmdJbmRleCwgLy8vXG4gICAgICAgIGVuZCA9IHRyYWlsaW5nSW5kZXggKyAxLFxuICAgICAgICBkZWxldGVDb3VudCA9IGVuZCAtIHN0YXJ0O1xuXG4gIHRva2Vucy5zcGxpY2Uoc3RhcnQsIGRlbGV0ZUNvdW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlcGxhY2VtZW50Tm9kZSwgcmVwbGFjZWROb2RlLCBwYXJlbnROb2RlKSB7XG4gIGNvbnN0IHJlcGxhY2VkQ2hpbGROb2RlID0gcmVwbGFjZWROb2RlLCAgLy8vXG4gICAgICAgIHJlcGxhY2VtZW50Q2hpbGROb2RlID0gcmVwbGFjZW1lbnROb2RlOyAvLy9cblxuICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZE5vZGUocmVwbGFjZWRDaGlsZE5vZGUsIHJlcGxhY2VtZW50Q2hpbGROb2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VOb2RlcyhyZXBsYWNlbWVudE5vZGVzLCByZXBsYWNlZE5vZGUsIHBhcmVudE5vZGUpIHtcbiAgY29uc3QgcmVwbGFjZWRDaGlsZE5vZGUgPSByZXBsYWNlZE5vZGUsICAvLy9cbiAgICAgICAgcmVwbGFjZW1lbnRDaGlsZE5vZGVzID0gcmVwbGFjZW1lbnROb2RlczsgLy8vXG5cbiAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGROb2RlcyhyZXBsYWNlZENoaWxkTm9kZSwgcmVwbGFjZW1lbnRDaGlsZE5vZGVzKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VUb2tlbnMocmVwbGFjZW1lbnRUb2tlbnMsIHJlcGxhY2VkTm9kZSwgdG9rZW5zKSB7XG4gIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IHJlcGxhY2VkTm9kZSwgIC8vL1xuICAgICAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKSxcbiAgICAgICAgc3RhcnQgPSBsZWFkaW5nSW5kZXgsIC8vL1xuICAgICAgICBlbmQgPSB0cmFpbGluZ0luZGV4ICsgMSxcbiAgICAgICAgZGVsZXRlQ291bnQgPSBlbmQgLSBzdGFydDtcblxuICB0b2tlbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCwgLi4ucmVwbGFjZW1lbnRUb2tlbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVhZGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKSB7XG4gIGxldCBsZWFkaW5nSW5kZXg7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnModGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIGxlYWRpbmdJbmRleCA9IGxlYWRpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpO1xuICB9XG5cbiAgcmV0dXJuIGxlYWRpbmdJbmRleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyYWlsaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpIHtcbiAgbGV0IHRyYWlsaW5nSW5kZXg7XG5cbiAgY29uc3Qgbm9kZVRlcm1pbmFsTm9kZSA9IG5vZGUuaXNUZXJtaW5hbE5vZGUoKTtcblxuICBpZiAobm9kZVRlcm1pbmFsTm9kZSkge1xuICAgIGNvbnN0IHRlcm1pbmFsTm9kZSA9IG5vZGU7ICAvLy9cblxuICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3Qgbm9uVGVybWluYWxOb2RlID0gbm9kZTsgIC8vL1xuXG4gICAgdHJhaWxpbmdJbmRleCA9IHRyYWlsaW5nSW5kZXhGcm9tTm9uVGVybWluYWxOb2RlQW5kVG9rZW5zKG5vblRlcm1pbmFsTm9kZSwgdG9rZW5zKTtcbiAgfVxuXG4gIHJldHVybiB0cmFpbGluZ0luZGV4O1xufVxuXG5mdW5jdGlvbiBsZWFkaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zKHRlcm1pbmFsTm9kZSwgdG9rZW5zKSB7XG4gIGxldCBsZWFkaW5nSW5kZXg7XG5cbiAgY29uc3Qgc2lnbmlmaWNhbnRUb2tlbiA9IHRlcm1pbmFsTm9kZS5nZXRTaWduaWZpY2FudFRva2VuKCk7XG5cbiAgaWYgKHNpZ25pZmljYW50VG9rZW4gPT09IG51bGwpIHtcbiAgICBsZWFkaW5nSW5kZXggPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIGxlYWRpbmdJbmRleCA9IHNpZ25pZmljYW50VG9rZW5JbmRleDsgLy8vXG4gIH1cblxuICByZXR1cm4gbGVhZGluZ0luZGV4O1xufVxuXG5mdW5jdGlvbiB0cmFpbGluZ0luZGV4RnJvbVRlcm1pbmFsTm9kZUFuZFRva2Vucyh0ZXJtaW5hbE5vZGUsIHRva2Vucykge1xuICBsZXQgdHJhaWxpbmdJbmRleDtcblxuICBjb25zdCBzaWduaWZpY2FudFRva2VuID0gdGVybWluYWxOb2RlLmdldFNpZ25pZmljYW50VG9rZW4oKTtcblxuICBpZiAoc2lnbmlmaWNhbnRUb2tlbiA9PT0gbnVsbCkge1xuICAgIHRyYWlsaW5nSW5kZXggPSAtMTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzaWduaWZpY2FudFRva2VuSW5kZXggPSB0b2tlbnMuaW5kZXhPZihzaWduaWZpY2FudFRva2VuKTtcblxuICAgIHRyYWlsaW5nSW5kZXggPSBzaWduaWZpY2FudFRva2VuSW5kZXg7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHRyYWlsaW5nSW5kZXg7XG59XG5cbmZ1bmN0aW9uIGxlYWRpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgbGV0IGxlYWRpbmdJbmRleDtcblxuICBjb25zdCBjaGlsZE5vZGVzID0gbm9uVGVybWluYWxOb2RlLmdldENoaWxkTm9kZXMoKTtcblxuICBmb3J3YXJkc1NvbWUoY2hpbGROb2RlcywgKGNoaWxkTm9kZSkgPT4ge1xuICAgIGNvbnN0IG5vZGUgPSBjaGlsZE5vZGU7XG5cbiAgICBsZWFkaW5nSW5kZXggPSBsZWFkaW5nSW5kZXhGcm9tTm9kZUFuZFRva2Vucyhub2RlLCB0b2tlbnMpO1xuXG4gICAgaWYgKGxlYWRpbmdJbmRleCAhPT0gLTEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlYWRpbmdJbmRleDtcbn1cblxuZnVuY3Rpb24gdHJhaWxpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMobm9uVGVybWluYWxOb2RlLCB0b2tlbnMpIHtcbiAgbGV0IHRyYWlsaW5nSW5kZXg7XG5cbiAgY29uc3QgY2hpbGROb2RlcyA9IG5vblRlcm1pbmFsTm9kZS5nZXRDaGlsZE5vZGVzKCk7XG5cbiAgYmFja3dhcmRzU29tZShjaGlsZE5vZGVzLCAoY2hpbGROb2RlKSA9PiB7XG4gICAgY29uc3Qgbm9kZSA9IGNoaWxkTm9kZTtcblxuICAgIHRyYWlsaW5nSW5kZXggPSB0cmFpbGluZ0luZGV4RnJvbU5vZGVBbmRUb2tlbnMobm9kZSwgdG9rZW5zKTtcblxuICAgIGlmICh0cmFpbGluZ0luZGV4ICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gdHJhaWxpbmdJbmRleDtcbn1cblxuIl0sIm5hbWVzIjpbImxlYWRpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVzIiwicmVtb3ZlVG9rZW5zIiwicmVwbGFjZU5vZGUiLCJyZXBsYWNlTm9kZXMiLCJyZXBsYWNlVG9rZW5zIiwidHJhaWxpbmdJbmRleEZyb21Ob2RlQW5kVG9rZW5zIiwiZm9yd2FyZHNTb21lIiwiYXJyYXlVdGlsaXRpZXMiLCJiYWNrd2FyZHNTb21lIiwicmVtb3ZlZE5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlZENoaWxkTm9kZSIsInJlbW92ZUNoaWxkTm9kZSIsInJlbW92ZWROb2RlcyIsInJlbW92ZWRDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGROb2RlcyIsInRva2VucyIsIm5vblRlcm1pbmFsTm9kZSIsImxlYWRpbmdJbmRleCIsImxlYWRpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJ0cmFpbGluZ0luZGV4IiwidHJhaWxpbmdJbmRleEZyb21Ob25UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzdGFydCIsImVuZCIsImRlbGV0ZUNvdW50Iiwic3BsaWNlIiwicmVwbGFjZW1lbnROb2RlIiwicmVwbGFjZWROb2RlIiwicmVwbGFjZWRDaGlsZE5vZGUiLCJyZXBsYWNlbWVudENoaWxkTm9kZSIsInJlcGxhY2VDaGlsZE5vZGUiLCJyZXBsYWNlbWVudE5vZGVzIiwicmVwbGFjZW1lbnRDaGlsZE5vZGVzIiwicmVwbGFjZUNoaWxkTm9kZXMiLCJyZXBsYWNlbWVudFRva2VucyIsIm5vZGUiLCJub2RlVGVybWluYWxOb2RlIiwiaXNUZXJtaW5hbE5vZGUiLCJ0ZXJtaW5hbE5vZGUiLCJsZWFkaW5nSW5kZXhGcm9tVGVybWluYWxOb2RlQW5kVG9rZW5zIiwidHJhaWxpbmdJbmRleEZyb21UZXJtaW5hbE5vZGVBbmRUb2tlbnMiLCJzaWduaWZpY2FudFRva2VuIiwiZ2V0U2lnbmlmaWNhbnRUb2tlbiIsInNpZ25pZmljYW50VG9rZW5JbmRleCIsImluZGV4T2YiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9k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